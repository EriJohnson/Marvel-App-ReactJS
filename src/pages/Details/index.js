import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import md5 from 'md5'
import Loader from 'react-loader-spinner'
import { FiArrowLeft } from 'react-icons/fi'

import { Wrapper, Card, Thumbnail, Details, Button } from './styles'

import Header from '../../components/Header'

const API_BASE = process.env.REACT_APP_MARVEL_API_BASE
const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY

export default function Main() {
  const history = useHistory()
  const { pagination } = useParams()
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [listComics, setListComics] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function handlePreviousPage() {
    history.push(`/main/${pagination}`)
  }

  const fetchApi = useCallback(async () => {
    setIsLoading(true)

    const ts = new Date().getTime()
    const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
    const url = `${API_BASE}/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const { results } = data
    const { comics } = results[0]

    console.log(comics)
    setDetails(results[0])
    setListComics(comics)

    setIsLoading(false)
  }, [id])

  useEffect(() => {
    fetchApi()
  }, [fetchApi])

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
        <>
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
              {!details.description && <p>Indisponível</p>}
              <p>{details.description}</p>

              <h2>Quadrinhos</h2>
              {!listComics.available && <p>Indisponível</p>}

              <ul>
                {listComics.items &&
                  listComics.items
                    //Função para mostrar apenas dez quadrinhos
                    .slice(0, 10)
                    .map(item => <li key={item.name}>{item.name}</li>)}
              </ul>
            </Details>
          </Card>

          <Button onClick={handlePreviousPage}>
            <FiArrowLeft size={16} />
          </Button>
        </>
      )}
    </Wrapper>
  )
}
