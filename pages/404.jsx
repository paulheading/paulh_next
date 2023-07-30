import styles from 'styles/pages/404.module.scss'
import { Fragment } from 'react'

import Layout from 'layouts/main'
import Content from 'components/content'
import Wrap from 'components/wrap'
import { CreateLink } from 'components/marquee'

import seo from 'data/seo'

function NotFound() {
  const linkProps = {
    className: styles.link,
    href: 'mailto:hello@paulh.biz',
  }

  const layoutProps = {
    seo: {
      title: seo.title('404'),
      desc: 'Oh no... this page is missing. Maybe the url is incorrect? If something looks broken, please email hello@paulh.biz',
    },
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
      <Layout {...layoutProps} />
    </Fragment>
  )
}

export default NotFound
