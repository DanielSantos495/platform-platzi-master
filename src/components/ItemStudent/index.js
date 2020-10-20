import React from 'react'

import { Article, Div, Img, TagCohort } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

export const ItemStudent = ({ firstName, lastName, cohort, email, github }) => {
  return (
    <Article>
      <Img src='https://img.icons8.com/color/48/000000/student-male--v1.png' atl='Student avatar' />
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
