import { useEffect, useState } from 'react'

import { getUserGists, getUserRepos } from '../useCases/getUserRepos'

export const useGithubProfile = (user: string) => {
  const [gists, setGists] = useState([])
  const [repos, setRepos] = useState([])

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
    const noForkRepos = repos.data.filter(
      (repo: any) => !repo.fork || !repo.has_pages
    )
    setRepos(noForkRepos || [])
  }

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
