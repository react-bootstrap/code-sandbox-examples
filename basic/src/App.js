import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderNavigation from "../src/HeaderNavigation";
import Form from "../src/Form";
import Body from "../src/Body";
import AddTripButton from "../src/Triggerstate";

const App = () => (
  <div>
    <HeaderNavigation className="body" />
    <Jumbotron fluid>
      <h1 className="header">Welcome To React-Bootstrap</h1>
    </Jumbotron>
    <Jumbotron fluid>
      <AddTripButton addTrip={this.triggerAddTripState} />
      <Form className="header" />
    </Jumbotron>
    <Body className="body" />
  </div>
);

export default App;
