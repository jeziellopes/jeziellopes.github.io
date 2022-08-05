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

export const linkInBioClick = () => {
  return ReactGA.event({
    category: 'Click',
    action: 'Click Link In Bio',
    label: 'Link In Bio',
  })
}

export default { initialize, trackAllPages, linkInBioClick }
