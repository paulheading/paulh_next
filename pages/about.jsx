import parse from 'html-react-parser'
import styles from 'styles/pages/about.module.scss'
import Layout from 'layouts/main'
import { getLayoutData, getPagesData } from 'scripts'
import Content from 'components/content'
import Wrap from 'components/wrap'
import { Fragment } from 'react'

function About(props) {
  const { pages } = props
  const page = pages.filter((page) => page.name == 'About')[0]

  console.log(page.desc)

  return (
    <Fragment>
      <Content>
        <Wrap>
          <h1 className={styles.title}>{parse(page.name)}</h1>
          <div className={styles.copy}>{parse(page.desc)}</div>
        </Wrap>
      </Content>
      <Layout {...props} />
    </Fragment>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutData()),
      ...(await getPagesData()),
    },
  }
}

export default About
