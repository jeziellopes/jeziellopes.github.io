import styled, { css } from 'styled-components'

import { Props } from '../../../types'

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  height: 5vh;
  justify-content: flex-end;
  padding: 1em;
  width: 100vw;
`

export const Label = styled.span<Props>`
  ${({ color, weight }) => css`
    color: ${color};
    font-family: FiraSansItalic;
    font-size: 12px;
    font-weight: ${weight || 'unset'};
    opacity: 0.5;
    text-align: center;
  `}
`

export const Brand = styled.span<Props>`
  ${({ color, weight }) => css`
    color: ${color};
    font-family: Rajdhani;
    font-size: 16px;
    font-weight: ${weight || 'unset'};
    text-align: center;
  `}
`
