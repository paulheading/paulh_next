import NextHead from 'next/head'
import { useRouter } from 'next/router'
import seo from 'data/seo'

function Head() {
  const { pathname } = useRouter()

  function metadata(pathname) {
    pathname = pathname.slice(1)
    if (pathname === '') return seo['home']
    if (pathname === '404') return seo['notfound']

    return seo[pathname] ? seo[pathname] : seo['notfound']
  }

  const { title, keywords, desc } = metadata(pathname)

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
