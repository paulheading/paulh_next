import 'styles/global.scss'
import 'focus-visible/dist/focus-visible.min.js'
import { Fragment } from 'react'
import Menu from 'components/menu'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Menu />
      <Component {...pageProps} />
    </Fragment>
  )
}
