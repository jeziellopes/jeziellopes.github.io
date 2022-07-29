export const getIconName = (language: string) => {
  // define the default icon
  if (!language.length) {
    language = 'github'
  }

  // apply normalizations
  switch (language) {
    case 'Dockerfile':
      return 'docker'

    default:
      return (
        (language || '').charAt(0).toLowerCase() +
        (language || '').slice(1).toLowerCase()
      )
  }
}
