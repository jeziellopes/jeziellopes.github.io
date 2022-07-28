import styled, { css } from 'styled-components'

import { Props } from '../../types'
import { fadeAnimations } from './../../styles/animations'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  width: 80vw;
`

export const Content = styled.div`
  margin-top: 100px;
  width: 80vw;

  ${fadeAnimations}
`

export const ContentGrid = styled.div`
  display: grid;
  flex-flow: row wrap;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export const Label = styled.span<Props>`
  ${({ theme, size }) => css`
    color: ${theme.colors.main.primary};
    font-family: Rajdhani;
    font-size: ${size || 32}px;
  `}
`
