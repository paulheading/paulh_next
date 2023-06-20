import styles from 'styles/components/page.module.scss'
import Wrap from 'components/wrap'
import details from 'data/personal'
import Row from 'components/page/row'
import RowTitle from 'components/page/row/title'
import RowGrid from 'components/page/row/grid'
import Columns from 'components/page/columns'
import { contains, environment, chop, create } from 'scripts/helpers'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const paul = new create.person(details)

const Courses = ({ title, score }) => <button key={title} className={styles.course}>{`${title} ${score}`}</button>

const Platforms = ({ name, link }) => <div key={name}>{link}</div>

function Page({ projects, roles, education, udemy, markdown }) {
  const page = 3
  const [max, setMax] = useState(page)

  const projectProps = {
    setPageRange: (value) => setMax(value),
    controls: projects.length > page,
    length: projects.length,
    page,
    max,
  }

  const courseProps = {
    style: { alignItems: 'flex-start' },
  }

  projects = chop.results(projects, max, page)

  roles = roles.map((role) => ({ ...role, variant: 'role' }))

  return (
    <Wrap className={styles.wrap}>
      <Row columns={2} align="center">
        <div className={styles.left_column}>
          <h1 style={{ marginBottom: 0 }}>{paul.name}</h1>
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
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
        <div className={styles.link_wrap}>{paul.platforms.map(Platforms)}</div>
      </Row>
      <Row>
        <RowTitle>Projects</RowTitle>
        <RowGrid {...projectProps}>{projects.map(Columns)}</RowGrid>
      </Row>
      <Row>
        <RowTitle>Udemy</RowTitle>
        <RowGrid {...courseProps}>{udemy.map(Courses)}</RowGrid>
      </Row>
      <Row>
        <RowTitle>Roles</RowTitle>
        <RowGrid>{roles.map(Columns)}</RowGrid>
      </Row>
      <Row>
        <RowTitle>Education</RowTitle>
        <RowGrid>{education.map(Columns)}</RowGrid>
      </Row>
    </Wrap>
  )
}

export default Page
