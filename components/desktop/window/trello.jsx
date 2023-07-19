import styles from 'styles/components/desktop/window/trello.module.scss'
import { Fragment, useState } from 'react'
import { chop } from 'scripts/helpers'

import { CreateLink } from 'components/marquee'
import Label from 'components/page/label'
import Window from 'components/desktop/window'
import Footer from 'components/desktop/window/trello/footer'
import SettingsIcon from 'icons/settings'

function Projects({ name, blog, local, labels }, index) {
  const createProps = {
    className: styles.card,
    href: blog ? blog.url : local.url,
  }

  function LinkContent() {
    return (
      <Fragment>
        <div className={styles.name}>{name}</div>
        <div className={styles.label_wrap}>
          {labels.map(function ({ name, color }, index) {
            const labelProps = {
              variant: !color ? 'outline' : 'solid',
              color: color ? color : labels[0].color,
            }
            return (
              <Label {...labelProps} key={'label' + index}>
                {name}
              </Label>
            )
          })}
        </div>
      </Fragment>
    )
  }

  return (
    <div key={'project' + index} className={styles.row}>
      <CreateLink {...createProps}>
        <LinkContent />
      </CreateLink>
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
