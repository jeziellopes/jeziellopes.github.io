import React from 'react'

import * as S from './styles'

type Props = {
  to?: string
  label: string
  onClick?: () => void
}

export const Link = ({ to, label, onClick }: Props) => {
  return (
    <S.Container onClick={onClick}>
      <S.Link href={to}>{label}</S.Link>
    </S.Container>
  )
}
