import React from "react"

const SVG = ({ path, fill, className, height, width }) => {
  return (
    <div className="waves">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
        className={className}
        height={height}
        width={width}
      >
        <path fill={fill} fill-opacity="1" d={path}></path>
      </svg>
    </div>
  )
}

export default SVG
