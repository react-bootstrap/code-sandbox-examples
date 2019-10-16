import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const App = () => (
<div>
<Jumbotron fluid>
<h1 className="header">Welcome to Zach's page</h1>
</Jumbotron>

<ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
</div>