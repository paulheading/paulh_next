import styles from 'styles/pages/resume.module.scss'
import { getLayoutData, getResumeData } from 'scripts'
import { Fragment, useState } from 'react'

import Layout from 'layouts/main'
import Content from 'components/content'
import Page from 'components/page'
import PageRow from 'components/page/row'
import RowTitle from 'components/page/row/title'
import RowGrid from 'components/page/row/grid'
import PageColumns from 'components/page/columns'

import details from 'data/personal'
import { create, chop } from 'scripts/helpers'
import ReactMarkdown from 'react-markdown'

const paul = new create.person(details)

const Platforms = ({ name, link }) => <div key={name}>{link}</div>

function Resume(props) {
  var { projects, gem, npm, spotify, roles, education, markdown } = props
  var layoutProps = { projects, gem, npm, spotify }

  const page = 3
  const [max, setMax] = useState(page)

  const projectProps = {
    setPageRange: (value) => setMax(value),
    controls: projects.length > page,
    length: projects.length,
    page,
    max,
  }

  projects = chop.results(projects, max, page)

  return (
    <Fragment>
      <Content>
        <Page>
          <PageRow mode="title">
            <div className={styles.wrap_copy}>
              <h1 className={styles.copy_title}>{paul.name}</h1>
            </div>
            <div>
              <div>{paul.location}</div>
              <div>{paul.email.link}</div>
            </div>
          </PageRow>
          <PageRow columns={2}>
            <div className={styles.wrap_copy}>
              <h3>Biography</h3>
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            <div>{paul.platforms.map(Platforms)}</div>
          </PageRow>
          <PageRow mode="grid">
            <RowTitle mode="grid">Projects</RowTitle>
            <RowGrid {...projectProps}>{projects.map(PageColumns)}</RowGrid>
          </PageRow>
          <PageRow mode="grid">
            <RowTitle mode="grid">Roles</RowTitle>
            <RowGrid>{roles.map(PageColumns)}</RowGrid>
          </PageRow>
          <PageRow mode="grid">
            <RowTitle mode="grid">Education</RowTitle>
            <RowGrid>{education.map(PageColumns)}</RowGrid>
          </PageRow>
        </Page>
      </Content>
      <Layout {...layoutProps} />
    </Fragment>
  )
}

export async function getStaticProps() {
  var [markdown, layout, resume] = await Promise.all([import(`../markdown/biography.md`), getLayoutData(), getResumeData()])

  return {
    props: {
      markdown: markdown.default,
      ...layout,
      ...resume,
    },
  }
}

export default Resume
