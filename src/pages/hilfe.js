import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// https://docs.djangoproject.com/en/3.0/intro/...
//                                   ^^^
const djangoTutorialVersion = "3.0"

class Page extends React.Component {
  render() {
    return (
      <Layout location="/hilfe/">
        <SEO title="Hilfe zu Django" />

        <div className="content-box page-title">
          <header>
            <h2>Hilfe zu Django</h2>
          </header>
        </div>

        <div className="content-box left-aligned">
          <header>
            <h3>Django Girls Tutorial</h3>
          </header>
          <section>
            <p>
              Das Django Girls Tutorial bietet einen beginnerfreundlichen
              Einstieg in Django, von der Installation bis zum Deployment lernst
              du, wie du deine Django App Stück für Stück entwickeln kannst. Das
              Tutorial enthält weiterführende Links und ist in viele Sprachen
              übersetzt.
            </p>
            <p>
              <a href="https://tutorial.djangogirls.org/de/" className="more">
                https://tutorial.djangogirls.org/de/
              </a>
            </p>
          </section>
        </div>

        <div className="content-box left-aligned">
          <header>
            <h3>Django-Snippets</h3>
          </header>
          <section>
            <p>
              Wir betreiben die Webseite Django-Snippets
              (www.djangosnippets.org) bei dem Django-Endanwender kostenlos
              Beispiele Ihrer Software veröffentlichen können, um anderen
              Anwendern zu helfen und die Arbeit zur erleichtern.
            </p>
            <p>
              <a href="https://djangosnippets.org/" className="more">
                https://djangosnippets.org/
              </a>
            </p>
          </section>
        </div>

        <div className="content-box left-aligned">
          <header>
            <h3>Django Project Tutorial</h3>
          </header>
          <section>
            <p>
              Im Tutorial des Django Projects lernst du die Grundlagen von
              Django Schritt für Schritt, indem du eine Umfrage-App erstellst.
              Das Tutorial eignet sich eher für Entwickler, die schon etwas
              Erfahrung mitbringen, für absolute Anfänger empfehlen wir das
              Django Girls Tutorial.
            </p>
            <p>
              <a
                href={`https://docs.djangoproject.com/en/${djangoTutorialVersion}/intro/tutorial01/`}
                className="more"
              >
                {`https://docs.djangoproject.com/en/${djangoTutorialVersion}/intro/tutorial01/`}
              </a>
            </p>
          </section>
        </div>

        <div className="content-box left-aligned">
          <header>
            <h3>django-marcador</h3>
          </header>
          <section>
            <p>
              django-marcador ist ein freies Django Tutorial. Mit jedem Schritt
              des Tutorials wirst du die Grundlagen von Django erlernen, indem
              du eine Lesezeichen Applikation schreibst, vergleichbar mit
              Delicious oder Pinboard.
            </p>
            <p>
              <a href="http://django-marcador.keimlink.de/" className="more">
                http://django-marcador.keimlink.de/
              </a>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Page
