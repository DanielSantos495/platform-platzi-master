import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyles } from '../GlobalStyles/GlobalStyles'
import { Layout } from '../components/Layout/index'
import { Students } from '../pages/Students'
import { RegisterForm } from '../components/RegisterForm/index'

export const App = () => (
  <Layout>
    <GlobalStyles />
    <Router basepath='/'>
      <Students path='/' />
      <RegisterForm path='/register' />
    </Router>
  </Layout>
)
