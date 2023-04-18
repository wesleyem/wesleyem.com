import React, { Component } from "react";
// import IsoReact from "./IsoReact";
// import portfolio1 from "../img/portfolio/portfolio-1.jpg";
// import portfolio2 from "../img/portfolio/portfolio-2.jpg";
// import portfolio3 from "../img/portfolio/portfolio-3.jpg";
// import portfolio4 from "../img/portfolio/portfolio-4.jpg";
// import portfolio5 from "../img/portfolio/portfolio-5.jpg";
// import portfolio6 from "../img/portfolio/portfolio-6.jpg";
// import portfolio7 from "../img/portfolio/portfolio-7.jpg";
// import portfolio8 from "../img/portfolio/portfolio-8.jpg";
// import portfolio9 from "../img/portfolio/portfolio-9.jpg";

class Projects extends Component {
  projectHeadliner = `I like to learn new things, so I'm always exploring. Whether its
  reading a new book, learning a new language, or just challenging
  myself to write some idea I had using a new 'thing', I'm always
  looking for ways to better myself and those around me. Generally everything is hosted on Github. If I feel the need to showcase something that isn't best suited for Github, expect to find it here.`;

  // projects = [
  //   {
  //     name: "Home Lab",
  //     tag: "sysadmin",
  //     img: portfolio1,
  //     portfolioDetails: {
  //       category: "System Administration",
  //       imgs: [],
  //       date: "",
  //       link: "",
  //       desc: "",
  //     },
  //   },
  //   {
  //     name: "Email Parser",
  //     tag: "cli",
  //     img: portfolio2,
  //   },
  //   {
  //     name: "Home Lab",
  //     tag: "admin",
  //     img: portfolio3,
  //   },
  //   {
  //     name: "Home Lab",
  //     tag: "admin",
  //     img: portfolio4,
  //   },
  //   {
  //     name: "Home Lab",
  //     tag: "admin",
  //     img: portfolio5,
  //   },
  //   {
  //     name: "Home Lab",
  //     tag: "admin",
  //     img: portfolio6,
  //   },
  //   {
  //     name: "Home Lab",
  //     tag: "admin",
  //     img: portfolio7,
  //   },
  //   {
  //     name: "Home Lab",
  //     tag: "admin",
  //     img: portfolio8,
  //   },
  //   {
  //     name: "Home Lab",
  //     tag: "admin",
  //     img: portfolio9,
  //   },
  // ];

  render() {
    return (
      <section id="projects" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Projects</h2>
            <p>{this.projectHeadliner}</p>
          </div>
          {/* <IsoReact projects={this.projects} /> */}
        </div>
      </section>
    );
  }
}

export default Projects;
