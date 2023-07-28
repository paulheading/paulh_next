import 'styles/global.scss'
import 'focus-visible/dist/focus-visible.min.js'
import { Fragment } from 'react'
import Menu from 'components/menu'

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Menu />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
