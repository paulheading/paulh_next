import styles from 'styles/components/desktop/window/spotify.module.scss'
import Window from 'components/desktop/window'
import Tracks from 'components/desktop/window/spotify/tracks'
import Header from 'components/desktop/window/spotify/header'

function SpotifyWindow(props) {
  const { name, folders, position, playlist } = props

  const windowProps = {
    position,
    folders,
    name,
  }

  return (
    <Window {...windowProps}>
      <div className={styles.inner}>
        <Header {...playlist} />
        <main className={styles.main}>{playlist.tracks.map(Tracks)}</main>
      </div>
    </Window>
  )
}

export default SpotifyWindow
