import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./App.css";

import ExampleToast from "./ExampleToast";

const App = () => (
  <>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome Tamil</h1>
        <ExampleToast header="Tamil" body="Working No.1">
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ExampleToast>
      </Jumbotron>
    </Container>

    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <ExampleToast header="Mahir" body="Working No.2">
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ExampleToast>
      </Jumbotron>
    </Container>
  </>
);

export default App;
