import { Fragment } from 'react'
import { marked } from 'scripts/helpers'
import { stripHtml } from 'string-strip-html'
import seo from 'data/seo'

import Layout from 'layouts/main'
import Content from 'components/content'
import Page from 'components/page'
import CreatePageRows from 'components/page/row/create'

import markdown from 'markdown/about.md'
import biography from 'markdown/biography.md'

function About() {
  var desc = marked.parse(biography)

  desc = stripHtml(desc).result

  const rowProps = {
    content: markdown,
    markdown: true,
    h3: '###',
  }

  const layoutProps = {
    seo: {
      title: seo.title('About'),
      desc,
    },
  }

  return (
    <Fragment>
      <Content>
        <Page>
          <CreatePageRows {...rowProps} />
        </Page>
      </Content>
      <Layout {...layoutProps} />
    </Fragment>
  )
}

export default About
