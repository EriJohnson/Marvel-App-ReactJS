import React from 'react'
import { Link } from 'react-router-dom'

import { FiLinkedin, FiInstagram } from 'react-icons/fi'

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
        <Action>
          <FiLinkedin name='linkedin' color='#fff' size={32} />
        </Action>
        <Action>
          <FiInstagram name='linkedin' color='#fff' size={32} />
        </Action>
      </ActionsContainer>
    </Container>
  )
}
