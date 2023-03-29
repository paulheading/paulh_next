import styles from 'styles/components/page.module.scss'
import Wrap from 'components/wrap'
import personal from 'data/personal'
import Row from 'components/page/row'
import Label from 'components/page/label'
import Columns from 'components/page/columns'

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
  function TripleTitle({ children }) {
    const containerProps = {
      className: styles.section_title_wrap,
      style: { gridColumn: '1/4' },
    }

    return (
      <div {...containerProps}>
        <h3>{children}</h3>
      </div>
    )
  }

  return (
    <Wrap className={styles.wrap}>
      <Row alignItems="center">
        <div className={styles.left_column}>
          <h1>{personal.name}</h1>
        </div>
        <div className={styles.copy_wrap}>
          <div>{personal.location}</div>
          <div>{personal.email_link}</div>
        </div>
      </Row>
      <Row>
        <div className={styles.left_column}>
          <h3 className={styles.title_wrap}>Biography</h3>
          <div>
            <p>
              Hi 👋 I&apos;ve been a Front End Developer since November 2019. I work in the <strong>Digital Products</strong> team at the <a href="https://barbican.org.uk">Barbican</a> and write javascript for front-end frameworks such as Vue.js and React.
            </p>
          </div>
        </div>
        <div className={styles.link_wrap}>
          <div>{personal.github_link}</div>
          <div>{personal.medium_link}</div>
        </div>
      </Row>
      <Row override={3}>
        <TripleTitle>Projects</TripleTitle>
        {projects.map(Columns)}
      </Row>
      <Row>
        <div>
          <TripleTitle>Skills</TripleTitle>
          <div className={styles.skills_wrap}>{treehouse.map(TreehouseSkills)}</div>
        </div>
      </Row>
      <Row override={3}>
        <TripleTitle>Roles</TripleTitle>
        {roles.map((role, index) => Columns({ ...role, variant: 'role' }, index))}
      </Row>
      <Row override={3}>
        <TripleTitle>Education</TripleTitle>
        {education.map(Columns)}
      </Row>
    </Wrap>
  )
}

export default Page
