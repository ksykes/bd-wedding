import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Details from './components/Details'
import Registry from './components/Registry'
import RSVP from './components/RSVP'
import Shower from './components/Shower'
import './App.css'

class App extends Component {
    render() {
        return <Router>
            <div className="App">
              <nav>
                  <ul>
                      <li>
                          <Link to='/details'>Details</Link>
                      </li>
                      {/* <li>
                          <Link to='/registry'>Registry</Link>
                      </li> */}
                      <li>
                          <Link to='/rsvp'>RSVP</Link>
                      </li>
                      {/* <li>
                          <Link to='/shower'>Shower</Link>
                      </li> */}
                  </ul>
              </nav>
              <header className="App-header">
                <Link to="/">
                  <h1>Brandie &amp; Dylan</h1>
                  <h2>Are Getting Married</h2>
                </Link>
              </header>
              {/* <section class="save">
                  <h3>Save the Date: August 23, 2019</h3>
              </section> */}
              <Route path="/details" component={Details} />
              {/* <Route path="/registry" component={Registry} /> */}
              <Route path='/rsvp' component={RSVP} />
              {/* <Route path='/shower' component={Shower} /> */}
              <footer>
                  <p>©<script type="text/javascript">document.write(new Date().getFullYear());</script> 2019 <a href="https://kaitsykes.com">Kait Sykes</a> • Made with ♥️</p>
              </footer>
            </div>
        </Router>
    }
}

export default App