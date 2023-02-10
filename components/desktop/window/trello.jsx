import styles from 'styles/components/desktop/window/trello.module.scss'
import { CreateLink, NotFound } from 'components/marquee'
import { useRef, useEffect } from 'react'
import { window } from 'scripts/animation'
import SkipLink from 'components/skiplink'
import SettingsIcon from 'icons/settings'
import Label from 'components/page/label'

function Projects(project, index) {
  if (index >= 2) return
  const { name, more, labels } = project
  const createProps = {
    href: more ? more.url : null,
  }
  const notProps = {
    href: '/404',
  }

  return (
    <div key={'project' + index} className={styles.card}>
      <div className={styles.name}>{more ? <CreateLink {...createProps}>{name}</CreateLink> : <NotFound {...notProps}>{name}</NotFound>}</div>
      <div className={styles.label_wrap}>
        {labels.map(({ name, color }, index) => (
          <Label key={'label' + index} color={color}>
            {name}
          </Label>
        ))}
      </div>
    </div>
  )
}

function TrelloWindow({ name, folders, projects, style }) {
  const state = folders.filter((folder) => folder.name === name)[0]
  const open = state ? state.open : false
  const ref = useRef(null)

  useEffect(() => {
    if (!ref) return
    const { toggle, draggable, hover } = window
    const { current } = ref
    draggable(current)
    toggle(open, current)
    // hover(open, current)
  }, [open, ref])

  const outerProps = {
    className: styles.outer,
    style,
    ref,
  }

  return (
    <div {...outerProps}>
      <SkipLink href="#folders">test</SkipLink>
      <div className={styles.window}>
        <header className={styles.header}>
          <div>Projects</div>
          <div>
            <SettingsIcon />
          </div>
        </header>
        <main>{projects.map(Projects)}</main>
        <footer className={styles.footer}>
          <div>+ See more</div>
          <div>icon</div>
        </footer>
      </div>
    </div>
  )
}

export default TrelloWindow
