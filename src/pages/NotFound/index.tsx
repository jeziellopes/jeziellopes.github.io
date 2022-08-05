import React, { useEffect } from 'react'

import ga from '../../lib/ga'
import * as S from './styles'

const NotFound = () => {
  // handle page view
  useEffect(() => {
    const timer = setTimeout(() => ga.trackAllPages(), 100)
    return () => clearTimeout(timer)
  })
  return (
    <S.Container>
      <S.Content>
        <S.Title>404</S.Title>
        <S.SubTitle>
          {/* {`Oops, it looks like you got lost far away from our system... :(`} */}
          {`Em breve... ;)`}
        </S.SubTitle>
      </S.Content>
    </S.Container>
  )
}

export default NotFound
