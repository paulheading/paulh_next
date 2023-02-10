function Label({ color, children, size = 'sm', variant = 'solid' }) {
  function fontSize() {
    switch (size) {
      case 'md':
        return '1rem'
      default:
        return '0.875rem'
    }
  }

  function style() {
    let basic = {
      border: `1px solid ${color}`,
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      display: 'inline-block',
      fontSize: fontSize(),
      margin: '0.25rem',
    }

    if (variant === 'outline') {
      return {
        ...basic,
        backgroundColor: 'white',
        color,
      }
    } else {
      return {
        ...basic,
        backgroundColor: color,
        color: 'white',
      }
    }
  }

  return <div style={style()}>{children}</div>
}

export default Label
