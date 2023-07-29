import styles from 'styles/pages/project.module.scss'
import { Fragment } from 'react'

import Layout from 'layouts/main'
import Content from 'components/content'
import Page from 'components/page'
import CreatePageRows from 'components/page/row/create'

function Project(props) {
  const { project } = props
  const { name, local } = project

  const createProps = {
    content: local.desc,
    markdown: false,
    h3: '<h3',
  }

  const layoutProps = {
    seo: {
      title: 'Paul Heading | Project | ' + name,
      desc: local.summary,
    },
  }

  return (
    <Fragment>
      <Content>
        <Page className={styles.content}>
          <CreatePageRows {...createProps} />
        </Page>
      </Content>
      <Layout {...layoutProps} />
    </Fragment>
  )
}

/**
 * @summary Create a list of project urls
 * @returns {object} context - Which contains the paths array
 */
export async function getStaticPaths() {
  var { projects } = await import(`../../data/layout.json`)

  // map projects data into an array of params.url
  const paths = projects.map(function (project) {
    return {
      params: {
        url: project.local.pathname,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

/**
 *
 * @param {object} context - An object which contains the paths array
 * @returns {object} Props are then passed to the component for rendering
 */
export async function getStaticProps(context) {
  var { projects } = await import(`../../data/layout.json`)

  // // pass data from the project containing the correct local url, to the component
  var project = projects.filter((project) => project.local.pathname == context.params.url)[0]

  return {
    props: {
      project,
    },
  }
}

export default Project
