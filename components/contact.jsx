import styles from 'styles/components/contact.module.scss'
// import { useForm } from 'react-hook-form'
import { useState } from 'react'

import Window from 'components/window'
import Form from 'components/form'
// import Alert from 'components/form/alert'
import Success from 'components/form/success'

function onSubmit(event) {
  event.preventDefault()

  var body = [...event.currentTarget.elements]

  // body = body.map(({ name, value }) => encodeURIComponent(name) + '=' + encodeURIComponent(value)).join('&')

  // const method = 'POST'
  // const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

  console.log(body)

  return

  // fetch('/', {
  //   method,
  //   headers,
  //   body,
  // }).catch((error) => alert(error))
}

function Contact() {
  const [success, setSuccess] = useState(false)
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm()

  const formProps = {
    'data-netlify': true,
    name: 'contact',
    method: 'POST',
    id: 'contact',
    onSubmit,
  }

  return (
    <div className={styles.container}>
      <Window className={styles.window}>{!success ? <Form {...formProps} /> : <Success />}</Window>
    </div>
  )
}

export default Contact
