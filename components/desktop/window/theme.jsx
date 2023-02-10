import styles from 'styles/components/desktop/window/theme.module.scss'
import { useRef, useEffect } from 'react'
import { window } from 'scripts/animation'
import SkipLink from 'components/skiplink'
import GraphIcon from 'icons/graph'

function ThemeWindow({ name, folders, data, color, style }) {
  const state = folders.filter((folder) => folder.name === name)[0]
  const open = state ? state.open : false
  const ref = useRef(null)

  const { downloads, version } = data

  const outerProps = {
    className: styles.outer,
    style,
    ref,
  }

  const windowProps = {
    style: { borderColor: color },
    className: styles.window,
  }

  const graphProps = {
    className: styles.graph,
    color,
  }

  useEffect(() => {
    if (!ref) return
    const { toggle, draggable } = window
    const { current } = ref
    draggable(current)
    toggle(open, current)
  }, [open, ref])

  return (
    <div {...outerProps}>
      <SkipLink href="#folders">test</SkipLink>
      <div {...windowProps}>
        <div className={styles.copy}>
          <div>
            <div>{data.name}</div>
            <div>{downloads}</div>
          </div>
          <div style={{ color }}>{version}</div>
        </div>
        <GraphIcon {...graphProps} />
      </div>
    </div>
  )
}

export default ThemeWindow
