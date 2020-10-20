import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GlobalStyles } from '../GlobalStyles/GlobalStyles'
import { Layout } from '../components/Layout/index'
import { Students } from '../pages/Students'
import { RegisterForm } from '../components/RegisterForm/index'

export const App = () => (
  <Layout>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Students} />
        <Route exact path='/register' component={RegisterForm} />
      </Switch>
    </BrowserRouter>
  </Layout>
)
