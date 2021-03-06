import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

import { Nav, Alert } from './_components'
import { Home } from './home/Home'
import { Jobs } from './jobs/Jobs'

function App() {
  const { pathname } = useLocation()

  return (
    <div className="app-container bg-light">
      <Alert />
      <div className="">
        <Switch>
          <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
          <Route exact path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  )
}

export { App }
