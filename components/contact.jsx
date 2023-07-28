function handleSubmit(event) {
  event.preventDefault()

  const myForm = event.target
  const formData = new FormData(myForm)

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log('Form successfully submitted'))
    .catch((error) => alert(error))
}

function Contact() {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Your Name:</label>
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">Your Email: </label> <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Message: </label>
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default Contact
