function Button(props) {
  const { children, title, onClick, className } = props

  const buttonProps = {
    className,
    onClick,
    title,
  }

  return <button {...buttonProps}>{children}</button>
}

export default Button
