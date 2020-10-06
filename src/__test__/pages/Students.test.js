/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import { Students } from '../../pages/Students'

describe('<Students />', () => {
  const students = mount(<Students />)
  test('Render de Students', () => {
    expect(students.length).toEqual(1)
  })
})
// describe('Fetch API', () => {
//   beforeEach(() => {
//     fetch.resetMocks()
//   })
//   test('Llamar a una api y retornar sus datos', () => {
//     fetch.mockResponseOnce(JSON.stringify('Text of test'))
//     const getData = () => {

//     }
//   })
// })
