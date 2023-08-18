import React, { Component } from "react";
import Social from "./Social";

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
      {
        aClass: "blog",
        iClass: "bx-comment",
        link: "https://hello.wesleyem.com",
      },
    ],
  };
  render() {
    return (
      <div className="social-links">
        {this.state.socials.map((social) => (
          <Social
            key={social.aClass}
            link={social.link}
            classN={social.aClass}
            iClass={social.iClass}
          />
        ))}
      </div>
    );
  }
}

export default SocialLinks;
