import React from 'react'
import { useParams } from 'react-router-dom'

import { useGithubProfile } from '../../../hooks'
import * as S from './styles'

export const Avatar = () => {
  const { username } = useParams()
  const { user } = useGithubProfile(username || 'jeziellopes')

  return (
    <S.Container>
      <a
        href={`https://github.com/${user}`}
        // target="_blank"
        rel="noreferrer"
      >
        <S.Image src={user.avatar_url} />
      </a>
    </S.Container>
  )
}
