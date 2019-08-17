import React from "react";
import InputGroup from "react-bootstrap/InputGroups";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default class HeaderNavigation extends React.Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        </InputGroup.Prepend>
        <Form
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <Form
          placeholder="Password"
          aria-label="password"
          aria-describedby="basic-addon1"
        />
        <Button type="submit">Submit form</Button>
      </InputGroup>
    );
  }
}
