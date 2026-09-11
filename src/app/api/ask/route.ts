import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'
import { buildAssistantContext, profile } from '@/data/portfolio'

export const runtime = 'nodejs'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: 'GEMINI_API_KEY is not configured on the server.' },
      { status: 500 }
    )
  }

  let messages: ChatMessage[]
  try {
    const body = await req.json()
    messages = body.messages
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error('No messages provided.')
    }
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const systemPrompt = `You are an assistant embedded in ${profile.name}'s portfolio website. Answer questions about ${profile.name} using only the context below. Be concise, friendly, and speak in third person about them. If something isn't covered by the context, say you don't have that information rather than guessing.

Context:
${buildAssistantContext()}`

  try {
    const ai = new GoogleGenAI({ apiKey })

    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === 'assistant' ? ('model' as const) : ('user' as const),
      parts: [{ text: m.content }],
    }))

    const chat = ai.chats.create({
      model: 'gemini-flash-latest',
      history,
      config: { systemInstruction: systemPrompt },
    })

    const lastMessage = messages[messages.length - 1]
    const result = await chat.sendMessage({ message: lastMessage.content })
    const reply = result.text

    return NextResponse.json({ reply })
  } catch (err) {
    console.error('Gemini request failed:', err)
    return NextResponse.json(
      { error: 'The assistant is temporarily unavailable. Please try again later.' },
      { status: 502 }
    )
  }
}