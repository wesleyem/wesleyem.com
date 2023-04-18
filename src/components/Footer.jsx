import React, { Component } from "react";
import SocialLinks from "./SocialLinks";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <h3>Wesley Montserrat</h3>
          <SocialLinks />
          <div className="copyright">
            &copy; Copyright&nbsp;
            <strong>
              <span>MyResume</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: [license-url] -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ --> */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
