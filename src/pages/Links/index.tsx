import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as CS from '../../components/structure'
import * as S from './styles'

const Links = () => {
  const navigate = useNavigate()

  return (
    <>
      <S.Container>
        <S.Row>
          <S.Quote>
            {`“I love to turn business and customers' needs into digital real-world
        solutions.” ✨`}
          </S.Quote>
        </S.Row>
        <S.Row>
          <S.Image src="images/avatar.png" size={128} />
        </S.Row>
        <S.Label>CEO at SOLITTI</S.Label>
        <S.Row>
          <S.Links>
            <CS.Link onClick={() => navigate('/projects')} label={'Projects'} />
            <CS.Link onClick={() => navigate('/ops')} label={'Clientes'} />
            <CS.Link onClick={() => navigate('/ops')} label={'Serviços'} />
            <CS.Link onClick={() => navigate('/ops')} label={'Pagamentos'} />
            <CS.Link onClick={() => navigate('/ops')} label={'Redes Sociais'} />
            <CS.Link onClick={() => navigate('/ops')} label={'Links Úteis'} />
          </S.Links>
        </S.Row>
      </S.Container>
      <CS.PoweredBy />
    </>
  )
}

export default Links
