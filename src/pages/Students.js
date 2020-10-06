import React, { useState, useEffect } from 'react'

import { StudentsList } from '../components/StudentsLists/index'

export const Students = () => {
  const API = 'http://localhost:3000/studentsList'
  const [studentsList, setstudentsList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await window.fetch(API)
        const data = await response.json()
        setstudentsList(data)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }
    getData()
  }, [])
  return (
    <>
      <StudentsList data={studentsList} loading={loading} />
    </>
  )
}
