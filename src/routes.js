import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Main from './pages/Main'
import Details from './pages/Details'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/main/:p' component={Main} />
        <Route path='/details/:p/:id' component={Details} />
      </Switch>
    </BrowserRouter>
  )
}
