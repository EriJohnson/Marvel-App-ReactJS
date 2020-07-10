import React from 'react'
import { Link } from 'react-router-dom'

import { FiLinkedin, FiGithub } from 'react-icons/fi'

import { Container, ActionsContainer, Action } from './styles'

import logo from '../../assets/imgs/MarvelLogo.svg'

export default function Header() {
  return (
    <Container>
      <Link to='/'>
        <span>Marvel App</span>
      </Link>

      <img src={logo} alt='Logo clássico da Marvel' />

      <ActionsContainer>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/erijsfernandes/'
          rel='noopener noreferrer'
        >
          <Action>
            <FiLinkedin name='linkedin' color='#fff' size={32} />
          </Action>
        </a>

        <a
          target='_blank'
          href='https://github.com/EriJohnson'
          rel='noopener noreferrer'
        >
          <Action>
            <FiGithub name='linkedin' color='#fff' size={32} />
          </Action>
        </a>
      </ActionsContainer>
    </Container>
  )
}
