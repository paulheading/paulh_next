import 'styles/global.scss'
import 'focus-visible/dist/focus-visible.min.js'
import { Fragment } from 'react'
import Menu2 from 'components/menu2'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Menu2 />
      <Component {...pageProps} />
    </Fragment>
  )
}
