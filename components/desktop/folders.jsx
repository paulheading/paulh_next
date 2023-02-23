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

  const props = {
    className: styles.folders,
    id: 'folders',
  }

  return <div {...props}>{folders.map(printFolder)}</div>
}

export default Folders
