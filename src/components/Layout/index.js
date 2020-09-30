import React from 'react'

import { Header, Main } from './styles'

export const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <h1>Estudiantes de Platzi Master</h1>
        <img src='https://i.imgur.com/UEhJJIG.png' alt='Logo de Platzi Master' />
      </Header>
      <Main>
        {children}
      </Main>
    </>
  )
}
