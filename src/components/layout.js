import React from "react"

import Logo from "../../content/Assets/Logo.svg"

import GithubIcon from "../../content/Assets/Icons/github.svg"
import SlackIcon from "../../content/Assets/Icons/slack.svg"
import TwitterIcon from "../../content/Assets/Icons/twitter.svg"

import classNames from "classnames"

import "./style.scss"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <>
        <header className="page-header">
          <h1>
            <a className="logo" aria-label="Zurück zur Startseite" href="/">
              <Logo />
              <strong>Deutscher Django-Verein e.V.</strong>
            </a>
          </h1>
          <ul>
            <li>
              <a
                className={location === "/verein/" ? "active" : null}
                href="/verein/"
              >
                Verein &amp; Mitgliedschaft
              </a>
            </li>

            <li>
              <a
                className={location === "/termine/" ? "active" : null}
                href="/termine/"
              >
                Termine &amp; Events
              </a>
            </li>
            <li>
              <a
                className={location === "/hilfe/" ? "active" : null}
                href="/hilfe/"
              >
                Hilfe
              </a>
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
                <a className="more" href="/">
                  Startseite
                </a>
              </li>
              <li>
                <a className="more" href="/verein">
                  Verein &amp; Mitgliedschaft
                </a>
              </li>
              <li>
                <a className="more" href="/termine">
                  Termine &amp; Events
                </a>
              </li>
              <li>
                <a className="more" href="/hilfe">
                  Hilfe
                </a>
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
                <a
                  className="more"
                  href="https://join.slack.com/t/djangoev/shared_invite/enQtNzkwMDEyMjAzOTQwLWM0OGI5NzA5ZDRjMzgxNTVmN2Y2MjYzOGYzZWIzN2Y4YTg4YWMzM2JiZGZiNDVmOTE1YWU3ZGM1Yjc0MzlhMjg"
                >
                  <SlackIcon /> Slack
                </a>
              </li>
            </ul>

            <div className="contact">
              <p>
                Deutscher Django-Verein e. V.
                <br />
                Kutschbachweg 3
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
                <a href="/datenschutz/">Datenschutzerklärung</a>
              </p>
            </div>
          </section>
        </footer>
      </>
    )
  }
}

export default Layout
