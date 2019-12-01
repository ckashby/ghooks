import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Link to="/">Home</Link>
    <br />
    <h1>About Us</h1>
    <p>Our team and our story...</p>
  </Layout>
)

export default AboutPage
