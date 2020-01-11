import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={null}>
        <SEO title="404: Seite nicht gefunden" />
        <h1>Seite nicht gefunden</h1>
      </Layout>
    )
  }
}

export default NotFoundPage
