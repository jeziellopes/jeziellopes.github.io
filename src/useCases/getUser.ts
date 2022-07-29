import client from '../services/api/client'

export const getUserRepos = async (user: string) => {
  return client.get(`/users/${user}/repos`)
}

export const getUserGists = async (user: string) => {
  return client.get(`/users/${user}/gists`)
}

export const getUser = async (user: string) => {
  return client.get(`/users/${user}`)
}
