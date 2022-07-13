import React from 'react'

import ParticlesWrapper from '../../components/ParticlesWrapper'
import gtag from '../../lib/gtag'

gtag.trackMaintenancePage()

function App() {
  return (
    <>
      <ParticlesWrapper />
      <div className="container">
        <div className="avatar">
          <a
            href="https://github.com/jeziellopes"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://avatars.githubusercontent.com/u/50778558?v=4" />
          </a>
        </div>
        <div className="content">
          <h3>Loading portfolio...</h3>
        </div>
        <div className="footer">
          <a
            href="mailto:jeziellcarvalho@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            📨 jeziellcarvalho@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jezielcarvalho"
            target="_blank"
            rel="noreferrer"
          >
            👋 www.linkedin.com/in/jezielcarvalho
          </a>
        </div>
      </div>
    </>
  )
}

export default App
