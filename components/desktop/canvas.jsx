import styles from 'styles/components/desktop/canvas.module.scss'
import Wrap from 'components/wrap'
import { useEffect, useState } from 'react'
import data from 'data/folders'
import TrelloWindow from 'components/desktop/window/trello'
import SpotifyWindow from 'components/desktop/window/spotify'
import ThemeWindow from 'components/desktop/window/theme'
import Folders from 'components/desktop/folders'
import { find, toggle } from 'scripts/helpers'
import { CreateLink } from 'components/marquee'
import { window } from 'scripts/animation'

import layout from 'data/layout.json'

function Canvas({ gem, npm, count }) {
  const { spotify } = layout
  const { _2020, _2021, _2022 } = spotify
  const [folders, setFolders] = useState(data)

  const setFolder = (name, subfolder) => setFolders(folders.map((folder) => toggle.folders(name, subfolder, folder)))

  const position = (top = 0, left = 0) => ({ top: top + 'rem', left: left + 'rem' })

  const windowProps = (name) => ({ name, folders })

  const foldersProps = {
    windowProps,
    setFolder,
    folders,
    count,
  }

  const trelloWindowProps = {
    ...windowProps('trello'),
    position: position(4),
  }

  const spotifyWindowProps = {
    position: position(2, 4),
  }

  const spotify2020WindowProps = {
    ...spotifyWindowProps,
    ...windowProps('2020'),
    playlist: _2020,
  }

  const spotify2021WindowProps = {
    ...spotifyWindowProps,
    ...windowProps('2021'),
    playlist: _2021,
  }

  const spotify2022WindowProps = {
    ...spotifyWindowProps,
    ...windowProps('2022'),
    playlist: _2022,
  }

  const themeWindowProps = {
    position: position(10, 8),
  }

  const futuroWindowProps = {
    ...themeWindowProps,
    ...windowProps('futuro'),
    color: 'dodgerblue',
    data: gem,
  }

  const resetWindowProps = {
    ...themeWindowProps,
    ...windowProps('barbican reset'),
    color: 'red',
    data: npm,
  }

  const creditProps = { className: styles.credit_link, href: 'https://www.flaticon.com/authors/dinosoftlabs' }

  useEffect(() => {
    document.addEventListener('keyup', ({ key }) => {
      if (key !== 'Tab') return
      const active = document.activeElement
      const closest = active.closest('.window')

      if (!closest) return

      const { unbump, bump } = window

      const siblings = find.sibling_windows(active)

      siblings.forEach((sibling) => unbump(sibling))

      bump(closest)
    })
  }, [])

  return (
    <div className={styles.canvas_container}>
      <Wrap className={styles.canvas_wrap}>
        <div className={styles.windows}>
          <TrelloWindow {...trelloWindowProps} />
          <SpotifyWindow {...spotify2020WindowProps} />
          <SpotifyWindow {...spotify2021WindowProps} />
          <SpotifyWindow {...spotify2022WindowProps} />
          <ThemeWindow {...futuroWindowProps} />
          <ThemeWindow {...resetWindowProps} />
        </div>
        <Folders {...foldersProps} />
      </Wrap>
      <Wrap className={styles.credit_wrap}>
        <CreateLink {...creditProps}>Icons made by DinosoftLabs</CreateLink>
      </Wrap>
    </div>
  )
}

export default Canvas
