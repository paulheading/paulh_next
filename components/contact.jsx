import styles from 'styles/components/contact.module.scss'
import { useState } from 'react'

import Window from 'components/window'

function Form(props) {
  const { setSuccess } = props

  function onSubmit(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSuccess(true)
        setTimeout(() => setSuccess(false), 3000)
      })
      .catch((error) => alert(error))
  }

  const formProps = {
    'data-netlify': true,
    name: 'contact',
    onSubmit,
  }

  return (
    <form {...formProps}>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Your Name:</label>
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">Your Email: </label> <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Message: </label>
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

function Success() {
  return <div>success</div>
}

function Contact() {
  const [success, setSuccess] = useState(false)

  const formProps = {
    setSuccess,
  }

  return (
    <div className={styles.container}>
      <Window className={styles.window}>{!success ? <Form {...formProps} /> : <Success />}</Window>
    </div>
  )
}

export default Contact
