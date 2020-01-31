import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

class Page extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location="/djangogirls/">
        <SEO title="Django Girls" />

        <Img fluid={data.Hero.image.fluid} alt="" />

        <div className="content-box alternate left-aligned">
          <header>
            <h2>Über Django Girls</h2>
          </header>
          <section>
            <p>
              <a href="https://djangogirls.org/">Django Girls</a> ist eine
              weltweite Initiative mit dem Ziel, Frauen für das Programmieren zu
              begeistern und Diversität zu fördern. Kostenfreie Workshops bieten
              den Teilnehmerinnen die Möglichkeit, in kleinen Gruppen mit Hilfe
              von Mentoren das Erstellen von Web-Anwendungen mit HTML, CSS,
              Python und Django zu erlernen.
            </p>
            <p>
              Der erste Django Girls Workshop fand 2014 im Rahmen der
              EuroPython-Konferenz in Berlin statt. Seither organisieren
              Freiwillige auf der ganzen Welt Django Girls Events. Sie
              übersetzen und pflegen auch das eigens dafür entwickelte{" "}
              <a href="https://tutorial.djangogirls.org/">Tutorial</a>.
            </p>
            <p>
              Wir, als Django-Verein, unterstützen und fördern Django Girls
              Workshops im deutschsprachigen Raum.
            </p>
          </section>
        </div>

        <div className="content-box left-aligned">
          <header>
            <h2>Wie kann der Django Verein helfen?</h2>
          </header>
          <section>
            <p>
              Wenn du Lust und Interesse hast, einen Django Girls Workshop in
              deiner Stadt zu organisieren, solltest du als Erstes das{" "}
              <a href="https://organize.djangogirls.org/">
                Django Girls Organizer Manual{" "}
              </a>
              anschauen.
            </p>
            <p>
              Wir, als Django Verein, können dir folgende Unterstützung
              anbieten:
            </p>
            <ul>
              <li>
                Mit dem Django Verein erhältst du einen rechtlichen Rahmen für
                deinen Workshop, so dass du die Verantwortung nicht als
                Privatperson tragen musst.
              </li>
              <li>
                Wir können als Verein Ansprechpartner für deine Sponsoren sein
                und die finanzielle Abwicklung übernehmen.
              </li>
              <li>
                Wir führen eine Übersicht von Unterstützern bisher
                durchgeführter Django Girls Workshops in Deutschland, diese kann
                dir bei der Sponsorensuche helfen.
              </li>
              <li>
                Wir teilen gern unsere Erfahrungen bei der Organisation von
                Workshops und beantworten Fragen.
              </li>
              <li>
                Wir können dir bei der Suche nach Mentoren behilflich sein.
              </li>
            </ul>
            <p>
              Kontaktiere uns am besten per{" "}
              <a href="mailto:kontakt@django-verein.de">E-mail</a>, wir freuen
              uns darauf, dich zu unterstützen!
            </p>
          </section>
        </div>
        <Img fluid={data.Footer.image.fluid} alt="" />
      </Layout>
    )
  }
}

export default Page

export const query = graphql`
  {
    Hero: file(absolutePath: { glob: "**/Assets/Fotos/DjangoGirls/Hero.jpg" }) {
      image: childImageSharp {
        fluid(quality: 70, maxWidth: 1600, maxHeight: 800, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    Footer: file(
      absolutePath: { glob: "**/Assets/Fotos/DjangoGirls/Footer.jpg" }
    ) {
      image: childImageSharp {
        fluid(quality: 70, maxWidth: 1600, maxHeight: 1100, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
