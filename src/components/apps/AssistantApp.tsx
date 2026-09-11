'use client'

import { useRef, useState } from 'react'
import { Sparkles, Send } from 'lucide-react'
import { profile } from '@/data/portfolio'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'What projects have you built?',
  'What are your main skills?',
  'Tell me about your experience.',
]

export function AssistantApp() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return
    setError(null)
    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error ?? 'The assistant is unavailable right now.')
      }

      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
      })
    }
  }

  return (
    <div className="flex h-full flex-col text-primary">
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full surface-card">
              <Sparkles size={18} />
            </div>
            <p className="text-sm text-secondary">
              Ask me anything about {profile.name.split(' ')[0]}&apos;s work.
            </p>
            <div className="flex flex-col gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="surface-card surface-card-hover rounded-full border px-3 py-1.5 text-xs text-secondary"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
              m.role === 'user'
                ? 'ml-auto bg-white text-black'
                : 'surface-card text-primary'
            }`}
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="surface-card max-w-[85%] rounded-2xl px-3 py-2 text-sm text-muted">
            Thinking…
          </div>
        )}

        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          sendMessage(input)
        }}
        className="flex items-center gap-2 border-t border-[color:var(--border-subtle)] p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="surface-card flex-1 rounded-full px-3 py-2 text-sm text-primary placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-[color:var(--border-subtle)]"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Send"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black disabled:opacity-30"
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  )
}
