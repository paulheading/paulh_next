import styles from 'styles/components/desktop/window/spotify/header.module.scss'
import Image from 'next/image'
import SpotifyLogo from 'logos/spotify'

function Header({ name, image, owner, url }) {
  const imageProps = {
    height: 84,
    src: image,
    width: 84,
  }

  const nameProps = {
    className: styles.name,
    href: url,
  }

  const ownerProps = {
    className: styles.owner_name,
    href: owner.url,
  }

  return (
    <header className={styles.header}>
      <Image {...imageProps} alt="spotify playlist cover" />
      <div className={styles.details_wrap}>
        <div className={styles.details}>
          <a {...nameProps}>{name}</a>
          <a {...ownerProps}>{owner.name}</a>
        </div>
        <div className={styles.logo_wrap}>
          <SpotifyLogo />
        </div>
      </div>
    </header>
  )
}

export default Header
