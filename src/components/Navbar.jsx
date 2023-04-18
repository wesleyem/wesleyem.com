import React, { Component } from "react";
import HeaderLink from "./HeaderLink";

class Navbar extends Component {
  state = {
    home: {
      name: "Hero",
      iconClasses: "bx-home",
      active: true,
    },
    about: {
      name: "About",
      iconClasses: "bx-user",
      active: false,
    },
    projects: {
      name: "Projects",
      iconClasses: "bx-book-content",
      active: false,
    },
    contact: {
      name: "Contact",
      iconClasses: "bx-envelope",
      active: false,
    },
  };

  render() {
    return (
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          {Object.values(this.state).map((nav) => (
            <li key={nav.name}>
              <HeaderLink
                handleMobileNavClick={this.props.handleMobileNavClick}
                name={nav.name}
                iconClasses={"bx " + nav.iconClasses}
                active={nav.active}
              />
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
