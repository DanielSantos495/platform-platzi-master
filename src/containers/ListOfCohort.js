import React from 'react'

import { ItemStudent } from '../components/ItemStudent/index'

export const ListOfCohort = ({ data, cohort, loading }) => {
  const studentFilter = data.filter(item => item.cohort === cohort)

  return (
    <ul>
      {
        studentFilter.map(item => <ItemStudent key={item.id} {...item} />)
      }
    </ul>
  )
}
