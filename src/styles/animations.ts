import { css } from 'styled-components'

/**
 * Default fade animations for the project
 */
export const fadeAnimations = css`
  animation: fade 0.5s ease-in-out;
  transition: transform 0.2s;

  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
`

/**
 * Default scale animations for the project
 */
export const scaleAnimations = css`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`

/**
 * Default shadow animations for the project
 */
export const shadowAnimations = css`
  box-shadow: 0px 0px 0px 0px #6100ff;
  transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.15s ease;

  &:hover {
    box-shadow: 4px 4px 0px 0px #6100ff;
    transform: translate(-2px, -2px);
  }
`
