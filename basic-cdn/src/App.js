import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";

import "./App.css";

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const App = () => (
  <Jumbotron fluid>
    <h1 className="header">Welcome To React-Bootstrap</h1>
    <ExampleToast className="toast">
      We now have Toasts
      <span role="img" aria-label="tada">
        🎉
      </span>
    </ExampleToast>
  </Jumbotron>
);

export default App;
