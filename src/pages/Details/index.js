import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom'

import { Header } from './styles'

export default function Main() {
  return (
    <Header>
      <h1>Details</h1>
    </Header>
  )
}
