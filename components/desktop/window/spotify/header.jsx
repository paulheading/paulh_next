import styles from 'styles/components/desktop/window/spotify/header.module.scss'
import Image from 'next/image'
import SpotifyLogo from 'logos/spotify'

function Header({ name, image, owner, url }) {
  const linkProps = {
    className: styles.link,
    href: url,
  }

  const imageProps = {
    height: 80,
    src: image,
    width: 80,
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
      <a {...linkProps}>
        <Image {...imageProps} alt="spotify playlist cover" />
      </a>
      <div className={styles.details_wrap}>
        <div className={styles.details}>
          <a {...nameProps}>{name}</a>
          <a {...ownerProps}>{owner.name}</a>
        </div>
        <SpotifyLogo />
      </div>
    </header>
  )
}

export default Header
