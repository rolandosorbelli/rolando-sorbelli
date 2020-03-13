import React from "react"

import Layout from "../components/layout"
import Header from "../components/Header"
import About from "../components/About"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />
  </Layout>
)

export default IndexPage
