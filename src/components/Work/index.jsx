import React from "react"
import { StaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import Slider from "react-slick"
import Rodal from "rodal"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "rodal/lib/rodal.css"

import bookmark from "../../images/bookmark.svg"

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false, edge: {} }
  }

  async show(edge) {
    await this.setState({ edge: edge })
    this.setState({ visible: true })
    console.log(this.state, "STATE")
    var body = document.body
    body.classList.add("noScrolling")
  }

  hide() {
    this.setState({ visible: false })
    var body = document.body
    body.classList.remove("noScrolling")
  }

  render() {
    const settings = {
      className: "test",
      centerMode: true,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
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

    const { data } = this.props
    const { node } = this.state.edge
    console.log(node, "NODE")

    return (
      <div className="work">
        <div className="work__entry--wrapper">
          <Slider {...settings}>
            {data.edges.map((edge, i) => (
              <div
                className={classNames("work__entry--promo", {
                  "first-promo": i === 0,
                })}
                onClick={() => this.show(edge)}
                onKeyDown={() => this.show()}
                role="button"
                tabIndex="0"
              >
                <h2>{edge.node.title}</h2>
                <div className="work__entry--promo--inner">
                  <img
                    src={edge.node.image.fluid.src}
                    alt={edge.node.image.description}
                  />
                  <span>{edge.node.shortSynopsis}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {this.state.visible && (
          <Rodal
            visible={this.state.visible}
            onClose={() => this.hide()}
            animation="slideUp"
            customStyles={modalStyle}
            showMask={true}
          >
            <div className="overlay--image">
              <img src={bookmark} className="bookmark" alt="" />
              <img src={node.image.fluid.src} alt={node.image.description} />
              <h1>{node.title}</h1>
            </div>
            <div className="overlay--content">
              <div className="overlay--content--info">
                <a href={node.url}>{node.url}</a>
                <p>{node.content.content}</p>
              </div>
              <div className="overlay--content--stack">
                <h2>Tech Stack</h2>
                <ul>
                  {node.techStack.map(item => (
                    <li>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Rodal>
        )}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        allContentfulWorkSection(sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
              title
              slug
              image {
                description
                fluid(maxWidth: 1200, quality: 85) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
              shortSynopsis
              content {
                id
                content
              }
              url
              techStack {
                id
                slug
                name
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Work site={data.site} data={data.allContentfulWorkSection} />
    )}
  />
)
