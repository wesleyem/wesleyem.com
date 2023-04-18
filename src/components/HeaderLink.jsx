import React, { Component } from "react";
import { selectDOM } from "../js/helpers";

class HeaderLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      iconClasses: this.props.iconClasses,
      active: this.props.active,
    };
  }

  scrollEventHandler = () => {
    let position = window.scrollY + 200;
    const navbarlink = selectDOM("#" + this.state.name.toLowerCase());
    this.setState({
      active:
        position >= navbarlink.offsetTop &&
        position <= navbarlink.offsetTop + navbarlink.offsetHeight,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollEventHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEventHandler);
  }

  render() {
    return (
      <a
        onClick={this.props.handleMobileNavClick}
        href={"#" + this.state.name.toLowerCase()}
        className={"nav-link scrollto" + (this.state.active ? " active" : "")}
      >
        <i className={this.state.iconClasses}></i>
        <span>{this.state.name === "Hero" ? "Home" : this.state.name}</span>
      </a>
    );
  }
}

export default HeaderLink;
