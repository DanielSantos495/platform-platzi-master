import React from 'react'

import { FetchinData } from './FetchingData'
import { ItemStudent } from '../components/ItemStudent/index'

export const ListOfCohort = ({ api }) => (
  <FetchinData api={api}>
    {
      ({ loading, error, data }) => {
        console.log(data.map(item => item.name))
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error!</p>
        return (
          <ul>
            {
              data.map(item => <ItemStudent key={item.id} {...item} />)
            }
          </ul>
        )
      }
    }
  </FetchinData>
)
