import React, { createContext, useContext } from 'react'

import { useGithub } from '../hooks'
import { GithubUser } from './../types/GithubUser'

export type ContextType = {
  gists: any[]
  repos: any[]
  techs: string[]
  user: GithubUser
}

export const GithubContext = createContext<ContextType>({
  gists: [],
  repos: [],
  techs: [],
  user: {} as GithubUser,
})

export type ReactProps = {
  children?: React.ReactNode | React.ReactNode[]
}

export const GithubProvider = ({ children }: ReactProps) => {
  const { gists, repos, techs, user } = useGithub()

  return (
    <GithubContext.Provider value={{ gists, repos, techs, user }}>
      {children}
    </GithubContext.Provider>
  )
}

export const useGithubContext = () => useContext(GithubContext)
