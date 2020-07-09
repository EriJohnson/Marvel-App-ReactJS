import React from 'react'

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
          <Button>Conheça seus Heróis</Button>
        </Section>

        <img src={Heroes} alt='Heróis da Marvel' />
      </Content>
    </Wrapper>
  )
}
