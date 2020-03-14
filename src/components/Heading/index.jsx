import React from "react"
import PropTypes from "prop-types"

const Heading = ({ title }) => {
  return (
    <div className="heading">
      <h1 className="heading__title">{title} - [ ]</h1>
    </div>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
}

export default Heading
