import styled, { css } from 'styled-components'

import { colorAnimations } from './../../../styles/animations'

export const Container = styled.div`
  left: 32px;
  position: absolute;
  top: 32px;
  width: 80%;
`

export const InputSearch = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 1px solid;
    border-color: ${theme.colors.main.light};
    border-radius: 4px;
    color: ${theme.colors.main.primary};
    font-family: FiraCodeRetina;
    font-size: 24px;
    height: 48px;
    text-indent: 16px;
    transition: border 0.5ms;

    ${colorAnimations}

    width: 100%;
  `}
`
