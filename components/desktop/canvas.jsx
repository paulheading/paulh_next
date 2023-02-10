import styles from 'styles/components/desktop/canvas.module.scss'
import Wrap from 'components/wrap'
import { useState } from 'react'
import data from 'data/folders'
import TrelloWindow from 'components/desktop/window/trello'
import SpotifyWindow from 'components/desktop/window/spotify'
import ThemeWindow from 'components/desktop/window/theme'
import Folders from 'components/desktop/folders'
import { toggle } from 'scripts/helpers'

function Canvas({ projects, spotify, gem, npm, count }) {
  const [folders, setFolders] = useState(data)
  const { _2020, _2021, _2022 } = spotify

  const setFolder = (name) => setFolders(folders.map((folder) => toggle.folders(name, folder)))

  const style = (top, left) => ({ top: top + 'rem', left: left + 'rem' })

  const windowProps = (name) => ({ name, folders })

  const foldersProps = {
    id: 'folders',
    windowProps,
    setFolder,
    folders,
    count,
  }

  const trelloProps = {
    ...windowProps(folders[0].name),
    style: style(5),
    projects,
  }

  const resetProps = {
    ...windowProps(folders[1].name),
    style: style(9, 6),
    color: 'red',
    data: npm,
  }

  const spotify2022Props = {
    ...windowProps(folders[2].name),
    style: style(2, 4),
    playlist: _2022,
  }

  const futuroProps = {
    ...windowProps(folders[3].name),
    color: 'dodgerblue',
    style: style(9, 6),
    data: gem,
  }

  const spotify2021Props = {
    ...windowProps(folders[4].name),
    style: style(2, 4),
    playlist: _2021,
  }

  const spotify2020Props = {
    ...windowProps(folders[5].name),
    style: style(2, 4),
    playlist: _2020,
  }

  return (
    <div className={styles.canvas_container}>
      <Wrap className={styles.canvas_wrap}>
        <div className={styles.windows}>
          <SpotifyWindow {...spotify2020Props} />
          <SpotifyWindow {...spotify2021Props} />
          <ThemeWindow {...futuroProps} />
          <SpotifyWindow {...spotify2022Props} />
          <ThemeWindow {...resetProps} />
          <TrelloWindow {...trelloProps} />
        </div>
        <Folders {...foldersProps} />
      </Wrap>
    </div>
  )
}

export default Canvas
