import styles from 'styles/components/contact.module.scss'
import Wrap from 'components/wrap'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Row from 'components/contact/row'

function Button({ children, className }) {
  const customClass = `${styles.button} ${className}`
  return <button className={customClass}>{children}</button>
}

function Topbar() {
  return (
    <div className={styles.topbar}>
      <Button className={styles.close}>close</Button>
      <Button className={styles.minimise}>minimise</Button>
    </div>
  )
}

const Alert = ({ children }) => <div className={styles.alert}>{children}</div>

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [success, setSuccess] = useState(false)
  function onSubmit(form) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => setSuccess(true))
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
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    placeholder: 'friendly@visitor.org',
    required: true,
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
  return (
    <div className={styles.container}>
      <Wrap className={styles.contact_wrap}>
        <Topbar />
        <Form />
      </Wrap>
    </div>
  )
}

export { Alert }

export default Contact
