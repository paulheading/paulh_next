import styles from 'styles/components/desktop/window/spotify.module.scss'
import Window from 'components/desktop/window'
import Tracks from 'components/desktop/window/spotify/tracks'
import Header from 'components/desktop/window/spotify/header'

function SpotifyWindow({ name, folders, playlist, style }) {
  const windowProps = {
    name,
    folders,
    style,
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
