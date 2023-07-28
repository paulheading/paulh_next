import { useEffect, useState } from 'react'
import duration from 'data/duration'

function useCount(heroes) {
  // return 0
  if (!heroes) return 0

  const [count, setCount] = useState(0)
  const total = heroes.length - 1

  useEffect(() => {
    const timer = setInterval(() => setCount(count > 0 ? count - 1 : total), duration * 1000)
    return () => clearInterval(timer)
  })

  return count
}

export default useCount
