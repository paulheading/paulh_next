import styles from 'styles/components/desktop/window.module.scss'
import { useEffect, useRef } from 'react'
import { window } from 'scripts/animation'
import SkipLink from 'components/skiplink'

function getWindowSettings(name, folders) {
  var settings = {}

  folders.forEach((folder) => {
    if (folder.name == name) settings = { name: folder.name, open: folder.open, focus: folder.focus }

    if (folder.group) {
      folder.group.items.map((item) => {
        if (item.name == name) settings = { name: item.name, open: item.open, focus: item.focus }
      })
    }
  })

  return settings
}

function Window(props) {
  var { name, folders, position, children } = props
  var settings = getWindowSettings(name, folders)

  const ref = useRef(null)

  useEffect(() => {
    if (!ref) return
    const { current } = ref

    window.draggable(current)
    window.toggle(settings, current)
  }, [settings, ref])

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
