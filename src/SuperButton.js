// import React from "react";
import React, { Component } from "react";
import "./styles.css";

class SuperButtonText extends React.Component {
  handleClick = () => {
    alert(this.props.alertText);
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.text}</button>;
  }
}

export default SuperButtonText;
