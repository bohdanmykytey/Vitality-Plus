import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Appbar, Link, Button, Container } from "muicss/react";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Appbar>
          <a href='/form'><h1 style={{color: 'white'}}>Sample</h1></a>
        </Appbar>

        <h1>Vitality Plus: Web Solutions</h1>
      </div>
    );
  }
}

export default LandingPage;
