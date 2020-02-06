import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import Details from './components/Details'
import Registry from './components/Registry'
import RSVP from './components/RSVP'
import BBQ from './components/BBQ'
import Thanks from './components/Thanks'
import './App.css'

class App extends Component {
    render() {
        return <Router>
            <div className="App">
              <nav>
                  <ul>
                      <li>
                          <NavLink activeClassName="is-active" to='/bbq'>I Do BBQ</NavLink>
                      </li>
                      <li>
                          <NavLink activeClassName="is-active" to='/details'>Details</NavLink>
                      </li>
                      {/* <li>
                          <NavLink activeClassName="is-active" to='/registry'>Registry</NavLink>
                      </li> */}
                      <li>
                          <NavLink activeClassName="is-active" to='/rsvp'>RSVP</NavLink>
                      </li>
                  </ul>
              </nav>
              <header className="App-header">
                <Link exact={true} to="/">
                  <h1>Brandie &amp; Dylan</h1>
                  <h2>Are Getting Married</h2>
                </Link>
              </header>
              <Route path='/bbq' component={BBQ} />
              <Route path="/details" component={Details} />
              {/* <Route path="/registry" component={Registry} /> */}
              <Route path='/rsvp' component={RSVP} />
              <Route path='/rsvp/thanks' component={Thanks} />
              <footer>
                  <p>©<script type="text/javascript">document.write(new Date().getFullYear());</script> 2019 <a href="https://kaitsykes.com">Kait Sykes</a> • Made with ♥️</p>
              </footer>
            </div>
        </Router>
    }
}

export default App