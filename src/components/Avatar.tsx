interface AvatarProps {
  size?: number
  className?: string
}

// Generic flat person-silhouette avatar (dark circle, white icon) — the
// same shape used across the lock screen, top bar, and About window so it
// reads as one consistent visual element rather than a bolted-on extra.
export function Avatar({ size = 40, className = '' }: AvatarProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Profile avatar"
    >
      <circle cx="12" cy="12" r="12" fill="#1f2b30" />
      <circle cx="12" cy="9.2" r="3.4" fill="#ffffff" />
      <path
        d="M5.2 19.2c0-3.6 3-5.7 6.8-5.7s6.8 2.1 6.8 5.7a0.9 0.9 0 0 1-0.9 0.9H6.1a0.9 0.9 0 0 1-0.9-0.9Z"
        fill="#ffffff"
      />
    </svg>
  )
}
