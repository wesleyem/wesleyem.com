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
              I'm a diversely experienced military helicopter pilot with years of experience
              ranging from navigating complex operational environments to advising senior
              leaders on aviation optimization.
            </p>
          </div>

          <div className="row">
            {/* <div className="col-lg-4">
              <img className="about-profile img-fluid" alt="" />
            </div> */}
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Transitioning Service Member, Leader, &amp; Lifelong Learner</h3>
              <p className="fst-italic">
                The most important resource in the universe is Time. I don't
                like to waste it.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Certificates:</strong>
                      <span>CompTIA Security+</span>
                    </li>
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
                      <strong>Resume:</strong>{" "}
                      <span>
                        <a href="https://linkedin.com/in/wesleymontserrat">
                          LinkedIn
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
              Transitioning skills to contribute to the Information Technology industry, bringing leadership experience and operational risk management proficiency. Committed to excellence, fostering cross-functional collaboration, and making an impact in the civilian realm.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
