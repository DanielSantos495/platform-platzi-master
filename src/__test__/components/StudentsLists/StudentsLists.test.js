/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import listMock from '../../../__mocks__/listMock'
import { StudentsList } from '../../../components/StudentsLists/index'

describe('<StudentsList>', () => {
  // const handleFilterCohort = jest.fn()
  const testState = 'Fernando Perez'
  const wrapper = mount(
    <StudentsList
      onChange={e => testState[e.target.value]}
      data={listMock}
    />
  )
  test('Render de StudenList', () => {
    expect(wrapper.length).toEqual(1)
  })
  test('Búsqueda', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Fernando Perez' } })
    expect(testState).toEqual('Fernando Perez')
  })
})
