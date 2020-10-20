import React, { useState } from 'react'

import { PanelOfCohort } from '../PanelOfCohort/index'
import { SearchWrapper, Input, FilterTitle, Filters, Link } from './styles'

export const StudentsList = ({ data, loading }) => {
  const [resultFilterCohort, setResultFilterCohort] = useState([{ cohort: null }])
  const [filteredCohort, setFilteredCohort] = useState(false)
  const [search, setSearch] = useState('')
  const [saveCohort, setSaveCohort] = useState('')
  const cohort = [1, 2, 3, 4, 5, 6]
  const handleInput = e => {
    setSearch(e.target.value)
  }
  console.log(search)
  // Busqueda general
  const result = data.filter(item =>
    `${item.firstName} ${item.lastName}`.toLowerCase() === search.toLowerCase()
  )
  // Busqueda con filtrado
  const resultWithFilter = resultFilterCohort.filter(item =>
    `${item.firstName} ${item.lastName}`.toLowerCase() === search.toLowerCase()
  )
  // Filtros
  const handleFilterCohort = (cohort) => {
    const result = data.filter(item => item.cohort === cohort)
    setResultFilterCohort(result)
    setSaveCohort(cohort)

    // Si aquí llamamos a resultFilterCohort, nos va a mostrar el resultado anterior o el inicial
    // Si result[0].cohort === resultFilterCohort[0].cohort, aquí comparamos si se da click al mismo filtro
    // filteredCohort nos dice si hay un filtro aplicado
    // Si damos click a un filtro y este ya esta aplicado lo quitamos
    // Si damos click a un filtro y no esta aplicado, los aplicamos
    // Y si damos click al último filtro que aplicamos, pero no esta aplicado, lo aplicamos
    if (result[0].cohort === resultFilterCohort[0].cohort && filteredCohort) {
      setFilteredCohort(false)
    } else {
      setFilteredCohort(true)
    }
  }
  // Resultados de busqueda con filtros y sin filtros
  if (result.length > 0) {
    return (
      <>
        <SearchWrapper>
          <label>
            Buscar estudiantes:
            <Input
              type='text'
              value={search}
              onChange={handleInput}
            />
          </label>
        </SearchWrapper>
        <div>
          <FilterTitle>Filtros:</FilterTitle>
          {
            cohort.map(item =>
              <Filters key={item} id='test-click' cohortColor={item} onClick={() => handleFilterCohort(item)}>cohort {item}</Filters>
            )
          }
        </div>
        {
          filteredCohort
            ? resultWithFilter.map((item, i) =>
              <PanelOfCohort
                key={i}
                ch={item.cohort}
                data={resultWithFilter}
                loading={loading}
              />)
            : result.map((item, i) =>
              <PanelOfCohort
                key={i}
                ch={item.cohort}
                data={result}
                loading={loading}
              />)

        }
      </>
    )
  }
  return (
    <>
      <SearchWrapper>
        <label>
          Buscar estudiantes:
          <Input
            type='text'
            value={search}
            onChange={handleInput}
          />
        </label>
        <Link to='/register'>Registrarse</Link>
      </SearchWrapper>
      <div>
        <FilterTitle>Filtros:</FilterTitle>
        {
          cohort.map(item =>
            <Filters key={item} cohortColor={item} onClick={() => handleFilterCohort(item)}>cohort {item}</Filters>
          )
        }
      </div>
      {

        filteredCohort
          ? (
            <PanelOfCohort
              ch={saveCohort}
              data={resultFilterCohort}
              loading={loading}
            />
          )
          : cohort.map(item =>
            <PanelOfCohort
              key={item}
              ch={item}
              data={data}
              loading={loading}
            />
          )
      }
    </>
  )
}
