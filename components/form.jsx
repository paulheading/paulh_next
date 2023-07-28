import styles from 'styles/components/form.module.scss'
import { useEffect } from 'react'

import FormEmail from 'components/form/email'
import FormInput from 'components/form/input'
import FormTextArea from 'components/form/textarea'
import FormSubmit from 'components/form/submit'

function inputError(input, error) {
  if (input.validity.valid) {
    input.removeAttribute('data-error')
    error.removeAttribute('data-error')
    error.textContent = ''
  } else {
    showError(input, error)
  }
}

function showError(input, error) {
  if (input.validity.valueMissing) {
    error.textContent = 'You need to enter an email address.'
  } else if (input.validity.typeMismatch) {
    error.textContent = 'Entered value needs to be an email address.'
  }

  input.setAttribute('data-error', true)
  error.setAttribute('data-error', true)
}

function submitError(event, input, error) {
  if (!input.validity.valid) {
    showError(input, error)
    event.preventDefault()
  }
}

function Form(props) {
  const { setSuccess } = props

  useEffect(function () {
    const form = document.querySelector('form')
    const from = document.getElementById('from')
    const from_error = document.getElementById('from_error')

    from.addEventListener('input', () => inputError(from, from_error))
    form.addEventListener('submit', (event) => submitError(event, from, from_error))
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
    name: 'contact',
    onSubmit,
  }

  const toProps = {
    placeholder: 'hello@paulh.biz',
  }

  const subjectProps = {
    placeholder: 'Hey there!',
    name: 'subject',
    type: 'text',
  }

  const fromProps = {
    placeholder: 'friendly@visitor.org',
    required: true,
    type: 'email',
    name: 'from',
  }

  const messageProps = {
    name: 'message',
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
