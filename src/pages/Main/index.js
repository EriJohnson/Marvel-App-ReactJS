import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import md5 from 'md5'
import { FiLinkedin, FiInstagram, FiSearch } from 'react-icons/fi'

import moment from 'moment'
import 'moment/locale/pt-br'

import {
  Wrapper,
  Header,
  HeaderContainer,
  SearchBar,
  ActionsContainer,
  Action,
  List,
  Card,
} from './styles'

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY

export default function Main() {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    ;(async () => {
      const ts = new Date().getTime()
      const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
      const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
      const resp = await fetch(url)
      const {
        data: { results },
      } = await resp.json()
      setHeroes(results)
      console.log(results)
    })()
  }, [])

  return (
    <Wrapper>
      <Header>
        <HeaderContainer>
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
        </HeaderContainer>
      </Header>

      <List>
        {heroes.map(hero => (
          <Link to={`/details/${hero.id}`}>
            <Card key={hero.id}>
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.description}
              />
              <h3>{hero.name}</h3>
              <span>{moment(hero.modified).format('LL')}</span>
            </Card>
          </Link>
        ))}
      </List>
    </Wrapper>
  )
}
