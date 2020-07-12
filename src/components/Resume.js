import React, { Component } from "react";
import resume from "../assets/files/poornimaResume.pdf";
class Resume extends Component {
  render() {
    return (
      <div>
        <h1>Resume</h1>
        <iframe
          src={resume}
          title="Resume"
          style={{ width: "70%", height: "400px" }}
        ></iframe>
      </div>
    );
  }
}

export default Resume;
