import styles from 'styles/pages/404.module.scss'
import { Fragment } from 'react'

import Layout from 'layouts/main'
import Content from 'components/content'
import Wrap from 'components/wrap'
import { CreateLink } from 'components/marquee'

function NotFound() {
  const props = {
    className: styles.link,
    href: 'mailto:hello@paulh.biz',
  }
  return (
    <Fragment>
      <Content>
        <Wrap className={styles.wrap}>
          <h1 className={styles.title}>Page Not Found 🤬</h1>
          <h3>
            <CreateLink {...props}>where the page go?</CreateLink>
          </h3>
        </Wrap>
      </Content>
      <Layout />
    </Fragment>
  )
}

export default NotFound
