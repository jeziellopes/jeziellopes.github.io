import * as icons from '@icons-pack/react-simple-icons'
import React from 'react'

import { getIconName } from '../../../utils/icon'
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
  tags,
  url,
  language,
  ...props
}: Props) => {
  const iconName = getIconName(language || '')

  console.log(title, language, iconName)

  const Icon = iconName?.length ? icons[iconName] : undefined

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <S.Container {...props}>
        <S.Header height={40}>
          <S.Title>{title}</S.Title>
          <S.IconContainer>
            {Icon && <Icon size={24} color="#fff" />}
          </S.IconContainer>
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
