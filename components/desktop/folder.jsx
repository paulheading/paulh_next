import styles from 'styles/components/desktop/folders.module.scss'
import OpenFolder from 'icons/folder/open'
import ClosedFolder from 'icons/folder/closed'
import useMediaQuery from 'hooks/useMediaQuery'

function Folder({ name, folders, setFolder, position, count }) {
  const state = folders.filter((folder) => folder.name === name)[0]
  const open = state ? state.open : false
  const desktop = useMediaQuery(768)

  // we want to determin if the count is odd or even
  const oddOrEven = count % 2 ? 1 : 0

  const buttonProps = {
    style: desktop ? { ...position[oddOrEven] } : null,
    className: styles.folder_container,
    onClick: () => setFolder(name),
    id: name.replace(' ', '-'),
  }

  const Words = (name, index) => (
    <div key={'word' + index}>
      <span className={styles.folder_words}>{name}</span>
    </div>
  )

  return (
    <button {...buttonProps}>
      {open ? <OpenFolder /> : <ClosedFolder />}
      <h6 className={styles.folder_title}>{name.split(' ').map(Words)}</h6>
    </button>
  )
}

export default Folder
