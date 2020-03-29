import React from "react"

import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"

const Footer = () => (
  <footer>
    <div className="footer__top">
      <a
        href="https://github.com/rolandosorbelli"
        className="footer__top--left"
      >
        <div>
          <img className="footer__top--image" src={github} alt="Github" />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/rolandosorbelli/"
        className="footer__top--right"
      >
        <div>
          <img className="footer__top--image" src={linkedin} alt="Linkedin" />
        </div>
      </a>
    </div>
    <div className="footer__bottom">
      <span>
        &copy; Copyright {new Date().getFullYear()}, Rolando Sorbelli.
      </span>
      <span>All Rights Reserved.</span>
    </div>
  </footer>
)

export default Footer
