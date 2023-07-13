function Button(props) {
  const { children, title, onClick } = props

  const buttonProps = {
    onClick,
    title,
  }

  return <button {...buttonProps}>{children}</button>
}

export default Button
