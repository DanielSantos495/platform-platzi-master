import React, { useState, useEffect } from 'react'

export const FetchinData = ({ api, children }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await window.fetch(api)
        const data = await response.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setError(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      {children({ loading, error, data })}
    </>
  )
}
