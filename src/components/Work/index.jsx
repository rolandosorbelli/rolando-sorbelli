import React from "react"

import work_1 from "../../images/work_1.png"

const Work = () => {
  return (
    <div className="work">
      <div className="work__entry--wrapper">
        <div className="work__entry--promo">
          <h2>Lorem Ipsum</h2>
          <div className="work__entry--promo--inner">
            <img src={work_1} alt="" />
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
