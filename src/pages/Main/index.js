import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import md5 from 'md5'

import moment from 'moment'
import 'moment/locale/pt-br'

import { Wrapper, List, Card } from './styles'

import Header from '../../components/Header'

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
      <Header />

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
