import styles from 'styles/components/desktop/folders.module.scss'
import Folder from 'components/desktop/folder'

function Folders({ folders, windowProps, setFolder, count }) {
  function printFolder({ name, position }, index) {
    const folderProps = {
      ...windowProps(name),
      key: name + index,
      setFolder,
      position,
      count,
    }

    return <Folder {...folderProps} />
  }

  return <div className={styles.folders}>{folders.map(printFolder)}</div>
}

export default Folders
