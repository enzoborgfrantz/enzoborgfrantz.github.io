import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { heading } from "../shared/theme/colors"
import { ProfilePhoto } from "../components/ProfilePhoto"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ color: heading }}>Coming soon... -ish</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>👽</div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
