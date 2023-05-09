function RowButton({ active, children, className, onClick }) {
  if (!active) return

  return (
    <div className={className}>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default RowButton
