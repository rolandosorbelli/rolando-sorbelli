import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import work_1 from "../../images/work_1.png"

class Work extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: false,
      arrows: false,
    }
    return (
      <div className="work">
        <div className="work__entry--wrapper">
          <Slider {...settings}>
            <div className="work__entry--promo">
              <h2>Lorem Ipsum</h2>
              <div className="work__entry--promo--inner">
                <img src={work_1} alt="" />
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
            <div className="work__entry--promo">
              <h2>Lorem Ipsum</h2>
              <div className="work__entry--promo--inner">
                <img src={work_1} alt="" />
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
            <div className="work__entry--promo">
              <h2>Lorem Ipsum</h2>
              <div className="work__entry--promo--inner">
                <img src={work_1} alt="" />
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default Work
