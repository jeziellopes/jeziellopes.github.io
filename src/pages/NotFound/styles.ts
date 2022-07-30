import styled from 'styled-components'

import imgUrl from './404.svg'

export const Container = styled.div`
  background-image: url(${imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vh;
  display: flex;
  height: 100%;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    background-size: 90vw;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  width: 50vw;

  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
`

export const Title = styled.h2`
  color: rgba(255, 255, 255, 1);
  font-family: FiraCodeRetina;
  font-size: 10em;
  margin: 0;
  text-align: center;

  @media only screen and (max-width: 900px) {
    font-size: 8em;
  }
`

export const SubTitle = styled.p`
  color: rgba(255, 255, 255, 1);
  font-family: FiraCodeRetina;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0em;
  line-height: 31px;
  margin: 0;
  text-align: center;
`
