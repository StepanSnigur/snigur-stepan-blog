import { useState, useEffect, useLayoutEffect } from 'react'

const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  useLayoutEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('darkTheme'))
    if (savedTheme !== null) setDarkTheme(savedTheme)
  }, [])
  useEffect(() => {
    localStorage.setItem('darkTheme', darkTheme)
  }, [darkTheme])

  return [darkTheme, () => setDarkTheme(!darkTheme)]
}

export default useDarkTheme
