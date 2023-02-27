import styles from 'styles/components/contact.module.scss'
import Wrap from 'components/wrap'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Row from 'components/contact/row'

function Button({ children, className }) {
  const customClass = `${styles.button} ${className}`
  return <div className={customClass}>{children}</div>
}

function Topbar() {
  return (
    <div className={styles.topbar}>
      <Button className={styles.close}>close</Button>
      <Button className={styles.minimise}>minimise</Button>
    </div>
  )
}

function Alert({ className, children }) {
  const containerClasses = `${styles.alert} ${className}`
  return <div className={containerClasses}>{children}</div>
}

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

function Form({ handleSetSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  function onSubmit(form) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => {
        handleSetSuccess(true)
        setTimeout(() => handleSetSuccess(false), 3000)
      })
      .catch((error) => alert(error))
  }

  const formProps = {
    onSubmit: handleSubmit(onSubmit),
    className: styles.form,
    'data-netlify': true,
    name: 'contact',
    method: 'post',
    id: 'form',
  }

  const rowProps = {
    register,
    errors,
  }

  const subjectProps = {
    placeholder: 'Hey there!',
    label: 'Subject',
    ...rowProps,
  }

  const fromProps = {
    placeholder: 'friendly@visitor.org',
    required: `Please fill in your email address`,
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: `Is this mistyped? I can't accept this`,
    },
    label: 'From',
    ...rowProps,
  }

  const messageProps = {
    placeholder: 'Message',
    label: 'Message',
    type: 'textarea',
    ...rowProps,
  }

  const submitProps = {
    className: styles.submit,
    type: 'submit',
  }

  return (
    <form {...formProps}>
      <div className={styles.wrap}>
        <div className={styles.tag_row}>
          <div className={styles.label}>To</div>
          <div className={styles.tag_wrap}>
            <span className={styles.tag}>hello@paulh.biz</span>
          </div>
        </div>
        <Row {...subjectProps} />
        <Row {...fromProps} />
        <Row {...messageProps} />
        <div className={styles.submit_wrap}>
          <button {...submitProps}>Submit</button>
        </div>
      </div>
    </form>
  )
}

function Contact() {
  const [success, setSuccess] = useState(false)
  const handleSetSuccess = (value) => setSuccess(value)

  const formProps = {
    handleSetSuccess,
  }

  return (
    <div className={styles.container}>
      <Wrap className={styles.contact_wrap}>
        <Topbar />
        {!success ? (
          <Form {...formProps} />
        ) : (
          <div className={styles.success_container}>
            <div className={styles.success_wrap}>
              <span className={styles.confetti}>🎉</span>
              <h1 className={styles.success_title}>Success!</h1>
              <p className={styles.success_tagline}>
                Thanks for your message,
                <br /> I&apos;ll be in touch soon :)
              </p>
            </div>
          </div>
        )}
      </Wrap>
    </div>
  )
}

export { Alert }

export default Contact
