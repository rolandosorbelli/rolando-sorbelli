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
    <SVG
      path="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,202.7C672,181,768,171,864,170.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      fill="#f6e27f"
    />
    <Work />
    <SVG
      path="M0,96L120,85.3C240,75,480,53,720,48C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      fill="#f6e27f"
      className="svg-bottom"
    />
    <Heading title="contact me" />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
