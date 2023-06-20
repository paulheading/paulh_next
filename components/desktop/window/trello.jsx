import styles from 'styles/components/desktop/window/trello.module.scss'
import { CreateLink, NotFound } from 'components/marquee'
import SettingsIcon from 'icons/settings'
import Label from 'components/page/label'
import Window from 'components/desktop/window'
import Footer from 'components/desktop/window/trello/footer'
import { Fragment, useState } from 'react'
import { contains, environment, chop } from 'scripts/helpers'

function Projects({ name, more, labels }, index) {
  const createProps = {
    className: styles.card,
    href: more ? more.url : null,
  }
  const notProps = {
    className: styles.card,
    href: '/404',
  }

  function LinkContent() {
    return (
      <Fragment>
        <div className={styles.name}>{name}</div>
        <div className={styles.label_wrap}>
          {labels.map(({ name, color }, index) => (
            <Label key={'label' + index} color={color}>
              {name}
            </Label>
          ))}
        </div>
      </Fragment>
    )
  }

  function IsLink() {
    return (
      <CreateLink {...createProps}>
        <LinkContent />
      </CreateLink>
    )
  }

  function IsNotLink() {
    return (
      <NotFound {...notProps}>
        <LinkContent />
      </NotFound>
    )
  }

  return (
    <div key={'project' + index} className={styles.row}>
      {more ? <IsLink /> : <IsNotLink />}
    </div>
  )
}

function TrelloWindow({ name, folders, projects, style }) {
  const page = 2
  const [max, setMax] = useState(page)

  const windowProps = {
    name,
    folders,
    style,
  }

  const footerProps = {
    setPageRange: (value) => setMax(value),
    controls: projects.length > page,
    className: styles.footer,
    length: projects.length,
    page,
    max,
  }

  projects = chop.results(projects, max, page)

  return (
    <Window {...windowProps}>
      <div className={styles.window}>
        <header className={styles.header}>
          <div>Projects</div>
          <div>
            <SettingsIcon />
          </div>
        </header>
        <main>
          {projects.map((project, index) => (
            <Projects {...project} key={'project' + index} />
          ))}
        </main>
        <Footer {...footerProps} />
      </div>
    </Window>
  )
}

export default TrelloWindow
