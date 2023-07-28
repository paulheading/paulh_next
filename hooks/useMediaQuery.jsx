import { useState, useEffect, useCallback } from 'react'

// https://stackoverflow.com/questions/72238021/how-to-apply-media-query-in-nextjs#answer-72240414

function useMediaQuery(width) {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true)
    else setTargetReached(false)
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    if (media.matches) setTargetReached(true)

    return () => media.removeEventListener('change', updateTarget)
  }, [])

  return targetReached
}

export default useMediaQuery
