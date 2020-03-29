import React from "react"

import logo from "../../images/logo.svg"

const Header = () => (
  <header>
    <div className="header__items">
      <a className="header__items--left" href="/">
        <img
          className="header__items--logo"
          src={logo}
          alt="Rolando Sorbelli Logo"
        />
      </a>
      <a className="header__items--right" href="#heading">
        <div className="header__items--right__button">
          <span>contact me</span>
        </div>
      </a>
    </div>
  </header>
)

export default Header
