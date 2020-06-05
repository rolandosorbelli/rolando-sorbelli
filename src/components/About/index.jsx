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
          <p className="about__content--paragraph">
            Hi there, I'm Rolando, nice to meet you!
          </p>
          <p className="about__content--paragraph">
            I am a passionate software engineer who loves creating user-friendly
            experiences. I started my professional journey as a developer in
            2017 when I attended{" "}
            <a href="https://makers.tech/">Makers Academy</a>, a coding bootcamp
            that literally changed my career and gave a positive turn to my
            life. I am now based in London and I work at the BBC as a Software
            Engineer where I have the chance to build products for both internal
            and external use.
          </p>
          <p className="about__content--paragraph">
            I mostly focus on technologies such as <span>JavaScript</span>,{" "}
            <span>Node.js</span>, <span>React</span> and <span>HTML & CSS</span>
            .
          </p>
        </div>
      </div>
    )
  }
}

export default About
