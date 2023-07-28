import styles from 'styles/components/contact.module.scss'
import { useState } from 'react'

import Window from 'components/window'
import Form from 'components/form'
import FormSuccess from 'components/form/success'

function Contact() {
  const [success, setSuccess] = useState(false)

  const formProps = {
    setSuccess,
  }

  return (
    <div className={styles.container}>
      <Window className={styles.window}>{!success ? <Form {...formProps} /> : <FormSuccess />}</Window>
    </div>
  )
}

export default Contact
