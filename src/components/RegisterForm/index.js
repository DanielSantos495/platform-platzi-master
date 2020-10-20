import React, { useState } from 'react'
import { navigate } from '@reach/router'

import { ItemStudent } from '../ItemStudent/index'
import { Register, Form, Label, Button } from './styles'

export const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cohort: '',
    github: ''
  })
  const handleInput = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    navigate('/')
    console.log(e)
  }

  return (
    <Register>
      <ItemStudent {...form} />
      <h2>Registrate en la lista de Platzi Master</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          Nombre
          <input
            type='text'
            name='firstName'
            onChange={handleInput}
            value={form.firstName}
            placeholder='Nombre'
          />
        </Label>
        <Label>
          Apellido
          <input
            name='lastName'
            value={form.lastName}
            type='text'
            placeholder='Apellido'
            onChange={handleInput}
          />
        </Label>
        <Label>
          Correo
          <input
            name='email'
            value={form.email}
            type='email'
            placeholder='Correo'
            onChange={handleInput}
          />
        </Label>
        <Label>
          Cohort
          <input
            name='cohort'
            value={form.cohort}
            type='text'
            placeholder='Cohort'
            onChange={handleInput}
          />
        </Label>
        <Label>
          Github
          <input
            name='github'
            value={form.github}
            type='text'
            placeholder='Github'
            onChange={handleInput}
          />
        </Label>
        <Button>Registrarse</Button>
      </Form>
    </Register>
  )
}
