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

function Form(props) {
  const inputProps = {
    name: 'subject',
  }
  return (
    <form {...props}>
      <TextInput {...inputProps}>Hey there!</TextInput>
      <SubmitButton>submit</SubmitButton>
    </form>
  )
}

export default Form
