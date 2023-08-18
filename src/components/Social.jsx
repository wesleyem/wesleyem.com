import React, { Component } from "react";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state.key = this.props.key;
    this.state.classN = this.props.classN;
    this.state.link = this.props.link;
    this.state.iClass = this.props.iClass;
  }
  state = { key: "", link: "", classN: "", iClass: "" };
  render() {
    return (
      <a
        key={this.state.key}
        href={this.state.link}
        className={this.state.classN}
      >
        <i className={"bx " + this.state.iClass}></i>
      </a>
    );
  }
}

export default Social;
