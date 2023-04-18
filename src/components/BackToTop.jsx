import React, { Component } from "react";

class BackToTop extends Component {
  state = {
    classList: "back-to-top d-flex align-items-center justify-content-center",
  };

  scrollEH = () => {
    if (window.scrollY > 100) {
      if (!this.state.classList.includes("active")) {
        this.setState({ classList: this.state.classList + " active" });
      }
    } else {
      this.setState({
        classList: this.state.classList.replace("active", "").trim(),
      });
    }
  };

  componentDidMount() {
    window.addEventListener("load", this.scrollEH);
    document.addEventListener("scroll", this.scrollEH);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.scrollEH);
    document.removeEventListener("scroll", this.scrollEH);
  }

  render() {
    return (
      <a href="#hero" className={this.state.classList}>
        <i className="bi bi-arrow-up-short"></i>
      </a>
    );
  }
}

export default BackToTop;
