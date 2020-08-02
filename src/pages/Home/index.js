import React from 'react'
import { useHistory } from 'react-router-dom'

import Heroes from '../../assets/imgs/Heroes2.png'

import { Wrapper, Content, Section, Button } from './styles'

export default function Home() {
  const history = useHistory()

  return (
    <Wrapper>
      <Content>
        <Section>
          <h1>Marvel App</h1>
          <p>
            Uma aplicação para você conhecer detalhes dos seus heróis favoritos
          </p>

          <Button onClick={() => history.push('/main/0')}>
            Conheça seus heróis
          </Button>
        </Section>

        <img src={Heroes} alt='Heróis da Marvel' />
      </Content>
    </Wrapper>
  )
}
