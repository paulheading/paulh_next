import styles from 'styles/pages/project.module.scss'
import { Fragment } from 'react'
import { getLayoutData } from 'scripts'
import getTrelloData from 'scripts/trello'
import { title as seo_title } from 'data/seo'

import Layout from 'layouts/main'
import Content from 'components/content'
import Page from 'components/page'

import CreatePageRows from 'components/page/row/create'

function Project({ layout, project }) {
  const { name, local } = project

  const createProps = {
    content: local.desc,
    markdown: false,
    h3: '<h3',
  }

  const layoutProps = {
    ...layout,
    seo: {
      title: seo_title(name),
      desc: local.desc,
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
  var projects = await getTrelloData('projects')

  // remove the projects that have a full blog post
  projects = projects.filter((project) => !project.blog)

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
  var layout = await getLayoutData()
  var { projects } = layout
  // pass data from the project containing the correct local url, to the component
  var project = projects.filter((project) => project.local.pathname == context.params.url)[0]

  return {
    props: {
      layout,
      project,
    },
  }
}

export default Project
