import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom'

import md5 from 'md5'

import moment from 'moment'
import 'moment/locale/pt-br'

import { Wrapper } from './styles'

import Header from '../../components/Header'

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY

export default function Main() {
  const { id } = useParams()
  const [heroDetail, setHeroDetails] = useState([])

  useEffect(() => {
    ;(async () => {
      const ts = new Date().getTime()
      const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
      const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
      const resp = await fetch(url)
      const {
        data: { results },
      } = await resp.json()
      console.log(results[0])
      setHeroDetails(results[0])
    })()
  }, [])

  return (
    <Wrapper>
      <Header />
      <span>
        {heroDetail.name} + {heroDetail.description}{' '}
      </span>
    </Wrapper>
  )
}
