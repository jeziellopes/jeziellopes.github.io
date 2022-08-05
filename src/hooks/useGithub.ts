import { useCallback, useEffect, useState } from 'react'

import { GithubUser } from '../types/GithubUser'
import { getUserRepos, getUser } from '../useCases/getUser'

export const useGithub = () => {
  const [username] = useState('jeziellopes')
  const [techs, setTechs] = useState<string[]>([])
  // const [gists, setGists] = useState([])
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState({} as GithubUser)

  useEffect(() => {
    // if (gists.length) return
    // const timer = setTimeout(() => loadGists(), 100)
    // return () => clearTimeout(timer)
  })

  useEffect(() => {
    const timer = setTimeout(() => loadUser(), 100)
    return () => clearTimeout(timer)
  }, [])

  const loadUser = async () => {
    const { data: userProfile } = await getUser(username)

    if (userProfile) {
      setUser(userProfile || ({} as GithubUser))
    }
  }

  const loadRepos = async () => {
    const repos = await getUserRepos(username)
    const noForkRepos = repos.data
      .filter((repo: any) => !repo.fork)
      .filter((repo: any) => !repo.has_pages)
    setRepos(noForkRepos || [])
  }

  const useReposEffect = useCallback(() => {
    if (repos.length) return
    const timer = setTimeout(() => loadRepos(), 100)
    return () => clearTimeout(timer)
  }, [repos, loadRepos])

  const loadTechs = useCallback(() => {
    const newTechs = repos.reduce(
      (newTechs: string[], repo: any) =>
        newTechs.includes(repo?.language) || !repo?.language
          ? newTechs
          : [...newTechs, repo?.language],
      []
    )
    setTechs(newTechs)
  }, [setTechs, techs, repos])

  useEffect(() => {
    const timer = setTimeout(() => loadTechs(), 100)
    return () => clearTimeout(timer)
  }, [repos])

  // const loadGists = async () => {
  //   const gists = await getUserGists(username)
  //   setGists(
  //     gists.data.map((gist: any) => ({
  //       ...gist,
  //       name: Object.keys(gist.files).pop(),
  //     })) || []
  //   )
  // }

  return { repos, techs, user, useReposEffect }
}
