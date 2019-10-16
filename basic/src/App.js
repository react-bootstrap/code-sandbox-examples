import React from "react";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Jumpotron from "../src/Jumpotron";
import HeaderNavigation from "../src/HeaderNavigation";
import Form from "../src/Form";
import Body from "../src/Body";

const App = () => (
  <div>
    <div className="container">
      <HeaderNavigation />
      <div className="contents">{this.props.activeRouteHandler()}</div>
    </div>

    <Jumpotron />
    <Body>
      <Form />
    </Body>
  </div>
);

export default App;
