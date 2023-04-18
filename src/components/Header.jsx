import React, { Component } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { mobileNavClassListToggle } from "../js/helpers";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleMobileNavClick = this.handleMobileNavClick.bind(this);
    this.state = { mobileNavActive: false };
  }

  handleMobileNavClick() {
    this.setState({
      mobileNavActive: !this.state.mobileNavActive,
    });
  }

  mobileNavClassList = "bi bi-list mobile-nav-toggle d-lg-none";
  render() {
    const classList = mobileNavClassListToggle(
      this.state.mobileNavActive,
      "bi bi-list mobile-nav-toggle d-lg-none"
    );
    return (
      <div
        className={this.state.mobileNavActive ? "mobile-nav-active" : undefined}
      >
        <MobileNav
          handleMobileNavClick={this.handleMobileNavClick}
          classList={classList}
        />
        <header
          id="header"
          className="d-flex flex-column justify-content-center"
        >
          <Navbar handleMobileNavClick={this.handleMobileNavClick} />
        </header>
      </div>
    );
  }
}

export default Header;
