import styles from 'styles/components/desktop/window/spotify/track.module.scss'

function Track({ name, artist, url }, index) {
  const href = url

  const nameProps = {
    className: styles.name,
    href,
  }

  const artistProps = {
    className: styles.artist_name,
    href,
  }

  return (
    <div key={name + index} className={styles.container}>
      <div className={styles.number}>{index + 1}</div>
      <div className={styles.details}>
        <div className={styles.wrap_name}>
          <a {...nameProps}>{name}</a>
        </div>
        <div className={styles.wrap_artist_name}>
          <a {...artistProps}>{artist.name}</a>
        </div>
      </div>
    </div>
  )
}

export default Track
