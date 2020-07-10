import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import md5 from 'md5'
import Loader from 'react-loader-spinner'
import { FiArrowLeft } from 'react-icons/fi'

import { Wrapper, Card, Thumbnail, Details, Button } from './styles'

import Header from '../../components/Header'

const API_BASE = process.env.REACT_APP_MARVEL_API_BASE
const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY

export default function Main() {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [listComics, setListComics] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)

      const ts = new Date().getTime()
      const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
      const url = `${API_BASE}/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
      const resp = await fetch(url)
      const { data } = await resp.json()
      const { results } = data
      const { comics } = results[0]

      setDetails(results[0])
      setListComics(comics)

      setIsLoading(false)
    })()
  }, [id])

  return (
    <Wrapper>
      <Header />

      {isLoading ? (
        <Loader
          type='Rings'
          color='#f2141f'
          height={512}
          width={512}
          timeout={3000} //3 secs
        />
      ) : (
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
            {details.description ? (
              <>
                <p>{details.description}</p>
              </>
            ) : (
              <p>Indisponível</p>
            )}

            <h2>Quadrinhos</h2>
            {listComics.items != 0 ? (
              <ul>
                {listComics.items &&
                  listComics.items
                    //Função para mostrar apenas dez quadrinhos
                    .slice(0, 10)
                    .map(item => <li key={item.name}>{item.name}</li>)}
              </ul>
            ) : (
              <p>Indisponível</p>
            )}
          </Details>
        </Card>
      )}
      <Link to='/main'>
        <Button>
          <FiArrowLeft size={16} />
          Voltar
        </Button>
      </Link>
    </Wrapper>
  )
}
