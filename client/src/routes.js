import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LinksPage } from './pages/Links.page'
import { CreatePage } from './pages/Create.page'
import { DetailPage } from './pages/Detail.page'
import { AuthPage } from './pages/Auth.page'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/create" component={CreatePage} />
        <Route exact path="/links" component={LinksPage} />
        <Route exact path="/detail/:id" component={DetailPage} />
        <Redirect to="/create" />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/" component={AuthPage} />
      <Redirect to="/" />
    </Switch>
  )
}
