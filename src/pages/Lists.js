import React, { useState } from 'react'

import { PanelOfCohort } from '../components/PanelOfCohort/index'
import { ListOfCohort } from '../containers/ListOfCohort'
import { ResultSearch } from '../components/ResultSearch/index'

export const Lists = () => {
  const studentsList = 'http://localhost:3000/studentsList'
  // const [haveSearch, setHaveSearch] = useState(false)
  const [search, setSearch] = useState('')
  const [cohortUno, setCohortUno] = useState(false)
  const [cohortDos, setCohortDos] = useState(false)
  const [cohortTres, setCohortTres] = useState(false)
  const [cohortCinco, setCohortCinco] = useState(false)
  const [cohortSeis, setCohortSeis] = useState(false)

  // const validateReturn = () => {
  //   setHaveSearch(true)
  // }
  const handleInput = e => {
    setSearch(
      e.target.value
    )
  }
  console.log(cohortUno)
  // console.log(haveSearch)

  return (
    <>
      <div>
        <label>
          Filtrar estudiantes
          <input
            type='text'
            value={search}
            onChange={handleInput}
          />
        </label>
      </div>
      <button onClick={e => !cohortUno ? setCohortUno(true) : setCohortUno(false)}>cohort1</button>
      <button>cohort2</button>
      <button>cohort3</button>
      <button>cohort4</button>
      <button>cohort5</button>
      <button>cohort6</button>
      <ResultSearch
        search={search}
      />
      {cohortUno ?
        <PanelOfCohort cohort='Cohort 1'>
          {
            ({ fade }) => <ListOfCohort fade={fade} api={studentsList} cohort={1} />
          }
        </PanelOfCohort>
        : ''}
      {/* <PanelOfCohort cohort='Cohort 2'>
        {
          ({ fade }) => <ListOfCohort fade={fade} api={studentsList} cohort={2} />
        }
      </PanelOfCohort>
      <PanelOfCohort cohort='Cohort 3'>
        {
          ({ fade }) => <ListOfCohort fade={fade} api={studentsList} cohort={3} />
        }
      </PanelOfCohort>
      <PanelOfCohort cohort='Cohort 4'>
        {
          ({ fade }) => <ListOfCohort fade={fade} api={studentsList} cohort={4} />
        }
      </PanelOfCohort>
      <PanelOfCohort cohort='Cohort 5'>
        {
          ({ fade }) => <ListOfCohort fade={fade} api={studentsList} cohort={5} />
        }
      </PanelOfCohort>
      <PanelOfCohort cohort='Cohort 6'>
        {
          ({ fade }) => <ListOfCohort fade={fade} api={studentsList} cohort={6} />
        }
      </PanelOfCohort> */}
    </>
  )
}
