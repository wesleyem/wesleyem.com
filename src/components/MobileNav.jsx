import React, { Component } from "react";

class MobileNav extends Component {
  render() {
    return (
      <i
        onClick={this.props.handleMobileNavClick}
        className={this.props.classList}
      ></i>
    );
  }
}

export default MobileNav;
