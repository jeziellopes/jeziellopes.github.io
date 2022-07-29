import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import gtag from './lib/gtag'

gtag.initialize()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":username" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
