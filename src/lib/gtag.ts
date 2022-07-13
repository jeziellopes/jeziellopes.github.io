import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-W5CWNV9',
}

const initialize = () => {
  TagManager.initialize(tagManagerArgs)
}

const trackMaintenancePage = () => {
  const args = {
    dataLayer: {
      event: 'maintenance_page',
    },
    dataLayerName: 'PageDataLayer',
  }
  TagManager.dataLayer(args)
}

export default { initialize, trackMaintenancePage }
