import React, { Component } from "react";
import IsotopeReact from "./IsotopeReact";

class ProjectFilter extends Component {
  state = {
    tags: this.props.tags,
  };
  render() {
    return <IsotopeReact />;
  }
}

export default ProjectFilter;
