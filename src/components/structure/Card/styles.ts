import styled, { css, DefaultTheme } from 'styled-components'

import { fadeAnimations, shadowAnimations } from '../../../styles/animations'

export type Props = {
  theme: DefaultTheme
  height?: number
  width?: number
  size?: number
}

export const Container = styled.div<Props>`
  ${({ theme, height, width }) => css`
    /* background-color: ${theme.colors.main.primary}; */

    background: linear-gradient(45deg, #6100ff 0%, #0094ff 100%);

    /* border-radius: 8px; */

    box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.11);
    cursor: pointer;
    display: flex;

    flex-direction: column;
    height: ${height || 500}px;
    justify-content: space-between;
    margin: 16px 0;
    padding: 8px;
    width: ${`${width}px` || 'auto'};

    ${fadeAnimations}

    ${shadowAnimations}
  `}
`

export const Header = styled.div<Props>`
  ${({ height }) => css`
    height: ${height || 100}px;
  `}
`

export const Title = styled.span<Props>`
  ${({ theme }) => css`
    color: ${theme.colors.main.light};
    display: flex;
    font-family: FiraCodeRetina;
    font-size: 12px;
    margin-bottom: 16px;
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
  display: flex;
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
