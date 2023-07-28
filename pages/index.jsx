import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function TextInput(props) {
  const { children, name } = props

  const labelProps = {
    htmlFor: name,
  }

  const inputProps = {
    placeholder: children,
    type: 'text',
    id: name,
    name,
  }

  return (
    <div>
      <label {...labelProps} />
      <input {...inputProps} />
    </div>
  )
}

function SubmitButton(props) {
  const { children } = props

  const submitProps = {
    type: 'submit',
  }

  return <button {...submitProps}>{children}</button>
}

export default function Home() {
  const inputProps = {
    name: 'subject',
  }

  function onSubmit(event) {
    var body = [...event.currentTarget.elements]

    body = body.map(({ name, value }) => encodeURIComponent(name) + '=' + encodeURIComponent(value)).join('&')

    const method = 'POST'
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

    console.log(body)

    fetch('/', {
      method,
      headers,
      body,
    }).catch((error) => alert(error))

    event.preventDefault()
  }

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={onSubmit}>
      <TextInput {...inputProps}>Hey there!</TextInput>
      <SubmitButton>submit</SubmitButton>
    </form>
  )
}
