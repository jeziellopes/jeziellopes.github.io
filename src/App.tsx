import React, { useEffect } from 'react'

import './App.css'
import { IS_DEV } from './config'
import ga from './lib/ga'
import { ThemeProvider } from './providers/theme'
import AppRoutes from './routes'
import GlobalStyles from './styles/global'

const App = () => {
  // GA Tracking on mount
  useEffect(() => {
    if (IS_DEV) return
    const timer = setTimeout(() => ga.initialize(), 100)
    return () => clearTimeout(timer)
  })

  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
