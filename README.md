# Manuj Portfolio

A macOS-desktop-style personal portfolio: menu bar, dock, draggable windows,
Finder-style navigation, Spotlight-style search, and an AI assistant that
answers questions about you using your own data.

Built with Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion,
Zustand, and the Google Gemini API.

## 1. Install

```bash
npm install
```

## 2. Add your content

Open `src/data/portfolio.ts` and replace every placeholder with your real
info — name, role, bio, skills, education, projects, experience,
achievements, certifications, email, and links. This file is the single
source of truth: the windows, the dock, the search index, and the AI
assistant's context all read from it automatically.

Optional assets:
- Put a square photo at `public/avatar.jpg` (or update `avatarUrl`)
- Put your resume PDF at `public/resume.pdf`

## 3. Set up the AI assistant

1. Get a free Gemini API key at https://aistudio.google.com/app/apikey
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Paste your key into `.env.local`:
   ```
   GEMINI_API_KEY=your_key_here
   ```

Without this key, every other part of the site works fine — only the
"Ask Assistant" window will show an error when you send a message.

## 4. Run it

```bash
npm run dev
```

Open http://localhost:3000.

## 5. Deploy

Works out of the box on Vercel. Add `GEMINI_API_KEY` as an environment
variable in your Vercel project settings (Project → Settings →
Environment Variables) — don't commit `.env.local`.

## Project structure

```
src/
  app/
    api/ask/route.ts       AI assistant endpoint (Gemini)
    layout.tsx, page.tsx   App shell, desktop/mobile switch
    globals.css
  components/
    desktop/                MenuBar, Dock, Window, DesktopIcon, SearchSpotlight, Desktop
    apps/                    One component per window (About, Projects, etc.)
    MobileView.tsx           Simplified mobile layout
  data/portfolio.ts          <- YOUR CONTENT GOES HERE
  lib/apps.ts                 App registry (icons, titles, window sizes)
  store/useWindowStore.ts     Window open/close/drag/focus state (Zustand)
```

## Customizing

- **Wallpaper / colors**: edit the `backgroundImage` gradient in
  `src/components/desktop/Desktop.tsx`.
- **Which apps appear in the dock vs. only as desktop icons**: edit
  `onDock` / `onDesktop` flags in `src/lib/apps.ts`.
- **Window sizes**: `defaultSize` in `src/lib/apps.ts`.
- **Assistant's tone/behavior**: edit the `systemPrompt` in
  `src/app/api/ask/route.ts`.
