import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

class Page extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location="/">
        <SEO title="Deutscher Django-Verein e.V." />

        <div className="teaser">
          <h2>
            Django ermöglicht es dir, bessere Webseiten schneller zu entwickeln
            —&nbsp;mit wenig Code.
          </h2>
        </div>

        <div className="content-box">
          <header>
            <h2>Was ist Django?</h2>
          </header>
          <section>
            <p>
              Django ist ein in Python geschriebenes, quelloffenes (BSD Lizenz)
              Web Framework, das die schnelle Entwicklung, auch von sehr
              komplexen, Webseiten ermöglicht.
            </p>
            <p>
              Auf der Hauptseite www.djangoproject.com findest du detallierte
              Informationen sowie technische Hintergründe und die Dokumentation.
            </p>
          </section>
        </div>

        <div className="content-box alternate">
          <header>
            <h2>Wir sind der Django e.V.</h2>
          </header>
          <section>
            <p>
              Der Deutsche Django Verein wurde im Jahr 2009 gegründet, um Django
              im deutschsprachigen Raum weiter bekannt zu machen und um eine
              zentrale Anlaufstelle für Entwickler und Benutzer von
              Django-basierter Software zu bieten.
            </p>
          </section>
        </div>

        <div className="content-box">
          <header>
            <h2>Wobei unterstützen wir euch?</h2>
          </header>
          <section>
            <div className="image-grid">
              <div>
                <Img fluid={data.LinuxTage.image.fluid} alt="" />
              </div>
              <div>
                <Img fluid={data.DjangoSnippets.image.fluid} alt="" />
              </div>
              <div>
                <Img fluid={data.DjangoGirls.image.fluid} alt="" />
              </div>
              <p style={{ backgroundColor: "#7a6a61" }}>
                Wir repräsentieren Django auf Konferenzen, Messen und bei
                Firmen.
              </p>
              <p style={{ backgroundColor: "#e7505b" }}>
                Wir betreuen den #django-de IRC Chat und Djangosnippets.
                <br />
                <Link className="more" to="/hilfe">
                  Hilfe
                </Link>
              </p>
              <p style={{ backgroundColor: "#57bfe1" }}>
                Wir unterstützen euch bei der Durchführung von User Groups und
                Events. Organisatorisch und finanziell. <br />
                <Link className="more" to="/djangogirls">
                  Django Girls Workshop
                </Link>
              </p>
            </div>

            <p className="align-center padded">
              <Link className="more" to="/verein">
                Mehr über den Verein und die Mitgliedschaft
              </Link>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Page

export const query = graphql`
  {
    Tisch: file(
      absolutePath: { glob: "**/Assets/Fotos/Homepage/DjangoGirlsLeipzig.jpg" }
    ) {
      image: childImageSharp {
        fluid(quality: 70, maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    LinuxTage: file(
      absolutePath: { glob: "**/Assets/Fotos/Homepage/LinuxTage.jpg" }
    ) {
      image: childImageSharp {
        fluid(quality: 70, maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    DjangoSnippets: file(
      absolutePath: { glob: "**/Assets/Fotos/Homepage/DjangoSnippets.png" }
    ) {
      image: childImageSharp {
        fluid(quality: 70, maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    DjangoGirls: file(
      absolutePath: { glob: "**/Assets/Fotos/DjangoGirls/Footer.jpg" }
    ) {
      image: childImageSharp {
        fluid(quality: 70, maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
