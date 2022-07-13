import React, { useEffect } from 'react'

import './App.css'
import ga from './lib/ga'
import Maintenance from './pages/Maintenance'

const App = () => {
  // // GA Tracking on mount
  useEffect(() => {
    const timer = setTimeout(() => ga.initialize(), 100)
    return () => clearTimeout(timer)
  })

  return <Maintenance />
}

export default App
