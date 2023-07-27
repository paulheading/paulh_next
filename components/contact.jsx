import styles from 'styles/components/contact.module.scss'
// import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Window from 'components/window'
import Form from 'components/form'
// import Alert from 'components/form/alert'
import Success from 'components/form/success'

// function onSubmit(event) {
//   event.preventDefault()

//   var body = [...event.currentTarget.elements]

//   // body = body.map(({ name, value }) => encodeURIComponent(name) + '=' + encodeURIComponent(value)).join('&')

//   // const method = 'POST'
//   // const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

//   console.log(body)

//   return

//   // fetch('/', {
//   //   method,
//   //   headers,
//   //   body,
//   // }).catch((error) => alert(error))
// }

const handleSubmit = (event) => {
  event.preventDefault()

  const myForm = event.target
  const formData = new FormData(myForm)

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log('Form successfully submitted'))
    .catch((error) => alert(error))
}

function Contact() {
  const { pathname } = useRouter()
  const [success, setSuccess] = useState(false)

  var action = '/?success=true'

  if (pathname != '/') action = pathname + action

  const formProps = {
    'data-netlify': true,
    name: 'contact',
    method: 'POST',
    id: 'contact',
    onSubmit: handleSubmit,
  }

  return (
    <div className={styles.container}>
      <Window className={styles.window}>{!success ? <Form {...formProps} /> : <Success />}</Window>
    </div>
  )
}

export default Contact
