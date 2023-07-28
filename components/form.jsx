import styles from 'styles/components/form.module.scss'
import { useEffect } from 'react'
import { addInputListener, checkSubmitError } from 'scripts/helpers/error'

import FormEmail from 'components/form/email'
import FormInput from 'components/form/input'
import FormTextArea from 'components/form/textarea'
import FormSubmit from 'components/form/submit'

function Form(props) {
  const { setSuccess } = props

  useEffect(function () {
    const items = ['subject', 'from', 'message']

    const submit = document.getElementById('submit')

    items.forEach(addInputListener)

    submit.addEventListener('click', (event) => items.forEach((title) => checkSubmitError(event, title)))
  }, [])

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
    noValidate: true,
    name: 'contact',
    onSubmit,
  }

  const toProps = {
    placeholder: 'hello@paulh.biz',
  }

  const subjectProps = {
    placeholder: 'Hey there!',
    name: 'subject',
    required: true,
    type: 'text',
  }

  const fromProps = {
    placeholder: 'friendly@visitor.org',
    required: true,
    type: 'email',
    minLength: 5,
    name: 'from',
  }

  const messageProps = {
    name: 'message',
    required: true,
  }

  return (
    <form {...formProps}>
      <div className={styles.wrap}>
        <input type="hidden" name="form-name" value="contact" />
        <FormEmail {...toProps}>To</FormEmail>
        <FormInput {...subjectProps}>Subject</FormInput>
        <FormInput {...fromProps}>From</FormInput>
        <FormTextArea {...messageProps}>Message</FormTextArea>
        <FormSubmit>Submit</FormSubmit>
      </div>
    </form>
  )
}

export default Form
