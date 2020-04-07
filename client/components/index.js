import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from './head'

const Index = () => {
  const firefly = new Array(20).fill(<div className="firefly" />)
  return (
    <div>
      <Head title="MrTolerant" />
      <div id="wrapper">
        <div id="bg" className="bg" />
        <div id="main">
          <header id="header">
            {firefly}
            <h1>Petr Lebedev</h1>
            <p>
              {' '}
              DevOps &nbsp;&bull;&nbsp; Fullstack Developer &nbsp;&bull;&nbsp;
              Cyborg &nbsp;&bull;&nbsp; Never sleep
            </p>
            <nav>
              <ul>
                <li>
                  <a href="https://url.mrtolerant.ru" className="fas fa-link">
                    <span className="label">URL Shortener</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/MrTolerant"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="icon brands fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lebedevpetr/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="icon brands fa-linkedin"
                  >
                    <span className="label">Linkedin</span>
                  </a>
                </li>
                {/* <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li> */}
                <li>
                  <a
                    href="https://github.com/MrTolerant"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="icon brands fa-github"
                  >
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:lebedevpetr@outlook.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="icon solid fa-envelope"
                  >
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <footer id="footer">
            <span className="copyright">
              &copy; Design: <a href="http://MrTolerant.ru">LPV</a>.
            </span>
          </footer>
        </div>
      </div>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
