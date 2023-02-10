import styles from 'styles/components/desktop/window/spotify/tracks.module.scss'

function Tracks({ name, artist, url }, index) {
  const href = url

  const nameProps = {
    className: styles.track_name,
    href,
  }

  const artistProps = {
    className: styles.artist_name,
    href,
  }

  return (
    <div key={name + index} className={styles.track}>
      <div className={styles.track_number}>{index + 1}</div>
      <div className={styles.track_link}>
        <a {...nameProps}>{name}</a>
        <a {...artistProps}>{artist.name}</a>
      </div>
    </div>
  )
}

export default Tracks
