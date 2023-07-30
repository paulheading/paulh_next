import NextHead from 'next/head'
import seo from 'data/seo'
import personal from 'data/personal'

function Head(props) {
  const { dynamic } = props
  const { title, keywords, desc } = dynamic

  return (
    <NextHead>
      <title>{title ? title : seo.title('Portfolio')}</title>
      {keywords && <meta name="keywords" content={keywords} />}
      {desc && <meta name="description" content={desc} />}
      <meta name="author" content={personal.name} />
      <link rel="icon" href="/favicon.png" />
    </NextHead>
  )
}

export default Head
