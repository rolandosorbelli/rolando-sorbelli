import React from "react"
import message from "../../images/message.svg"
import Heading from "../Heading"

const Contact = () => (
  <div className="contact__section" id="heading">
    <Heading title="contact" />
    <div className="contact__form">
      <div className="inner">
        <form
          method="post"
          name="contact"
          action="/thanks"
          data-netlify="true"
          netlify-honeypot="bot"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="field__hidden">
            <label htmlFor="bot">Do not fill</label>
            <input name="bot" id="bot" />
          </div>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Your email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Your message</label>
            <textarea name="message" id="message" rows="6" required></textarea>
          </div>
          <div className="submit">
            <button type="submit" className="contact__button">
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="contact-svg">
      <img src={message} alt="message" />
    </div>
  </div>
)

export default Contact
