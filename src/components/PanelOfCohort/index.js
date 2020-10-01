import React, { useState } from 'react'

import { Article, Div } from './styles'

export const PanelOfCohort = ({ cohort, children }) => {
  const [fade, setFade] = useState(false)
  const handleClick = (e) => {
    if (!fade) {
      setFade(true)
    } else {
      setFade(false)
    }
  }
  return (
    <Article>
      <Div onClick={handleClick}>
        <h2>{cohort}</h2>
      </Div>
      <div fade={fade ? 1 : 0}>
        {children({ fade })}
      </div>
    </Article>
  )
}
