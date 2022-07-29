import React from 'react'

import { getIconName } from '../../../utils/icon'
import * as S from './styles'

type SimpleIconProps = {
  color?: string
  icon: string
  size: number
}

const SimpleIcon = ({ color, icon, size }: SimpleIconProps) => {
  return (
    <S.Container color={color}>
      <img
        height={size}
        width={size}
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v7.5.0/icons/${getIconName(
          icon || ''
        )}.svg`}
      />
    </S.Container>
  )
}

export default SimpleIcon
