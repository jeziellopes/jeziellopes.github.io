import React from 'react'

import { useGithubProfile } from '../../../hooks'
import * as S from './styles'

type Props = {
  onClick?: () => void
}

export const Avatar = ({ onClick }: Props) => {
  const { user } = useGithubProfile()

  console.log(`aaa`, user.avatar_url)

  return (
    <S.Container onClick={onClick}>
      {onClick ? (
        <S.Image src={user.avatar_url} />
      ) : (
        <a
          href={`https://github.com/${user.login}`}
          // target="_blank"
          rel="noreferrer"
        >
          <S.Image src={user.avatar_url} />
        </a>
      )}
    </S.Container>
  )
}
