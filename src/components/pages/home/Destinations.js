import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { connect } from "react-redux";

//Import Images
import destinations1Img from "../../../assets/images/destination/d-1.png";
import destinations4Img from "../../../assets/images/destination/d-4.png";
import destinations5Img from "../../../assets/images/destination/d-5.png";
import destinations6Img from "../../../assets/images/destination/d-6.png";
import destinations7Img from "../../../assets/images/destination/d-7.png";
import destinations8Img from "../../../assets/images/destination/d-8.png";
import destinations9Img from "../../../assets/images/destination/d-9.png";
import destinations10Img from "../../../assets/images/destination/d-10.png";
import destinations11Img from "../../../assets/images/destination/d-11.png";
import destinations2Img from "../../../assets/images/destination/d-2.png";
import destinations3Img from "../../../assets/images/destination/d-3.png";

// const mapStateToProps = (state) => ({
//   PackageFeaturedLocationData:
//     state.PackageFeaturedLocationReducer.PackageFeaturedLocation,
// });

// const mapDispatchToProps = {
//   getPackageFeaturedLocationData,
// };

class Destinations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   const { generateTokenAndUpdateState } = this.props;
  //   const storedToken = localStorage.getItem("NewToken");
  //   if (storedToken) {
  //     this.fetchData();
  //   } else {
  //     generateTokenAndUpdateState().then(() => {
  //       this.fetchData();
  //     });
  //   }
  // }

  // fetchData = () => {
  //   const { token } = this.props;

  //   if (token == null) {
  //     const stJwtToken = localStorage.getItem("NewToken");
  //     this.props.getPackageFeaturedLocationData(stJwtToken);
  //   } else {
  //     this.props.getPackageFeaturedLocationData(token);
  //   }
  // };

  render() {
    const { PackageFeaturedLocationData } = this.props;
    console.log(PackageFeaturedLocationData);
    const destinationsOptions = {
      stagePadding: 1,
      items: 3,
      loop: true,
      margin: 20,
      smartSpeed: 1500,
      autoplay: false,
      dots: false,
      nav: true,
      navText: [
        "<i class='bx bx-chevron-left' ></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
        },
        600: {
          items: 2,
          nav: false,
          dost: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
        },
      },
    };

    return (
      <>
        {/* =============== Destinations area start =============== */}
        <div className="destinations-area pt-105">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-40">
                  <h5>Choose Your Package</h5>
                  <h2>Select Your best Package For Your Travel</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={destinations1Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>Spain</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-1"
                  {...destinationsOptions}
                >
                  {PackageFeaturedLocationData
                    ? PackageFeaturedLocationData.slice(0, 6).map((item) => {
                        return (
                          <>
                            <div className="package-card">
                              <div className="package-thumb">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
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
                          </>
                        );
                      })
                    : ""}
                </OwlCarousel>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-2"
                  {...destinationsOptions}
                >
                  {PackageFeaturedLocationData
                    ? PackageFeaturedLocationData.slice(3, 6).map((item) => {
                        return (
                          <>
                            <div className="package-card">
                              <div className="package-thumb">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
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
                                </div>
                                <h3>
                                  <i className="flaticon-arrival" />
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/package-details`}
                                  >
                                    {item.title}
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </>
                        );
                      })
                    : ""}
                </OwlCarousel>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={destinations2Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>Italy</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={destinations3Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>Dubai</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-1"
                  {...destinationsOptions}
                >
                  {PackageFeaturedLocationData
                    ? PackageFeaturedLocationData.slice(6, 9).map((item) => {
                        return (
                          <>
                            <div className="package-card">
                              <div className="package-thumb">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
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
                                </div>
                                <h3>
                                  <i className="flaticon-arrival" />
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/package-details`}
                                  >
                                    {item.title}
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </>
                        );
                      })
                    : ""}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        {/* =============== Destinations area end =============== */}
      </>
    );
  }
}

export default Destinations;
