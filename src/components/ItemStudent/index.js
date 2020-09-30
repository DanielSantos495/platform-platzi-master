import React from 'react'

import { Article, Div, Img, TagCohort } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

export const ItemStudent = ({ firstName, lastName, cohort, email, github }) => {
  // Nombre, apellido, email, Cohort y github
  return (
    <Article>
      <Img src='' atl='Student avatar' />
      <Div>
        <p>{firstName} {lastName} <TagCohort cohortColor={parseInt(cohort)}>Cohort {parseInt(cohort)}</TagCohort></p>
        <div>
          <MdEmail size='32' />
          <p>{email}</p>
        </div>
        <div>
          <AiFillGithub size='32' />
          <p>{github}</p>
        </div>
      </Div>
    </Article>
  )
}
