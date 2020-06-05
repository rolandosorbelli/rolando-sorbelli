import React, { Component } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

class About extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }

  render() {
    return (
      <div className="about">
        <div className="about__title" data-aos="fade-up">
          <h1>
            Rolando <span>/</span> Sorbelli
          </h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="about__content" data-aos="fade-down">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    )
  }
}

export default About
