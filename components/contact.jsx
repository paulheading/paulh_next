import styles from 'styles/components/contact.module.scss'
import { useState } from 'react'

import Window from 'components/window'
import Form from 'components/form'
// import Alert from 'components/form/alert'
import Success from 'components/form/success'

function Contact() {
  const [success, setSuccess] = useState(false)

  const formProps = {
    name: 'contact',
    method: 'POST',
    id: 'contact',
    onSubmit: function (e) {
      console.log(e.currentTarget.elements)
      e.preventDefault()
    },
  }

  return (
    <div className={styles.container}>
      <Window className={styles.window}>{!success ? <Form {...formProps} /> : <Success />}</Window>
    </div>
  )
}

export default Contact
