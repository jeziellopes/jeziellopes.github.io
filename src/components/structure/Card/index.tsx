import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  description?: string
  height?: number
  width?: number
  tags?: string[]
  url?: string
}

export const Card = ({ title, description, tags, url, ...props }: Props) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <S.Container {...props}>
        <S.Header height={100}>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Header>
        <S.Topics>
          {(tags || []).slice(0, 3).map((topic: any, key: number) => (
            <S.Tag key={key}>{topic}</S.Tag>
          ))}
          {tags && tags?.length > 3 && <S.Tag>...</S.Tag>}
        </S.Topics>
      </S.Container>
    </a>
  )
}
