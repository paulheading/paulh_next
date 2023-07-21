import styles from 'styles/components/desktop/window.module.scss'
import { useEffect, useRef } from 'react'
import { window } from 'scripts/animation'
import SkipLink from 'components/skiplink'

function Window(props) {
  var { name, folders, position, children } = props

  var open = false

  folders.forEach((folder) => {
    if (folder.name == name) open = folder.open

    if (folder.group) {
      folder.group.items.map((item) => {
        if (item.name == name) open = item.open
      })
    }
  })

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
    style: position,
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
