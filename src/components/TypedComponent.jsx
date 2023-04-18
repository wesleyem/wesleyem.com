import React, { Component } from "react";
import Typed from "typed.js/src/typed";

class TypedComponent extends Component {
  state = {
    typedItems: "create, be bold, be different",
  };

  t = null;

  componentDidMount() {
    const items = this.state.typedItems.split(",");
    this.t = new Typed(".typed", {
      strings: items,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  componentWillUnmount() {
    if (this.t) {
      this.t.destroy();
    }
  }

  render() {
    return (
      <p>
        Let's&nbsp;
        <span className="typed"></span>
      </p>
    );
  }
}

export default TypedComponent;
