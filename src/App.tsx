import { Outlet } from 'react-router'
import styles from './App.module.css'
import { HeaderLogo } from './components/HeaderLogo'

export default function App() {

  return (
    <div className={styles.app}>
      <HeaderLogo></HeaderLogo>
      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
  )
}
