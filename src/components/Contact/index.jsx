import React from "react"

const Contact = () => (
  <div className="contact__section">
    <div className="contact__form">
      <span>
        <span>*</span> indicates a required field.
      </span>
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
            <label>Do not fill</label>
            <input name="bot" />
          </div>
          <div className="field">
            <label>Your name</label>
            <input type="text" name="name" />
          </div>
          <div className="field">
            <label>
              Your email <span>*</span>
            </label>
            <input type="text" name="email" required />
          </div>
          <div className="field">
            <label>Your Message</label>
            <textarea name="message" rows="6"></textarea>
          </div>
          <div className="submit">
            <button type="submit" className="contact__button">
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Contact
