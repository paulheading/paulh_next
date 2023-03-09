import NextHead from 'next/head'

function Head({ title, keywords, desc }) {
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
