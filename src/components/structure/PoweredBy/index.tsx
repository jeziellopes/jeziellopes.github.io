import React from 'react'

import * as S from './styles'

export const PoweredBy = () => {
  return (
    <S.Container>
      <S.Label color="#fff" weight={400}>
        Powered by &nbsp;
        <S.Brand color="#008CFF" weight={600}>
          SOLITTI
        </S.Brand>
      </S.Label>
    </S.Container>
  )
}
