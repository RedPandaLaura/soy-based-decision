import { Theme } from "@/hooks/useTheme"
import { SunMoon } from "lucide-react"

type Props = {
  theme: Theme
  onToggle: () => void
  className?: string
}

export function ThemeSwitch({ theme, onToggle, className }: Props) {
  return (
    <button
      className={className}
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label="Tema scuro"
      onClick={onToggle}
    >
      <SunMoon size={20} />
    </button>
  )
}
