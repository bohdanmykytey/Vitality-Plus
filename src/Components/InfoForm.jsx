import React, { Component } from "react";
import Form from 'muicss/lib/react/form';

class InfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lname: "",
      email: "",
      phone: ""
    };
  }

  handleChange = event => {
    this.setState({ event: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("Submitted, Thank You - We will get back to you shortly");
  };

  render() {
    return (
      <div>
        <Form inline={true}>
        <form onChange={this.handleChange}>
          <label>
            First Name:
            <input
              type="text"
              label="fname"
              placeholder="First Name"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Last Name:
            <input
              type="text"
              label="lname"
              placeholder="Last Name"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Email:
            <input
              type="email"
              label="email"
              placeholder="Email"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              label="name"
              placeholder="Phone Number"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            <input onClick={this.handleSubmit} type="submit" value="submit"></input>
          </label>
        </form>
        </Form>

        <a href='/'>home</a>
      </div>
    );
  }
}

export default InfoForm;
