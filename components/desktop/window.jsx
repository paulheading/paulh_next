import styles from 'styles/components/desktop/window.module.scss'
import { useEffect, useRef } from 'react'
import { window } from 'scripts/animation'
import SkipLink from 'components/skiplink'

function Window({ name, folders, style, children }) {
  const state = folders.filter((folder) => folder.name === name)[0]
  const open = state ? state.open : false
  const ref = useRef(null)

  useEffect(() => {
    if (!ref) return
    const { toggle, draggable } = window
    const { current } = ref
    draggable(current)
    toggle(open, current)
  }, [open, ref])

  const outerProps = {
    className: 'window' + ' ' + styles.outer,
    style,
    ref,
  }

  return (
    <div {...outerProps}>
      <SkipLink href="#folders">Skip to folders</SkipLink>
      {children}
    </div>
  )
}

export default Window
