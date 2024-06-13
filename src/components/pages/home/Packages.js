import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";
//Load Image
import package2Img from "../../../assets/images/package/p-2.png";

class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   // if (isLoading) {
  //   //   this.intiScripts();
  //   // }
  // }

  // intiScripts() {
  //   $(document).ready(function () {
  //     $(".preloader").delay(100).fadeOut("slow");
  //   });
  // }

  render() {
    const { PackageFeaturedPostData } = this.props;
    console.log(PackageFeaturedPostData);
    // const { PackageFeaturedPostData } = this.props;

    return (
      <>
        {/* ===============  Package  area start =============== */}
        <div className="package-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-45">
                  <h5>Choose Your Package</h5>
                  <h2>Select Your best Package For Your Travel</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {PackageFeaturedPostData
                ? PackageFeaturedPostData.slice(0, 6).map((item) => {
                    return (
                      <>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                          data-wow-duration="1500ms"
                          data-wow-delay="0ms"
                        >
                          <div className="package-card">
                            <div className="package-thumb">
                              <Link
                                to={{
                                  pathname:
                                    `${process.env.PUBLIC_URL}/tour-package/` +
                                    item.slugUrl.replace("tour/packages/", ""),
                                }}
                              >
                                <img
                                  src={item.headerImgUrl}
                                  alt={item.imgDescription}
                                  className="img-fluid img-fluid-height-width"
                                />
                              </Link>
                            </div>
                            <div className="package-details">
                              <div className="package-info">
                                <h5>
                                  <span>₹{item.price}</span>/Per Person
                                </h5>
                                <h5>
                                  <i className="flaticon-calendar" />
                                  {item.days} Days/{item.nights} night
                                </h5>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={{
                                    pathname:
                                      `${process.env.PUBLIC_URL}/tour-package/` +
                                      item.slugUrl.replace(
                                        "tour/packages/",
                                        ""
                                      ),
                                  }}
                                >
                                  {item.title}
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
        {/* ===============  Package  area end =============== */}
      </>
    );
  }
}

export default Packages;
