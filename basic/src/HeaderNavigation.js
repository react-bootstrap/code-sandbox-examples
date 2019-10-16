import React from "react";

import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class HeaderNavigation extends React.Component {
  render() {
    return (
      <Router>
        <Nav
          link
          to="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <div>
            <Nav.Item>
              <Nav.Link to="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/users">users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/about">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/topics">Topics</Nav.Link>
            </Nav.Item>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>
            </Switch>
          </div>
        </Nav>
      </Router>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  );
}
