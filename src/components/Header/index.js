import React from 'react'
import { Link } from 'react-router-dom'

import { FiLinkedin, FiInstagram, FiSearch } from 'react-icons/fi'

import { Container, SearchBar, ActionsContainer, Action } from './styles'

export default function Header() {
  return (
    <Container>
      <Link to='/'>
        <span>Marvel App</span>
      </Link>

      <SearchBar>
        <FiSearch name='linkedin' color='#fff' size={32} />
      </SearchBar>
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
