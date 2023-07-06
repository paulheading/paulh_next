import styles from 'styles/project.module.scss'
import { Fragment } from 'react'
import { getLayoutData } from 'scripts'
import getTrelloData from 'scripts/trello'
import parse from 'html-react-parser'
import { title as seo_title } from 'data/seo'

import Layout from 'layouts/main'
import Content from 'components/content'
import Wrap from 'components/wrap'

function Project({ layout, project }) {
  const { name, local } = project

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
        <Wrap className={styles.copy}>
          <h1>{name}</h1>
          <div>{parse(local.desc)}</div>
        </Wrap>
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
