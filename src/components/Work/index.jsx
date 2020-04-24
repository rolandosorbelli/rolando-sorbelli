import React from "react"
import Slider from "react-slick"
import Rodal from "rodal"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "rodal/lib/rodal.css"

import work_1 from "../../images/work_1.png"

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  show() {
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
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
      height: "80vh",
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
          >
            <div className="overlay--image">
              <img src={work_1} alt="" />
            </div>
            <div className="overlay--content">
              <div className="gradient"></div>
            </div>
          </Rodal>
          <Slider {...settings}>
            <div className="work__entry--promo" onClick={() => this.show()}>
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
