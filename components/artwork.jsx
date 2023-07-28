import { forwardRef } from 'react'
import artwork606d7 from 'artwork/606d7'
import artwork6491c from 'artwork/6491c'
import artwork60734 from 'artwork/60734'

/**
 * @function  Artwork
 * @summary   Receives hero id and assigns the correct svg artwork
 * @param {className} string - for targeting animation
 * @param {snippet}   string - for assigning the correct svg artwork
 */

const Artwork = forwardRef(({ className, snippet }, ref) => {
  function Process() {
    if (snippet == '606d7') return artwork606d7()
    if (snippet == '6491c') return artwork6491c()
    if (snippet == '60734') return artwork60734()
    return
  }

  return (
    <div ref={ref} className={className}>
      <Process />
    </div>
  )
})

Artwork.displayName = 'Artwork'

export default Artwork
