import "./style.scss"

import GithubIcon from "../../content/Assets/Icons/github.svg"
import { Link } from "gatsby"
import Logo from "../../content/Assets/Logo.svg"
import React from "react"
import SlackIcon from "../../content/Assets/Icons/slack.svg"
import TwitterIcon from "../../content/Assets/Icons/twitter.svg"
import classNames from "classnames"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <>
        <header className="page-header">
          <h1>
            <Link className="logo" aria-label="Zurück zur Startseite" to="/">
              <Logo />
              <strong>Deutscher Django-Verein e.V.</strong>
            </Link>
          </h1>
          <ul>
            <li>
              <Link
                className={location === "/verein/" ? "active" : null}
                to="/verein/"
              >
                Verein &amp; Mitgliedschaft
              </Link>
            </li>

            <li>
              <Link
                className={location === "/termine/" ? "active" : null}
                to="/termine/"
              >
                Termine &amp; Events
              </Link>
            </li>
            <li>
              <Link
                className={location === "/hilfe/" ? "active" : null}
                to="/hilfe/"
              >
                Hilfe
              </Link>
            </li>
          </ul>
        </header>

        <main>{children}</main>

        <footer className="page-footer">
          <section>
            <h2 className="logo">
              <Logo />
              <strong>Deutscher Django-Verein e.V.</strong>
            </h2>

            <ul className="site-nav">
              <li>
                <Link className="more" to="/">
                  Startseite
                </Link>
              </li>
              <li>
                <Link className="more" to="/verein/">
                  Verein &amp; Mitgliedschaft
                </Link>
              </li>
              <li>
                <Link className="more" to="/termine/">
                  Termine &amp; Events
                </Link>
              </li>
              <li>
                <Link className="more" to="/hilfe/">
                  Hilfe
                </Link>
              </li>
            </ul>

            <ul className="social-nav">
              <li>
                <a className="more" href="https://twitter.com/djangode">
                  <TwitterIcon /> Twitter
                </a>
              </li>
              <li>
                <a className="more" href="https://github.com/orgs/django-de">
                  <GithubIcon /> Github
                </a>
              </li>
              <li>
                <Link to="/slack/" className="more">
                  <SlackIcon /> Slack
                </Link>
              </li>
            </ul>

            <div className="contact">
              <p>
                Deutscher Django-Verein e. V.
                <br />
                Engertstr. 18
                <br />
                04177 Leipzig
                <br />
                Deutschland
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:kontakt@django-de.org">kontakt@django-de.org</a>
              </p>
              <p>
                Der Verein wird vertreten durch den Vorstand Norma Driske,
                Martin Mahner und Stephan Jaekel.
              </p>
              <p>
                Vereinsregister: Amtsgericht Leipzig
                <br />
                Registernummer: VR 4814
                <br />
                USt-ID: DE269932358
              </p>
              <p>
                <Link to="/datenschutz/">Datenschutzerklärung</Link>
              </p>
            </div>
          </section>
        </footer>
      </>
    )
  }
}

export default Layout
