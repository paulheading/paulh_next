import { getLayoutData } from 'scripts'
import { Fragment } from 'react'

import Layout from 'layouts/main'
import Content from 'components/content'
import Page from 'components/page'
import CreatePageRows from 'components/page/row/create'

function About(props) {
  const { markdown } = props

  const createProps = {
    content: markdown,
    markdown: true,
    h3: '###',
  }

  return (
    <Fragment>
      <Content>
        <Page>
          <CreatePageRows {...createProps} />
        </Page>
      </Content>
      <Layout {...props} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const [markdown, layout] = await Promise.all([import(`markdown/about.md`), getLayoutData()])

  return {
    props: {
      markdown: markdown.default,
      ...layout,
    },
  }
}

export default About
