import styles from 'styles/pages/project.module.scss'
import { Fragment } from 'react'

import Layout from 'layouts/main'
import Content from 'components/content'
import Page from 'components/page'
import CreatePageRows from 'components/page/row/create'

function Role(props) {
  const { role } = props
  const { name, local } = role

  const createProps = {
    content: local.desc,
    markdown: false,
    h3: '<h3',
  }

  const layoutProps = {
    seo: {
      title: 'Paul Heading | Role | ' + name,
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
 * @summary Create a list of role urls
 * @returns {object} context - Which contains the paths array
 */
export async function getStaticPaths() {
  var { roles } = await import(`../../data/resume.json`)

  // map roles data into an array of params.url
  const paths = roles.map(function (role) {
    return {
      params: {
        url: role.local.pathname,
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
  var { roles } = await import(`../../data/resume.json`)

  // // pass data from the role containing the correct local url, to the component
  var role = roles.filter((role) => role.local.pathname == context.params.url)[0]

  return {
    props: {
      role,
    },
  }
}

export default Role
