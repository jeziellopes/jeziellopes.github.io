export const getIconName = (language: string) => {
  if (!language.length) {
    language = 'Github'
  }

  switch (language) {
    case 'Dockerfile':
      return 'Docker'

    case 'TypeScript':
      return 'Typescript'

    default:
      return (
        (language || '').charAt(0).toUpperCase() +
        (language || '').slice(1).toLowerCase()
      )
  }
}
