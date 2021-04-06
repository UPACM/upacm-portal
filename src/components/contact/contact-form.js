import React, { useState, useEffect } from "react"
import axios from "axios"
import AOS from "aos"

import "aos/dist/aos.css"
import "./contact-form.scss"

/* Component for accepting responses and sends to Getform*/
export default function ContactForm() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  function handleServerResponse(ok, msg, form) {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  function handleOnSubmit(error) {
    error.preventDefault()
    const form = error.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/6cc5d50d-f260-462a-9e2f-1b670396d039",
      data: new FormData(form),
    })
      .then(response => {
        handleServerResponse(true, "Thank you fo reaching out!", form)
      })
      .catch(response => {
        handleServerResponse(false, response.response.data.error, form)
      })
  }

  return (
    <div id="contact-form">
      <a id="email" href="mailto:contactus@upacm.net">
        <h6>contactus@upacm.net</h6>
      </a>
      <form
        data-aos="zoom-in"
        data-aos-delay="75"
        data-aos-duration="550"
        onSubmit={handleOnSubmit}
        id="form"
      >
        <div id="form-email">
          <b>
            <p>Email</p>
          </b>
          <input
            type="email"
            name="email"
            id="input-email"
            required="required"
            placeholder="Email"
          />
        </div>

        <div id="form-name">
          <b>
            <p>Name</p>
          </b>
          <input
            type="text"
            name="name"
            id="input-name"
            required="required"
            placeholder="Name"
          />
        </div>

        <div id="form-subject">
          <b>
            <p>Subject</p>
          </b>
          <input
            type="text"
            name="subject"
            id="input-subject"
            placeholder="Subject"
          />
        </div>

        <div id="form-message">
          <b>
            <p>Message</p>
          </b>
          <textarea
            type="text"
            name="message"
            id="input-message"
            required="required"
            placeholder="Message"
          />
        </div>

        <button
          type="submit"
          id="submit-button"
          disabled={serverState.submitting}
        >
          Submit
        </button>

        {serverState.status && (
          <div class={!serverState.status.ok ? "error" : ""} id="response">
            <p>{serverState.status.msg}</p>
          </div>
        )}
      </form>
    </div>
  )
}
