import React, { useEffect } from 'react'

import './App.css'
import { IS_DEV } from './config'
import ga from './lib/ga'
import Projects from './pages/Projects'
import { ThemeProvider } from './providers/theme'
import GlobalStyles from './styles/global'

const App = () => {
  // // GA Tracking on mount
  useEffect(() => {
    if (IS_DEV) return
    const timer = setTimeout(() => ga.initialize(), 100)
    return () => clearTimeout(timer)
  })

  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <Projects />
      </ThemeProvider>
    </>
  )
}

export default App
