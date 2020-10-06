/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import { RegisterForm } from '../../../components/RegisterForm/index'

describe('<RegisterForm />', () => {
  const registerFrom = mount(<RegisterForm />)
  test('Render del formulario de registro', () => {
    expect(registerFrom.length).toEqual(1)
  })
})
