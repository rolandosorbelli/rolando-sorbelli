import React from "react"

import Layout from "../components/layout"
import Header from "../components/Header"
import About from "../components/About"
import Heading from "../components/Heading"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />
    <Heading title="work" />
  </Layout>
)

export default IndexPage
