import styles from 'styles/pages/404.module.scss'
import Layout from 'layouts/main'
import { getLayoutData } from 'scripts'
import Content from 'components/content'
import { CreateLink } from 'components/marquee'
import Wrap from 'components/wrap'
import { notfound as head } from 'data/seo'

function NotFound(props) {
  const linkProps = {
    className: styles.link,
    href: 'mailto:hello@paulh.biz',
  }
  const layoutProps = {
    ...props,
    head,
  }
  return (
    <Layout {...layoutProps}>
      <Content>
        <Wrap className={styles.wrap}>
          <h1 className={styles.title}>Page Not Found 🤬</h1>
          <h3>
            <CreateLink {...linkProps}>where da page go?</CreateLink>
          </h3>
        </Wrap>
      </Content>
    </Layout>
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
