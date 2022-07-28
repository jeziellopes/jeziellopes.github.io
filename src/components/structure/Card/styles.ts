import styled, { css, DefaultTheme } from 'styled-components'

import { fadeAnimations, shadowAnimations } from '../../../styles/animations'

export type Props = {
  theme: DefaultTheme
  height?: number
  width?: number
  size?: number
}

export const Container = styled.div<Props>`
  ${({ height, width }) => css`
    background: linear-gradient(45deg, #0094ff 0%, #6100ff 100%);

    box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.11);
    cursor: pointer;
    display: flex;
    flex-direction: column;

    height: ${height || 150}px;
    justify-content: flex-start;
    margin: 16px 0;
    padding: 8px;
    position: relative;
    width: ${`${width}px` || 'auto'};

    ${fadeAnimations}

    ${shadowAnimations}
  `}
`

export const Header = styled.div<Props>`
  ${({ height }) => css`
    display: flex;
    height: ${height || 100}px;

    svg {
      position: absolute;
      right: 16px;
    }
  `}
`

export const Content = styled.div<Props>`
  display: flex;
  padding: 8px;
`

export const Title = styled.span<Props>`
  ${({ theme }) => css`
    color: ${theme.colors.main.light};
    display: flex;
    font-family: FiraCodeRetina;
    font-size: 12px;
    line-height: 32px;
    margin-bottom: 16px;
    margin-left: 8px;
  `}
`

export const Description = styled.span<Props>`
  ${({ theme }) => css`
    color: ${theme.colors.main.light};
    display: flex;
    font-family: FiraCodeRetina;
    font-size: 10px;
  `}
`

export const Topics = styled.div`
  bottom: 8px;
  display: flex;
  position: absolute;
`

export const Tag = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.main.background};
    border-radius: 4px;
    color: ${theme.colors.main.light};
    display: flex;
    font-family: FiraCodeRetina;
    font-size: 8px;
    margin-right: 4px;
    padding: 4px;
  `}
`
