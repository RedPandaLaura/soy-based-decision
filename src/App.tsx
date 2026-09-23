import styles from './App.module.css'
import { ThemeSwitch } from './components/ThemeSwitch'
import { useTheme } from './hooks/useTheme'
import edamame from './assets/edamame.png'


export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Soy Based Decision</h1>
        <img src={edamame} alt="Three headed soybean" width={770} height={601} />
        <ThemeSwitch theme={theme} onToggle={toggleTheme} />
      </header>
      <main className={styles.main}>
        <p>Pronto.</p>
      </main>
    </div>
  )
}
