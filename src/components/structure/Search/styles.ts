import styled, { css } from 'styled-components'

import { colorAnimations } from './../../../styles/animations'

export const Container = styled.div`
  left: 1.5em;
  position: absolute;
  top: 1.5em;
  width: calc(100vw - (3 * 1.5em) - 54px);
`

export const InputSearch = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 1px solid;
    border-color: ${theme.colors.main.light};
    border-radius: 4px;
    color: ${theme.colors.main.primary};
    font-family: ${theme.font.primary};
    font-size: 24px;
    height: 48px;
    text-indent: 16px;
    transition: border 0.5ms;

    ${colorAnimations}

    width: 100%;

    @media only screen and (max-width: 600px) {
      font-size: 1.2em;
    }
  `}
`
