import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import AboutWrapper from "./AboutWrapper";
import GuideWrapper from "./GuideWrapper";
import Achievement from "./Achievement";
import AboutReview from "./AboutReview";
import AboutBlog from "./AboutBlog";
import AboutPackages from "./AboutPackage";
class AboutUs extends Component {
  render() {
    return (
      <>
        <BreadCrumb />
        <AboutWrapper />
        <AboutPackages />
        <Achievement />
        <AboutReview />
        <AboutBlog />
      </>
    );
  }
}

export default AboutUs;
