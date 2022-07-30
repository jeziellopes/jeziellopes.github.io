import styled, { css } from 'styled-components'

import { ImageProps } from '../../types'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  justify-content: flex-start;
  padding: 1.5em 1.5em 3em;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 2vh 0;
  min-height: 2em;
`

export const Image = styled.img<ImageProps>`
  ${({ size }) => css`
    border-radius: ${size / 2}px;
    box-shadow: 0px 4px 32px 0px rgba(255, 255, 255, 0.07);
    height: ${size}px;
    width: ${size}px;
  `}
`

export const Label = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.main.grey};
    font-family: ${theme.font.primary};
    font-size: 0.8em;
    font-weight: 500;
    margin-bottom: 0.1em;
    text-align: center;
  `}
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: 70vw;
  }
`

export const Quote = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.main.grey};
    font-family: ${theme.font.primary};
    font-size: 1em;
    font-style: italic;
    max-width: 380px;
    text-align: justify;
  `}
`
