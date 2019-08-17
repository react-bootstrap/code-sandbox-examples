import React from "react";
import Button from "react-bootstrap/Button";
import Input from "react-bootstrap/FormCheck";
export default class InlineLogin extends React.Component {
  constructor() {
    super();

    this.onEmailChange = this.onEmailChange.bind(this);
    this.state = {};
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Clicked");
  }

  onEmailChange(e) {
    const value = this.refs.email.getValue();

    if (/.+@.+\.com/.test(value)) {
      this.setState({ emailValid: "success" });
    } else {
      this.setState({ emailValid: "error" });
    }
  }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.onSubmit} action="">
        <Input
          ref="email"
          type="text"
          bsStyle={this.state.emailValid}
          placeholder="Email"
          onChange={this.onEmailChange}
          hasFeedback
        />{" "}
        <Input type="text" placeholder="Password" />{" "}
        <Button bsStyle="success" type="submit">
          Sign in
        </Button>
      </form>
    );
  }
}
