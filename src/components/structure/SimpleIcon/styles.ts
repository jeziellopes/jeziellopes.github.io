import styled, { DefaultTheme } from 'styled-components'

export type Props = {
  theme: DefaultTheme
}

export const Container = styled.div<Props>`
  filter: invert(100%);
`
