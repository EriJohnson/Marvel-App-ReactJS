import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import md5 from 'md5'
import Loader from 'react-loader-spinner'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import moment from 'moment'
import 'moment/locale/pt-br'

import { Wrapper, List, Card, Pagination } from './styles'

import Header from '../../components/Header'

const API_BASE = process.env.REACT_APP_MARVEL_API_BASE
const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY

export default function Main() {
  const [heroes, setHeroes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(0)

  function handleNextPage() {
    setPage(prevState => prevState + 20)
  }

  function handlePreviousPage() {
    if (page === 0) {
      return
    }
    setPage(prevState => prevState - 20)
  }

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)

      const ts = new Date().getTime()
      const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
      const url = `${API_BASE}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&offset=${page}`
      const resp = await fetch(url)
      const { data } = await resp.json()
      setHeroes(data.results)

      setIsLoading(false)
    })()
  }, [page])

  return (
    <Wrapper>
      <Header />

      {isLoading ? (
        <Loader
          type='Rings'
          color='#f2141f'
          height={512}
          width={512}
          timeout={3000}
        />
      ) : (
        <List>
          {heroes.map(hero => (
            <Link key={hero.id} to={`/details/${hero.id}`}>
              <Card>
                <img
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt={hero.description}
                />
                <h3>{hero.name}</h3>
                <h4>Ultima atualização</h4>
                <span>{moment(hero.modified).format('LL')}</span>
              </Card>
            </Link>
          ))}
        </List>
      )}
      <Pagination>
        <button onClick={handlePreviousPage}>
          <FiArrowLeft size={16} />
        </button>
        <button onClick={handleNextPage}>
          <FiArrowRight size={16} />
        </button>
      </Pagination>
    </Wrapper>
  )
}
