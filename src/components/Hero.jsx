import React, { Component } from "react";
import TypedComponent from "./TypedComponent";
import SocialLinks from "./SocialLinks";

class Hero extends Component {
  state = {};
  render() {
    return (
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Wesley Montserrat</h1>
          <TypedComponent />
          <SocialLinks />
        </div>
      </section>
    );
  }
}

export default Hero;
