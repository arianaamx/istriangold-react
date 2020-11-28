import logo from "./logo.svg";
import HomePage from "./components/Home/HomePage";
import ContactPage from "./components/Contact/ContactPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="navbar">
          <div className="navbar-container">
            <Link className="navbar-logo" to="/">
              istriangold
            </Link>
            {/* <h2 className="navbar-logo">istriangold</h2> */}
            <nav>
              <ul className="navbar-items">
                <li className="navbar-item">
                  <Link className="nav-links" to="/">
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="nav-links" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Switch>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
