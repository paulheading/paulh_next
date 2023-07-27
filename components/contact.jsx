import styles from 'styles/components/contact.module.scss'
import { useState } from 'react'

import Window from 'components/window'
import Form from 'components/form'
// import Alert from 'components/form/alert'
import Success from 'components/form/success'

function Contact() {
  const [success, setSuccess] = useState(false)

  return (
    <div className={styles.container}>
      <Window className={styles.window}>{!success ? <Form /> : <Success />}</Window>
    </div>
  )
}

export default Contact
