import React, { Component } from "react";

import Button from "./button.js";

import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeName(event) {
    this.setState( { name: event.target.value } );
  }

  handleChangeEmail(event) {
    this.setState( { email: event.target.value } );
  }

  handleChangeMessage(event) {
    this.setState( { message: event.target.value } );
  }

  render() {
    return(
      <form>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <label>
          E-mail:
          <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
        </label>
        <label>
          Message:
          <textarea value={this.state.message} onChange={this.handleChangeMessage} />
        </label>
        <Button text="Send Message" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Contact;
