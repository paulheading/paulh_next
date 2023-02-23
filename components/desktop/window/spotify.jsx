import styles from 'styles/components/desktop/window/spotify.module.scss'
import { useEffect, useRef } from 'react'
import { window } from 'scripts/animation'
import SkipLink from 'components/skiplink'
import Tracks from 'components/desktop/window/spotify/tracks'
import Header from 'components/desktop/window/spotify/header'

function SpotifyWindow({ name, folders, playlist, style }) {
  const state = folders.filter((folder) => folder.name === name)[0]
  const open = state ? state.open : false
  const ref = useRef(null)

  const outerProps = {
    className: `window ${styles.outer}`,
    style: {
      ...style,
      display: open ? 'block' : 'none',
    },
    ref,
  }

  const skipProps = {
    href: '#folders',
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
      <SkipLink {...skipProps}>Skip to folders</SkipLink>
      <div className={styles.window}>
        <Header {...playlist} />
        <main className={styles.main}>{playlist.tracks.map(Tracks)}</main>
      </div>
    </div>
  )
}

export default SpotifyWindow
