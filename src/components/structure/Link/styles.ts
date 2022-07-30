import styled, { css } from 'styled-components'

import { fadeAnimations, shadowAnimations } from '../../../styles/animations'
import { Props } from '../../../types'

export const Container = styled.div``

export const Link = styled.a<Props>`
  ${({ theme, height, width }) => css`
    align-self: center;
    background: linear-gradient(45deg, #0094ff 0%, #6100ff 100%);

    color: ${theme.colors.main.light};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: ${theme.font.primary};
    font-size: 16px;
    height: ${height || 50}px;
    justify-content: center;
    margin: 0.5em 0;
    position: relative;

    text-align: center;
    width: ${`${width}px` || 'auto'};

    ${fadeAnimations}

    ${shadowAnimations}
  `}
`
