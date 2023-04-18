import React, { Component } from "react";

class SocialLinks extends Component {
  state = {
    socials: [
      {
        aClass: "twitter",
        iClass: "bxl-twitter",
        link: "https://twitter.com/spo0f_",
      },
      {
        aClass: "linkedin",
        iClass: "bxl-linkedin",
        link: "https://linkedin.com//in/wesleymontserrat",
      },
      {
        aClass: "github",
        iClass: "bxl-github",
        link: "https://github.com/wesleyem",
      },
      {
        aClass: "email",
        iClass: "bx-envelope",
        link: "mailto:wesleyem@pm.me",
      },
    ],
  };
  render() {
    return (
      <div className="social-links">
        {this.state.socials.map((social) => (
          <a key={social.aClass} href={social.link} className={social.aClass}>
            <i className={"bx " + social.iClass}></i>
          </a>
        ))}
      </div>
    );
  }
}

export default SocialLinks;
