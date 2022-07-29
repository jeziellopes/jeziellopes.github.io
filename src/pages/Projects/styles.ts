import styled, { css } from 'styled-components'

import { Props } from '../../types'
import { fadeAnimations } from './../../styles/animations'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5em;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
  width: 80vw;
`

export const Content = styled.div`
  margin-top: 5vh;

  ${fadeAnimations}
`

export const ContentGrid = styled.div`
  display: grid;
  flex-flow: row wrap;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const MainTechs = styled.div`
  display: flex;

  img {
    margin: 8px;
  }
`

export const Label = styled.span<Props>`
  ${({ theme }) => css`
    color: ${theme.colors.main.primary};
    font-family: Rajdhani;
    font-size: 1.7em;
    margin-top: 10em;
  `}
`
