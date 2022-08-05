import React, { createContext, useContext } from 'react'

import { useGithub } from '../hooks'
import { GithubUser } from './../types/GithubUser'

export type ContextType = {
  gists?: any[]
  repos: any[]
  techs: string[]
  user: GithubUser
  useReposEffect: () => (() => void) | undefined
}

export const GithubContext = createContext<ContextType>({
  gists: [],
  repos: [],
  techs: [],
  user: {} as GithubUser,
  useReposEffect: () => () => undefined,
})

export type ReactProps = {
  children?: React.ReactNode | React.ReactNode[]
}

export const GithubProvider = ({ children }: ReactProps) => {
  const { repos, techs, user, useReposEffect } = useGithub()

  return (
    <GithubContext.Provider value={{ repos, techs, user, useReposEffect }}>
      {children}
    </GithubContext.Provider>
  )
}

export const useGithubContext = () => useContext(GithubContext)
