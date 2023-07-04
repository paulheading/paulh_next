import styles from 'styles/pages/404.module.scss'
import { getLayoutData } from 'scripts'
import { Fragment } from 'react'

import Layout from 'layouts/main'
import Content from 'components/content'
import Wrap from 'components/wrap'
import { CreateLink } from 'components/marquee'

function NotFound(props) {
  const linkProps = {
    className: styles.link,
    href: 'mailto:hello@paulh.biz',
  }
  return (
    <Fragment>
      <Content>
        <Wrap className={styles.wrap}>
          <h1 className={styles.title}>Page Not Found 🤬</h1>
          <h3>
            <CreateLink {...linkProps}>where the page go?</CreateLink>
          </h3>
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
    },
  }
}

export default NotFound
