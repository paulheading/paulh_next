import { Fragment } from 'react'
import Layout from 'layouts/main'
import { getLayoutData } from 'scripts'
import Content from 'components/content'
import Wrap from 'components/wrap'
import getTrelloData from 'scripts/trello'
import parse from 'html-react-parser'
import { title as seo_title } from 'data/seo'

function Project(props) {
  const { project } = props
  const { name, local } = project

  const layoutProps = {
    ...props,
    seo: {
      title: seo_title(name),
      keywords: null,
      desc: local.desc,
    },
  }

  return (
    <Fragment>
      <Content>
        <Wrap>
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
  const { url } = context.params
  const projects = await getTrelloData('projects')
  // pass data from the project containing the correct local url, to the component
  const project = projects.filter((project) => project.local.pathname == url)[0]

  return {
    props: {
      ...(await getLayoutData()),
      project,
    },
  }
}

export default Project
