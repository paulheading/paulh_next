import styles from 'styles/components/page.module.scss'
import Wrap from 'components/wrap'
import details from 'data/personal'
import Row from 'components/page/row'
import RowTitle from 'components/page/row/title'
import RowGrid from 'components/page/row/grid'
import Label from 'components/page/label'
import Columns from 'components/page/columns'
import { contains, environment, chop, Person } from 'scripts/helpers'
import { useState } from 'react'

const paul = new Person(details)

function TreehouseSkills({ title, score }, index) {
  const props = {
    color: 'purple',
    size: 'md',
  }
  return (
    <Label key={'label' + index} {...props}>
      {`${title} ${score}`}
    </Label>
  )
}

function Page({ projects, roles, education, treehouse }) {
  const page = 3
  const [max, setMax] = useState(page)

  if (!environment.isLocal()) projects = projects.filter(({ labels }) => !contains.label(labels, environment.local))

  const projectProps = {
    setPageRange: (value) => setMax(value),
    controls: projects.length > page,
    length: projects.length,
    page,
    max,
  }

  projects = chop.results(projects, max, page)

  return (
    <Wrap className={styles.wrap}>
      <Row columns={2} align="center">
        <div className={styles.left_column}>
          <h1>{paul.name}</h1>
        </div>
        <div className={styles.copy_wrap}>
          <div>{paul.location}</div>
          <div>{paul.email.link}</div>
        </div>
      </Row>
      <Row columns={2}>
        <div className={styles.left_column}>
          <h3 className={styles.title_wrap}>Biography</h3>
          <div>
            <p>
              Hi 👋 I&apos;ve been a Front End Developer since November 2019. I work in the <strong>Digital Products</strong> team at the <a href="https://barbican.org.uk">Barbican</a> and write javascript for front-end frameworks such as Vue.js and React.
            </p>
          </div>
        </div>
        <div className={styles.link_wrap}>
          {paul.platforms.map(({ name, link }) => (
            <div key={name}>{link}</div>
          ))}
        </div>
      </Row>
      <Row>
        <RowTitle>Projects</RowTitle>
        <RowGrid {...projectProps}>
          {projects.map((project, index) => (
            <Columns {...project} key={'project' + index} />
          ))}
        </RowGrid>
      </Row>
      <Row>
        <RowTitle>Courses</RowTitle>
        <div className={styles.skills_wrap}>{treehouse.map(TreehouseSkills)}</div>
      </Row>
      <Row>
        <RowTitle>Roles</RowTitle>
        <RowGrid>{roles.map((role, index) => Columns({ ...role, variant: 'role' }, index))}</RowGrid>
      </Row>
      <Row>
        <RowTitle>Education</RowTitle>
        <RowGrid>{education.map(Columns)}</RowGrid>
      </Row>
    </Wrap>
  )
}

export default Page
