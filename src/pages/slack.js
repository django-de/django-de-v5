import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const SlackURL = `https://join.slack.com/t/djangoev/shared_invite/enQtNzkwMDEyMjAzOTQwLWM0OGI5NzA5ZDRjMzgxNTVmN2Y2MjYzOGYzZWIzN2Y4YTg4YWMzM2JiZGZiNDVmOTE1YWU3ZGM1Yjc0MzlhMjg`

class RedirectPage extends React.Component {
  componentDidMount() {
    window.location.replace(SlackURL)
  }

  render() {
    return (
      <Layout location="/slack/">
        <SEO title="Slack" />
        <div className="content-box alternate left-aligned">
          <header>
            <h2>Slack Channel</h2>
          </header>
          <section>
            <p>
              Du wirst in wenigen Sekunden zu Slack weitergeleitet. Sollte das
              nicht funktionieren, probier bitte{" "}
              <a href={SlackURL}>diesen Link</a>.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default RedirectPage
