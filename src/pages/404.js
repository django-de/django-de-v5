import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={null}>
        <SEO title="404: Seite nicht gefunden" />

        <div className="content-box page-title">
          <header>
            <h2>Seite nicht gefunden</h2>
          </header>
          <section className="align-center">
            <p>Die von dir gesuchte Seite konnte nicht gefunden werden.</p>
            <p>
              <Link to="/" className="more">
                Schade 😞
              </Link>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
