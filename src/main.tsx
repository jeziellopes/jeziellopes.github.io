import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import gtag from './lib/gtag'

gtag.initialize()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
