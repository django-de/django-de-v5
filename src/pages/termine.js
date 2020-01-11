import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RepeatIcon from "../../content/Assets/Icons/repeat.svg"

class Page extends React.Component {
  Eintrag(node) {
    const post = node.Eintrag

    return (
      <div className="appointment" key={post.id}>
        <h3>
          {post.frontmatter.repeating === true ? (
            <RepeatIcon className="date-icon" />
          ) : (
            <span className="date">{post.frontmatter.date}</span>
          )}

          {post.frontmatter.title}
        </h3>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <p>
          <a className="more" href={post.frontmatter.url}>
            {post.frontmatter.url_label !== null
              ? post.frontmatter.url_label
              : post.frontmatter.url}
          </a>
        </p>
      </div>
    )
  }

  render() {
    const { data } = this.props

    return (
      <Layout location="/termine/">
        <SEO title="Termine & Events" />

        <div className="content-box page-title">
          <header>
            <h2>Termine & Events</h2>
          </header>
          <section>
            <p>
              Wir als Django-Verein fördern die Kommunikation aller
              Django-Interessierten. Daher findet ihr hier einen Überblick über
              unsere, als auch von der Community organisierten Aktivitäten.
            </p>
            <p>
              Falls Ihr Ideen habt und Hilfe für ein Treffen oder ein sonstiges
              Event benötigt, sind wir für euch da und versuchen euch
              organisatorisch und bei Bedarf auch finanziell zu helfen.
            </p>
          </section>
        </div>

        <div
          className="content-box"
          hidden={data.Demnaechst.edges.length === 0}
        >
          <header>
            <h2>Demnächst</h2>
          </header>
          <section>
            {data.Demnaechst.edges.map(node => this.Eintrag(node))}
          </section>
        </div>

        <div
          className="content-box"
          hidden={data.Wiederkehrend.edges.length === 0}
        >
          <header>
            <h2>Wiederkehrende Termine</h2>
          </header>
          <section>
            {data.Wiederkehrend.edges.map(node => this.Eintrag(node))}
          </section>
        </div>

        <div className="content-box" hidden={data.Vergangen.edges.length === 0}>
          <header>
            <h2>Vergangene Termine</h2>
          </header>
          <section>
            {data.Vergangen.edges.map(node => this.Eintrag(node))}
          </section>
        </div>
      </Layout>
    )
  }
}

export default Page

export const query = graphql`
  {
    Demnaechst: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/Termine/Demnächst/**" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        Eintrag: node {
          id
          html
          frontmatter {
            title
            date(formatString: "D. MMM YYYY", locale: "de")
            url
            url_label
          }
        }
      }
    }

    Wiederkehrend: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/Termine/Wiederkehrend/**" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        Eintrag: node {
          id
          html
          frontmatter {
            title
            date(formatString: "D. MMM YYYY", locale: "de")
            repeating
            url
            url_label
          }
        }
      }
    }

    Vergangen: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/Termine/Vergangen/**" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        Eintrag: node {
          id
          html
          frontmatter {
            title
            date(formatString: "D. MMM YYYY", locale: "de")
            url
            url_label
          }
        }
      }
    }
  }
`
