import NextHead from 'next/head'
import { useRouter } from 'next/router'
import seo from 'data/seo'

function Head({ dynamic }) {
  const { asPath } = useRouter()

  function metadata(pathname) {
    pathname = pathname.slice(1)
    if (pathname === '') return seo['home']
    if (pathname === '404') return seo['notfound']

    return seo[pathname] ? seo[pathname] : seo['notfound']
  }

  const meta = metadata(asPath)

  var title = meta.title
  var keywords = meta.keywords
  var desc = meta.desc

  if (dynamic) {
    if (dynamic.title) title = dynamic.title
    if (dynamic.keywords) keywords = dynamic.keywords
    if (dynamic.desc) desc = dynamic.desc
  }

  return (
    <NextHead>
      <title>{title ? title : 'Paul Heading | Front End Developer | Portfolio'}</title>
      {keywords && <meta name="keywords" content={keywords} />}
      {desc && <meta name="description" content={desc} />}
      <meta name="author" content="Paul Heading" />
      <link rel="icon" href="/favicon.png" />
    </NextHead>
  )
}

export default Head
