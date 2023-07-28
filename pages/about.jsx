import { Fragment } from 'react'

import Layout from 'layouts/main'
import Content from 'components/content'
import Page from 'components/page'
import CreatePageRows from 'components/page/row/create'

import markdown from 'markdown/about.md'

function About() {
  const props = {
    content: markdown,
    markdown: true,
    h3: '###',
  }

  return (
    <Fragment>
      <Content>
        <Page>
          <CreatePageRows {...props} />
        </Page>
      </Content>
      <Layout />
    </Fragment>
  )
}

export default About
