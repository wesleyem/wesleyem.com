import React, { Component } from "react";
import AOS from "aos";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";

import ProjectItem from "./ProjectItem";

class IsoReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterKey: "*",
    };
    this.isoArrange = this.isoArrange.bind(this);
    this.handleFilterKeyChange = this.handleFilterKeyChange.bind(this);
  }

  glightbox = null;

  portfolioDetailsLightbox = null;

  projects = this.props.projects;

  projectFilterTags = [
    "*",
    ...new Set(Array.from(this.projects, (p) => p.tag)),
  ];

  iso = null;

  componentDidMount() {
    this.glightbox = new GLightbox({
      selector: ".portfolio-lightbox",
    });
    this.portfolioDetailsLightbox = new GLightbox({
      selector: ".portfolio-details-lightbox",
      width: "90%",
      height: "90vh",
    });
    this.iso = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
    });
    this.iso.on("arrangeComplete", function () {
      AOS.refresh();
    });
    window.addEventListener("load", this.isoArrange);
  }
  componentWillUnmount() {
    this.iso.destroy();
    this.portfolioDetailsLightbox.destroy();
    this.glightbox.destroy();
    window.removeEventListener("load", this.isoArrange);
  }

  isoArrange() {
    if (this.state.filterKey === "*")
      this.iso.arrange({ filter: this.state.filterKey });
    else this.iso.arrange({ filter: `.${this.state.filterKey}` });
  }

  handleFilterKeyChange = (key) => () => {
    this.setState({ filterKey: key }, () => {
      this.isoArrange();
    });
  };

  render() {
    return (
      <>
        <div className="row">
          <div
            className="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul id="portfolio-flters">
              {this.projectFilterTags.map((tag, i) => (
                <li
                  key={i}
                  onClick={this.handleFilterKeyChange(tag)}
                  className={
                    this.state.filterKey === tag ? "filter-active" : ""
                  }
                >
                  {tag === "*" ? "All" : tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {this.projects.map((proj, i) => (
            <ProjectItem project={proj} key={i} />
          ))}
        </div>
      </>
    );
  }
}

export default IsoReact;
