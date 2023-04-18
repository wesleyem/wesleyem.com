import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>
              I'm a diversely experienced leader of Marines with a wide range of
              experience from managing cross-functional teams in achieving
              operational objectives to compliance and risk management.
            </p>
          </div>

          <div className="row">
            {/* <div className="col-lg-4">
              <img className="about-profile img-fluid" alt="" />
            </div> */}
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>U.S. Marine Officer &amp; IT Enthusiast.</h3>
              <p className="fst-italic">
                The most important resource in the universe is Time. I don't
                like to waste it.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</strong>
                      <span>B.S. Computer Science</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>wesleyem@pm.me</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Resume:</strong> <span>LinkedIn</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                I'm a highly experienced leader of Marines with a proven track
                record of achieving operational objectives and managing
                cross-functional teams. Over the course of my career, I've honed
                my skills in risk management and compliance while leading
                Marines through some incredibly challenging situations. With a
                unique set of skills and a passion for excellence, I'm now
                focused on leveraging my experience to make a positive impact in
                the civilian world. Whether I'm working with a team to achieve a
                common goal or taking on a new challenge solo, I'm dedicated to
                achieving success and making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
