import React from 'react'

import { FetchinData } from '../../containers/FetchingData'
import { ItemStudent } from '../ItemStudent/index'

export const ResultSearch = ({ validateReturn, search }) => {
  const studentsList = 'http://localhost:3000/studentsList'
  // const [search, setSearch] = useState('')

  // const handleInput = e => {
  //   setSearch(
  //     e.target.value
  //   )
  // }

  return (
    <FetchinData api={studentsList}>
      {
        ({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Loading...</p>
          // Podría usar includes, pero me trae toda la lista, antes de filtrarlo
          const searchStudent = data.filter(item =>
            `${item.firstName} ${item.lastName}`.toLowerCase() === search.toLowerCase()
          )
          /* if (searchStudent.length) validateReturn() */
          return (
            <div>
              {
                searchStudent.map(item => <ItemStudent key={item.id} {...item} />)
              }
            </div>
          )
        }
      }
    </FetchinData>
  )
}
