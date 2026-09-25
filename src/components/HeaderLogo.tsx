import styles from './HeaderLogo.module.css'
import { ThemeSwitch } from './ThemeSwitch'
import { useTheme } from '../hooks/useTheme'
import sbd from './../assets/soy-based-decision.png'

export function HeaderLogo(){
     const { theme, toggleTheme } = useTheme()


return (
<header className={styles.header}>
        <img src={sbd} alt="Three headed soybean" width={300}  />
        <ThemeSwitch theme={theme} onToggle={toggleTheme} />
      </header>
)
}