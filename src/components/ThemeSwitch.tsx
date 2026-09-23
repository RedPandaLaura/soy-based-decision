import { Theme } from "@/hooks/useTheme"
import { SunMoon } from "lucide-react"

type Props = {
  theme: Theme
  onToggle: () => void
}

export function ThemeSwitch({ theme, onToggle }: Props) {
  return (
    <button
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label="Tema scuro"
      onClick={onToggle}
    >
      <SunMoon size={20} />
    </button>
  )
}
