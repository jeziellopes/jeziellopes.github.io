import React from 'react'

import { getIconName } from '../../../utils/icon'
import SimpleIcon from '../SimpleIcon'
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
  return (
    <a
      href={url?.replace('github', 'github1s')}
      // target="_blank"
      rel="noreferrer"
    >
      <S.Container {...props}>
        <S.Header height={40}>
          <S.Title>{title}</S.Title>
          <SimpleIcon icon={getIconName(language || '')} size={24} />
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
