import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Details from './components/Details'
import Registry from './components/Registry'
import RSVP from './components/RSVP'
import './App.css'

class App extends Component {
    render() {
        return <Router>
            <div className="App">
              <header className="App-header">
                <Link to="/">
                  <h1>Brandie &amp; Dylan</h1>
                  <h2>Are Getting Married</h2>
                </Link>
              </header>
              <nav>
                  <ul>
                      <li>
                          <Link to='/details'>Details</Link>
                      </li>
                      <li>
                          <Link to='/registry'>Registry</Link>
                      </li>
                      <li>
                          <Link to='/rsvp'>RSVP</Link>
                      </li>
                  </ul>
              </nav>
              {/* <section class="save">
                  <h3>Save the Date: August 23, 2019</h3>
              </section> */}
              <Route path="/details" component={Details} />
              <Route path="/registry" component={Registry} />
              <Route path='/rsvp' component={RSVP} />
            </div>
        </Router>
    }
}

export default App