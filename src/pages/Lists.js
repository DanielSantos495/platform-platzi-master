import React from 'react'

import { PanelOfCohort } from '../components/PanelOfCohort/index'
import { ListOfCohort } from '../containers/ListOfCohort'

const endPoints = {
  cohortUno: 'http://localhost:3000/cohortUno',
  cohortDos: 'http://localhost:3000/cohortDos',
  cohortTres: 'http://localhost:3000/cohortTres',
  cohortCuatro: 'http://localhost:3000/cohortCuatro',
  cohortCinco: 'http://localhost:3000/cohortCinco',
  cohortSeis: 'http://localhost:3000/cohortSeis'
}

export const Lists = () => {
  return (
    <>
      <PanelOfCohort cohort='Cohort 1'>
        <ListOfCohort api={endPoints.cohortUno} />
      </PanelOfCohort>
      <PanelOfCohort cohort='Cohort 2'>
        <ListOfCohort api={endPoints.cohortDos} />
      </PanelOfCohort>
      <PanelOfCohort cohort='Cohort 3'>
        <ListOfCohort api={endPoints.cohortTres} />
      </PanelOfCohort>
      <PanelOfCohort cohort='Cohort 4'>
        <ListOfCohort api={endPoints.cohortCuatro} />
      </PanelOfCohort>
      <PanelOfCohort cohort='Cohort 5'>
        <ListOfCohort api={endPoints.cohortCinco} />
      </PanelOfCohort>
      <PanelOfCohort cohort='Cohort 6'>
        <ListOfCohort api={endPoints.cohortSeis} />
      </PanelOfCohort>
    </>
  )
}
