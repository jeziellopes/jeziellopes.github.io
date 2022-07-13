import ReactGA from 'react-ga4'

const initialize = () => {
  ReactGA.initialize('G-LWHHGPFPKM')
}

const trackAllPages = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname + window.location.search,
  })
}

export default { initialize, trackAllPages }
