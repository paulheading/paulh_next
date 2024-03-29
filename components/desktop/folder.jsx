import styles from 'styles/components/desktop/folder.module.scss'
import OpenFolder from 'icons/folder/open'
import ClosedFolder from 'icons/folder/closed'
import useMediaQuery from 'hooks/useMediaQuery'
import { useState } from 'react'

import Window from 'components/window'

function Folder(props) {
  const { name, folders, setFolder, position, count } = props
  const current = folders.filter((folder) => folder.name == name)[0]
  const desktop = useMediaQuery(768)
  const [groupOpen, setGroupOpen] = useState(false)

  var open = current.open

  if (current.group) {
    current.group.items.forEach((item) => {
      if (item.open) open = true
    })
  }

  // determin if the count is odd or even
  const oddOrEven = count % 2 ? 1 : 0

  const containerProps = {
    style: desktop ? { ...position[oddOrEven] } : null,
    className: styles.container,
  }

  const FolderIcon = () => (open ? <OpenFolder /> : <ClosedFolder />)

  function FolderGroup() {
    if (!current.group) return
    if (!groupOpen) return

    function Button(item, index) {
      function buttonStyles() {
        var result = styles.button
        if (index % 2) result += ' ' + styles.even
        if (item.open) result += ' ' + styles.open
        return result
      }

      const props = {
        className: buttonStyles(),
        onClick: function () {
          setFolder(name, item.name)
          setGroupOpen(false)
        },
      }

      return (
        <button {...props} key={'option' + index}>
          {item.name}
        </button>
      )
    }

    const windowProps = {
      close: () => setGroupOpen(false),
      className: styles.window,
      size: 'sm',
    }

    return <Window {...windowProps}>{current.group.items.map(Button)}</Window>
  }

  function FolderButton() {
    if (current.group && groupOpen) return

    const wrapProps = {
      className: styles.wrap,
      id: name.replace(' ', '-'),
      onClick: function () {
        if (!current.group) return setFolder(name)
        setGroupOpen(true)
      },
    }

    const Words = (name, index) => (
      <div key={'word' + index}>
        <span className={styles.words}>{name}</span>
      </div>
    )

    return (
      <button {...wrapProps}>
        <FolderIcon />
        <div className={styles.title}>{name.split(' ').map(Words)}</div>
      </button>
    )
  }

  return (
    <div {...containerProps}>
      <FolderGroup />
      <FolderButton />
    </div>
  )
}

export default Folder
