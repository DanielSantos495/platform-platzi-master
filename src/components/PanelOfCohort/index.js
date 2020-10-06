import React from 'react'
import { ListOfCohort } from '../../containers/ListOfCohort'

import { Article, Div } from './styles'

export const PanelOfCohort = ({ data, loading, ch }) => {
  return (
    <Article>
      <Div>
        <h2>{`Cohort ${ch}`}</h2>
      </Div>
      <div>
        <ListOfCohort data={data} cohort={ch} loading={loading} />
      </div>
    </Article>
  )
}
