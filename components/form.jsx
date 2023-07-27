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

function Form() {
  const inputProps = {
    name: 'subject',
  }

  function onSubmit(event) {
    event.preventDefault()
    console.log(event.currentTarget.elements)
  }

  return (
    <form name="contact" method="POST" netlify onSubmit={onSubmit}>
      <TextInput {...inputProps}>Hey there!</TextInput>
      <SubmitButton>submit</SubmitButton>
    </form>
  )
}

export default Form
