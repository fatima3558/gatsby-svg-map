import React from "react"

import Layout from "../components/layout"
import USMap from "../components/USMap"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>SVG Map of US States and Territories</h1>
    <USMap />
  </Layout>
)

export default IndexPage
