import { useState, useEffect } from 'react'

function Ready({ children }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => setLoaded(true), [])

  return loaded && children
}

export default Ready
