import React from "react"
import { Link } from "react-scroll"

import logo from "../../images/logo.svg"

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header__items">
          <a className="header__items--left" href="/">
            <img
              className="header__items--logo"
              src={logo}
              alt="Rolando Sorbelli Logo"
            />
          </a>
          <Link
            className="header__items--right"
            to="heading"
            smooth="easeOutQuad"
            offset={-80}
            duration={500}
          >
            <div className="header__items--right__button">
              <span>contact me</span>
            </div>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header
