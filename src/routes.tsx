import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Links from './pages/Links'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/links" element={<Links />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/ops" element={<NotFound />} /> */}
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
