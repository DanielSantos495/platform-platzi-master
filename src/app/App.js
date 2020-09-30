import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyles } from '../GlobalStyles/GlobalStyles'
import { Layout } from '../components/Layout/index'
import { Lists } from '../pages/Lists'
import { RegisterForm } from '../components/RegisterForm/index'

export const App = () => (
  <Layout>
    <GlobalStyles />
    <Router>
      <Lists path='/list' />
      <RegisterForm path='/register' />

    </Router>
  </Layout>
)
