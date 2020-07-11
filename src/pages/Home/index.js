import React from 'react'
import { Link } from 'react-router-dom'

import Heroes from '../../assets/imgs/Heroes.png'

import { Wrapper, Content, Section, Button } from './styles'

export default function Home() {
  return (
    <Wrapper>
      <Content>
        <Section>
          <h1>Marvel App</h1>
          <p>
            Uma aplicação para você conhecer detalhes dos seus heróis favoritos
          </p>
          <Link to='/main/0'>
            <Button>Conheça seus heróis</Button>
          </Link>
        </Section>

        <img src={Heroes} alt='Heróis da Marvel' />
      </Content>
    </Wrapper>
  )
}
