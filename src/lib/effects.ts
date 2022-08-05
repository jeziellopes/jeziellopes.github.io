import { IS_PROD } from '../config'
import { linkInBioClick } from './ga'

export const instaEventEffect = (event: string | null) => {
  const timer = setTimeout(() => {
    if (event === 'insta') {
      if (IS_PROD) {
        linkInBioClick()
      } else {
        console.log('DEV: source: insta')
      }
    }
  }, 100)

  return () => clearTimeout(timer)
}
