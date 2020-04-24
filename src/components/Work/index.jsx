import React from "react"
import Slider from "react-slick"
import Rodal from "rodal"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "rodal/lib/rodal.css"

import work_1 from "../../images/work_1.png"
import bookmark from "../../images/bookmark.svg"

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  show() {
    this.setState({ visible: true })
    var body = document.body
    body.classList.add("noScrolling")

    console.log(body, "BODY")
  }

  hide() {
    this.setState({ visible: false })
    var body = document.body
    body.classList.remove("noScrolling")

    console.log(body)
  }

  render() {
    const settings = {
      centerMode: true,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    }

    const modalStyle = {
      width: "90%",
      height: "auto",
      backgroundColor: "#f6e27f",
    }
    return (
      <div className="work">
        <div className="work__entry--wrapper">
          <Rodal
            visible={this.state.visible}
            onClose={() => this.hide()}
            animation="slideUp"
            customStyles={modalStyle}
            showMask={true}
          >
            <div className="overlay--image">
              <img src={work_1} alt="" />
              <h1>Lorem Ipsum</h1>
            </div>
            <div className="overlay--content">
              <div className="overlay--content--info">
                <a href="/">www.loremipsum.com</a>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  sed.
                </p>
              </div>
              <div className="overlay--content--stack">
                <h2>Tech Stack</h2>
                <ul>
                  <li>Adobe XD</li>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>Gatsby</li>
                  <li>Netlify</li>
                  <li>Contentful</li>
                </ul>
              </div>
            </div>
          </Rodal>
          <Slider {...settings}>
            <div
              className="work__entry--promo"
              onClick={() => this.show()}
              onKeyDown={() => this.show()}
              role="button"
              tabIndex="0"
            >
              <h2>Lorem Ipsum</h2>
              <div className="work__entry--promo--inner">
                <img src={work_1} alt="" />
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
            <div className="work__entry--promo">
              <a href="/">
                <h2>Lorem Ipsum</h2>
                <div className="work__entry--promo--inner">
                  <img src={work_1} alt="" />
                  <span>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </span>
                </div>
              </a>
            </div>
            <div className="work__entry--promo">
              <a href="/">
                <h2>Lorem Ipsum</h2>
                <div className="work__entry--promo--inner">
                  <img src={work_1} alt="" />
                  <span>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </span>
                </div>
              </a>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default Work
