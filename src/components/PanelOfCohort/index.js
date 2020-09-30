import React from 'react'

import { Article, Div } from './styles'

export const PanelOfCohort = ({ cohort, children }) => {
  return (
    <Article>
      <Div>
        <h2>{cohort}</h2>
      </Div>
      {children}
    </Article>
  )
}
