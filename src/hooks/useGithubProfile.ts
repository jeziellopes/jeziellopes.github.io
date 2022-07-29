import { useEffect, useState } from 'react'

import { getUserGists, getUserRepos } from '../useCases/getUserRepos'

export const useGithubProfile = (user: string) => {
  // const [techs, setTechs] = useState<string[] | unknown[]>([])
  const [gists, setGists] = useState([])
  const [repos, setRepos] = useState([])

  // useEffect(() => {
  //   console.log(techs)
  // }, [techs])

  useEffect(() => {
    if (repos.length) return
    const timer = setTimeout(() => loadRepos(), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (gists.length) return
    const timer = setTimeout(() => loadGists(), 100)
    return () => clearTimeout(timer)
  })

  const loadRepos = async () => {
    const repos = await getUserRepos(user)
    const noForkRepos = repos.data
      .filter((repo: any) => !repo.fork)
      .filter((repo: any) => !repo.has_pages)
    setRepos(noForkRepos || [])
  }

  // const loadTechs = useCallback(() => {
  //   const techs = repos.map((repo: any) => repo?.language)
  //   setTechs((prev: string[]) =>
  //     Object.values(
  //       Object.fromEntries(new Set([...prev, ...techs]).entries())
  //     ).filter((v) => Boolean(v))
  //   )
  // }, [repos])

  // useEffect(() => {
  //   const timer = setTimeout(() => loadTechs(), 100)
  //   return () => clearTimeout(timer)
  // }, [repos])

  const loadGists = async () => {
    const gists = await getUserGists(user)
    setGists(
      gists.data.map((gist: any) => ({
        ...gist,
        name: Object.keys(gist.files).pop(),
      })) || []
    )
  }

  return { gists, repos }
}
