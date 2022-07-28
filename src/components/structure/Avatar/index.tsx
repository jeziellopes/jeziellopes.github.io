import React from 'react'

import * as S from './styles'

export const Avatar: React.FC = () => {
  return (
    <S.Container>
      <a href="https://github.com/jeziellopes" target="_blank" rel="noreferrer">
        <S.Image src="https://avatars.githubusercontent.com/u/50778558?v=4" />
      </a>
    </S.Container>
  )
}
