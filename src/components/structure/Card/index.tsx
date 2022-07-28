import * as icons from '@icons-pack/react-simple-icons'
import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  description?: string
  height?: number
  width?: number
  tags?: string[]
  url?: string
  language?: string
}

export const Card = ({
  title,
  description,
  height,
  tags,
  url,
  language,
  ...props
}: Props) => {
  const iconName =
    language ||
    ''.charAt(0).toUpperCase() + language ||
    ''.slice(1).toLowerCase()

  const Icon = iconName?.length ? icons[iconName] : undefined

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <S.Container {...props}>
        <S.Header height={32}>
          <S.Title>{title}</S.Title>
          {Icon && <Icon size={32} color="#fff" />}
        </S.Header>
        <S.Content>
          <S.Description>{description}</S.Description>
        </S.Content>
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
