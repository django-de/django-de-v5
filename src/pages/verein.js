import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Page extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location="/verein/">
        <SEO title="Verein & Mitgliedschaft" />

        <div className="content-box page-title">
          <header>
            <h2>Verein & Mitgliedschaft</h2>
          </header>
          <section>
            <p>
              Der Deutsche Django Verein wurde im Jahr 2009 gegründet, um Django
              im deutschsprachigen Raum weiter bekannt zu machen und um eine
              zentrale Anlaufstelle für Entwickler und Benutzer von
              Django-basierter Software zu bieten.
            </p>
            <p>
              <a href={data.Satzung.publicURL}>Satzung</a>&nbsp;|&nbsp;
              <a href={data.Geschaeftsordnung.publicURL}>Geschäftsordnung</a>
            </p>
          </section>
        </div>

        <div className="content-box">
          <header>
            <h2>Wie werde ich Mitglied?</h2>
          </header>
          <section>
            <p>
              Zuerst einmal freuen uns sehr über dein Interesse an unserem
              Verein! Bitte fülle das{" "}
              <a href={data.Antragsformular.publicURL}>Anmeldeformular</a> aus
              und sende es unterschrieben entweder per Post and die dort
              genannte Adresse oder per E-Mail an{" "}
              <a href="mailto:kontakt@django-de.org">kontakt@django-de.org</a>.
            </p>
            <p>
              Für den Mitgliedsbeitrag stellen wir jährlich eine Rechnung aus
              und schicken Sie an deine E-Mail-Adresse.
            </p>
            <p>
              Bis jetzt ist der Verein noch nicht gemeinnützig allerdings
              streben wir diese im Moment an. Mitgliedsbeiträge und Spenden
              können also derzeit nicht als Spende von der Steuer abgesetzt
              werden.
            </p>
          </section>
        </div>

        <div className="content-box alternate">
          <header>
            <h2>
              Ich wohne nicht in Deutschland: Kann ich trotzdem Mitglied werden?
            </h2>
          </header>
          <section>
            <p>
              Aber natürlich! Wir haben besonderen Wert darauf gelegt, nicht nur
              regional begrenzt für alle innerdeutschen, sondern für alle (in
              der Regel deutschsprachigen) Djangonauten (zum Beispiel aus
              Österreich oder der Schweiz) tätig sein zu können. Wir haben
              keinerlei festgeschriebene Beitrittsbeschränkungen. Jeder ist
              gerne bei uns willkommen.
            </p>
          </section>
        </div>

        <div className="content-box">
          <header>
            <h2>Tätigkeitsberichte</h2>
          </header>
          <section className="align-center">
            <p>Unsere Tätigkeitsberichte der vergangenen Jahre:</p>
            <p className="link-list">
              {data.Taetigkeitsberichte.edges.map(node => (
                <a className="more" href={node.Bericht.publicURL}>
                  {node.Bericht.name}
                </a>
              ))}
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
    Satzung: file(absolutePath: { glob: "**/Assets/Satzung.pdf" }) {
      publicURL
    }

    Geschaeftsordnung: file(
      absolutePath: { glob: "**/Assets/Geschäftsordnung.pdf" }
    ) {
      publicURL
    }

    Antragsformular: file(
      absolutePath: { glob: "**/Assets/Antragsformular.pdf" }
    ) {
      publicURL
    }

    Taetigkeitsberichte: allFile(
      filter: { absolutePath: { glob: "**/Assets/Tätigkeitsberichte/*.pdf" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        Bericht: node {
          name
          publicURL
        }
      }
    }
  }
`
