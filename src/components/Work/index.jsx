import React from "react"
import { StaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import throttle from "lodash.throttle"
import Slider from "react-slick"
import Rodal from "rodal"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "rodal/lib/rodal.css"
import AOS from "aos"
import "aos/dist/aos.css"

import bookmark from "../../images/bookmark.svg"
import Heading from "../Heading"

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false, edge: {}, isDesktop: false }
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

  handleWindowResize = () => {
    return throttle(() => {
      this.setState({ isDesktop: window.innerWidth > 991 })
    }, 200)
  }

  componentDidMount() {
    AOS.init({
      duration: 2000,
      once: true,
    })

    if (window.innerWidth > 991) {
      this.setState({ isDesktop: true })
    }
    window.addEventListener("resize", this.handleWindowResize())
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize())
  }

  render() {
    const settings = {
      className: "test",
      centerMode: true,
      infinite: false,
      centerPadding: "80px",
      slidesToShow: 1,
      draggable: this.state.isDesktop ? false : true,
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
      overflowY: "scroll",
      backgroundColor: "#f6e27f",
    }

    const { data } = this.props
    const { node } = this.state.edge

    return (
      <div className="work">
        <Heading title="work" />
        <div className="work__entry--wrapper">
          <Slider {...settings}>
            {data.edges.map((edge, i) => (
              <div
                className={classNames("work__entry--promo", {
                  "first-promo": i === 0,
                })}
                onClick={() => (this.state.isDesktop ? false : this.show(edge))}
                onKeyDown={() => this.show()}
                role="button"
                tabIndex="0"
                key={i}
                data-aos="fade-right"
              >
                <div className="work__entry--promo-left">
                  <div
                    className="work__entry--promo--image"
                    style={{
                      backgroundImage: `url(${edge.node.image.fluid.src})`,
                    }}
                  ></div>
                  <div className="work__entry--promo--inner">
                    <h2>{edge.node.title}</h2>
                    {this.state.isDesktop ? (
                      <a href={`https://${edge.node.url}`}>{edge.node.url}</a>
                    ) : (
                      <span>{edge.node.content.content}</span>
                    )}
                  </div>
                </div>

                {this.state.isDesktop && (
                  <div className="work__entry--promo-right">
                    <h2>Info</h2>
                    <p>{edge.node.content.content}</p>
                    {edge.node.techStack && (
                      <>
                        <h2>Tech Stack</h2>
                        <ul>
                          {edge.node.techStack &&
                            edge.node.techStack.map((item, i) => (
                              <li key={i}>{item.name}</li>
                            ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
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
                <a href={`https://${node.url}`}>{node.url}</a>
                <h2>Info</h2>
                <p>{node.content.content}</p>
              </div>
              {node.techStack && (
                <div className="overlay--content--stack">
                  <h2>Tech Stack</h2>
                  <ul>
                    {node.techStack.map(item => (
                      <li>{item.name}</li>
                    ))}
                  </ul>
                </div>
              )}
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
