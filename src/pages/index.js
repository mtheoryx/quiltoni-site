import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>St Jude Rocks</h1>
    <p>Support the awesome St Jude PlayLive Campaign</p>
    <p><a href="https://tiltify.com/@quiltoni/quiltoni-2019-playlive-campaign" target="_blank">Now go build something great.</a></p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
