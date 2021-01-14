import React, { Component } from "react";

import Button from "./button.js";

import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      status: ""

    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.submitForm = this.submitForm.bind(this);
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

  submitForm() {
    this.setState({ status: "PENDING" });
    const form = document.getElementById('contactForm');
    var data = new FormData();
    data.append('name', this.state.name);
    data.append('email', this.state.email);
    data.append('message', this.state.message);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) {console.log("xhr.readyState !== XMLHttpRequest.DONE"); return;}
      if (xhr.status === 200) {
        this.setState({ name: "" });
        this.setState({ email: "" });
        this.setState({ message: "" });
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {

    const { status } = this.state;

    return(
      <form
        id="contactForm"
        action="https://formspree.io/mbjangoe"
        method="POST"
      >
        <label>
          Name:
          <input value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} autoComplete="on" />
        </label>
        <label>
          Message:
          <textarea type="text" name="message" value={this.state.message} onChange={this.handleChangeMessage} autoComplete="off" />
        </label>
        {status === "SUCCESS" ? <p>Thank you!</p> : <Button clicked={this.state.status != ""} text="Send" onClick={() => this.submitForm()}/>}
        {status === "ERROR" && <p>Oops! There was an error.</p>}
      </form>
    );
  }
}

export default Contact;
