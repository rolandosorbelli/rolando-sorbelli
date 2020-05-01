import React from "react"

import Layout from "../components/layout"
import Header from "../components/Header"
import About from "../components/About"
import Heading from "../components/Heading"
import Work from "../components/Work"
import SVG from "../components/SVG"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />
    <Heading title="work" />
    <SVG path="M0,256L1440,288L1440,320L0,320Z" fill="#f6e27f" />
    <Work />
    <SVG
      path="M0,256L1440,288L1440,320L0,320Z"
      fill="#f6e27f"
      className="svg-bottom"
    />
    <Heading title="contact" />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
