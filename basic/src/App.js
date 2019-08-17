import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderNavigation from "../src/HeaderNavigation";
import Form from "../src/Form";
import Body from "../src/Body";
const App = () => (
  <div>
    <HeaderNavigation />
    <Jumbotron fluid>
      <h1 className="header">Welcome To React-Bootstrap</h1>
    </Jumbotron>
    <Body>
      <Form />
    </Body>
  </div>
);

export default App;
