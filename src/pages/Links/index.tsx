import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import * as CS from '../../components/structure'
import { instaEventEffect } from '../../lib/effects'
import ga from '../../lib/ga'
import * as S from './styles'

const Links = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => instaEventEffect(searchParams.get('source')))

  // handle page view
  useEffect(() => {
    const timer = setTimeout(() => ga.trackAllPages(), 100)
    return () => clearTimeout(timer)
  })

  return (
    <>
      <S.Container>
        {/* <S.Row>
          <S.Quote>
            {`“I love to turn business and customers' needs into digital real-world
        solutions.” ✨`}
          </S.Quote>
        </S.Row> */}
        <S.Row>
          <S.Image src="images/avatar.png" size={96} />
        </S.Row>
        <S.Name>JEZIEL CARVALHO</S.Name>
        <S.Label>Front End ReactJS • BS in Information Systems</S.Label>
        <S.Row>
          <S.Links>
            <CS.Link onClick={() => navigate('/projects')} label={'Projetos'} />
            <CS.Link onClick={() => navigate('/oops')} label={'Clientes'} />
            <CS.Link onClick={() => navigate('/oops')} label={'Serviços'} />
            <CS.Link onClick={() => navigate('/oops')} label={'Pagamentos'} />
            {/* <CS.Link onClick={() => navigate('/oops')} label={'Links Úteis'} /> */}
            <CS.Link
              to="https://www.linkedin.com/in/jezielcarvalho"
              label={'Linkedin'}
            />
            <CS.Link to="https://wa.me/5593841675" label={'Whatsapp'} />
          </S.Links>
        </S.Row>
      </S.Container>
      {/* <CS.PoweredBy /> */}
    </>
  )
}

export default Links
