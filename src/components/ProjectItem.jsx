import React, { Component } from "react";

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
  }

  render() {
    return (
      <div
        className={
          "col-lg-4 col-md-6 portfolio-item filter-app " + this.state.tag
        }
      >
        <div className="portfolio-wrap">
          <img src={this.state.img} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>{this.state.name}</h4>
            <p>{this.state.tag}</p>
            <div className="portfolio-links">
              <a
                href={this.state.img}
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title={this.state.name}
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="portfolio-details.html"
                className="portfolio-details-lightbox"
                data-glightbox="type: external"
                title="Portfolio Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
