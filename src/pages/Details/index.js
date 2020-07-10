import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import md5 from 'md5'

// import moment from 'moment'
// import 'moment/locale/pt-br'

import { Wrapper, Card, Thumbnail, Details } from './styles'

import Header from '../../components/Header'

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY

export default function Main() {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [comics, setComics] = useState([])

  useEffect(() => {
    ;(async () => {
      const ts = new Date().getTime()
      const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
      const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
      const resp = await fetch(url)
      const { data } = await resp.json()
      const { results } = data
      const { comics } = results[0]

      setDetails(results[0])
      setComics(comics)
    })()
  }, [])

  return (
    <Wrapper>
      <Header />
      <Card>
        <Thumbnail>
          <h1>{details.name}</h1>

          <img
            src={
              details.thumbnail &&
              `${details.thumbnail.path}.${details.thumbnail.extension}`
            }
            alt={details.name}
          />
        </Thumbnail>

        <Details>
          <h2>Descrição</h2>
          <p>{details.description}</p>

          <h2>Quadrinhos</h2>
          <ul>
            {comics.items &&
              comics.items
                .slice(0, 10)
                .map(item => <li key={item.name}>{item.name}</li>)}
          </ul>
        </Details>
      </Card>
    </Wrapper>
  )
}
