import React from 'react'

import { FetchinData } from './FetchingData'
import { ItemStudent } from '../components/ItemStudent/index'

export const ListOfCohort = ({ api, fade, cohort }) => (
  <FetchinData api={api}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error!</p>
        const studentFilter = data.filter(item => item.cohort === cohort)
        return (
          <ul>
            {
              studentFilter.map(item => <ItemStudent fade={fade} key={item.id} {...item} />)
            }
          </ul>
        )
      }
    }
  </FetchinData>
)
