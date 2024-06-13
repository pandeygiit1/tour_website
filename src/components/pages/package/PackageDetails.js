import React, { Component } from "react";
import { Link } from "react-router-dom";
import gallery2Img from "../../../assets/images/gallary/gl-2.png";
import gallery4Img from "../../../assets/images/gallary/gl-4.png";
import gallery5Img from "../../../assets/images/gallary/gl-5.png";
import gallery6Img from "../../../assets/images/gallary/gl-6.png";

import galleryGxx1Img from "../../../assets/images/gallary/g-xxl-1.png";
import galleryGxx2Img from "../../../assets/images/gallary/g-xxl-2.png";
import galleryGxx3Img from "../../../assets/images/gallary/g-xxl-3.png";
import galleryGxl1Img from "../../../assets/images/gallary/g-xl-1.png";
import galleryGxl2Img from "../../../assets/images/gallary/g-xl-2.png";
import galleryGxl3Img from "../../../assets/images/gallary/g-xl-3.png";
import sidebarBannar from "../../../assets/images/sidebar-banner.png";
import { SRLWrapper } from "simple-react-lightbox";
import Moment from "moment";
import Loader from "../../../Loader/Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import {
  getPackageDetailsData,
  getPackagePlanDetailData,
  getPackageImageDetailData,
  getTourPackageBookingDetailData,
} from "../../../Actions/PackageDetails.action";
import withTokenHandler from "../../../globalTokenGenerated";
import { Parser } from "html-to-react";
import axios from "axios";
import SweetAlert2 from "react-sweetalert2";
const mapStateToProps = (state) => ({
  PackageDetailData: state.PackageDetailsReducer.PackageDetails,
  PackagePlanData: state.PackagePlanDetailReducer.PackagePlan,
  PackageImagesData: state.PackageImagesDetailReducer.PackageImages,
  ArticleByTourPkgData: state.ArticleByTourPkgDetailsReducer.ArticleByTourPkg,
  TourPkgBooking: state.TourPkgBookingDetailsReducer.TourPkgBooking,
  isLoading: state.PackageDetailsReducer.isLoading,
});

const mapDispatchToProps = {
  getPackageDetailsData,
  getPackagePlanDetailData,
  getPackageImageDetailData,
  getTourPackageBookingDetailData,
};

class PackageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      setSwalProps: {},
      formData: {
        name: "",
        emailId: "",
        mobNo: "",
        adult: "",
        child: "",
        tourPackageId: "",
        tourPackageName: "",
        vendorId: "",
      },
    };
  }

  changeDatepickerHandeller = (date) => {
    this.setState({ startDate: date });
  };

  componentDidMount() {
    this.scrollTop();
    const url = window.location.href;
    const splitUrl = url.split(/\/+/);
    const slugUrl = splitUrl[3];
    console.log(slugUrl);
    const { generateTokenAndUpdateState } = this.props;
    const storedToken = localStorage.getItem("NewToken");
    if (storedToken) {
      this.fetchData(slugUrl);
    } else {
      generateTokenAndUpdateState().then(() => {
        this.fetchData(slugUrl);
      });
    }
  }

  fetchData = (slugUrl) => {
    const { token } = this.props;

    if (token == null) {
      const stJwtToken = localStorage.getItem("NewToken");
      this.props.getPackageDetailsData(slugUrl, stJwtToken);
    } else {
      this.props.getPackageDetailsData(slugUrl, token);
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.PackageDetailData !== prevProps.PackageDetailData) {
      this.updateFormData();
    }
  }

  updateFormData() {
    const { PackageDetailData } = this.props;
    if (PackageDetailData) {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          tourPackageId: PackageDetailData.id || "",
          vendorId: PackageDetailData.vendorId || "",
          tourPackageName: PackageDetailData.title || "",
        },
      }));
    }
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  // changeHandler = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log("Form submitted with data:", this.state.formData);
    const stJwtToken = localStorage.getItem("NewToken");
    try {
      getTourPackageBookingDetailData(this.state.formData, stJwtToken)
        .then((data) => {
          if (data === "true") {
            this.state.setSwalProps({
              show: true,
              title: "Thank you!",
              text: "We have recieved your details. Our representative will contact you soon.",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      alert(e);
    }
    // this.props.getTourPackageBookingDetailData(this.state.formData, stJwtToken);
  };
  render() {
    const startDate = this.state.startDate;
    const { PackageDetailData } = this.props;
    const { PackagePlanData } = this.props;
    const { PackageImagesData } = this.props;
    const { ArticleByTourPkgData } = this.props;
    const { isLoading } = this.props;
    return (
      <>
        {!isLoading ? (
          <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="breadcrumb-wrap">
                      <h2>Tour Package Details</h2>
                      <ul className="breadcrumb-links">
                        <li>
                          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                          <i className="bx bx-chevron-right" />
                        </li>
                        <li>Package Details</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            <div className="package-details-wrapper pt-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="package-details">
                      <div className="package-thumb">
                        <img src={PackageDetailData.headerImgUrl} alt="" />
                      </div>
                      <div className="package-header">
                        <div className="package-title">
                          <h3>{PackageDetailData.title}</h3>
                          <strong>
                            <i className="flaticon-arrival" />
                            {PackageDetailData.location}
                          </strong>
                        </div>
                      </div>
                      <div className="p-short-info">
                        <div className="single-info">
                          <i className="flaticon-clock" />
                          <div className="info-texts">
                            <strong>Duration</strong>
                            <p>Daily Tour</p>
                          </div>
                        </div>
                        <div className="single-info">
                          <i className="flaticon-footprints" />
                          <div className="info-texts">
                            <strong>Tour Type</strong>
                            <p>
                              {PackageDetailData.days} Days /
                              {PackageDetailData.nights} night
                            </p>
                          </div>
                        </div>
                        <div className="single-info">
                          <i className="flaticon-traveller" />
                          <div className="info-texts">
                            <strong>Group Size</strong>
                            <p>30 People</p>
                          </div>
                        </div>
                        <div className="single-info">
                          <i className="flaticon-translate" />
                          <div className="info-texts">
                            <strong>Languages</strong>
                            <p>Any Language</p>
                          </div>
                        </div>
                      </div>
                      <div className="package-tab">
                        <ul
                          className="nav nav-pills"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-home"
                              type="button"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              <i className="flaticon-info" />
                              Information
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              onClick={() =>
                                this.props.getPackagePlanDetailData(
                                  PackageDetailData.id,
                                  localStorage.getItem("NewToken")
                                )
                              }
                              className="nav-link"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              <i className="flaticon-clipboard" />
                              Travel Plan
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              onClick={() =>
                                this.props.getPackageImageDetailData(
                                  PackageDetailData.id,
                                  localStorage.getItem("NewToken")
                                )
                              }
                              className="nav-link"
                              id="pills-contact-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-contact"
                              type="button"
                              role="tab"
                              aria-controls="pills-contact"
                              aria-selected="false"
                            >
                              {" "}
                              <i className="flaticon-gallery" />
                              Our Gallary
                            </button>
                          </li>
                        </ul>
                        <div
                          className="tab-content p-tab-content"
                          id="pills-tabContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tab-content-1">
                                  <div className="p-overview">
                                    <p>
                                      {" "}
                                      {Parser().parse(
                                        PackageDetailData?.content
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                          >
                            <div className="tab-content-2">
                              <div className="row">
                                <div className="col-lg-12">
                                  <ul className="p-timeline">
                                    {PackagePlanData
                                      ? PackagePlanData.map((item) => {
                                          return (
                                            <>
                                              <li>
                                                <div className="timeline-index">
                                                  <div className="index-circle">
                                                    <h5>{item.id}</h5>
                                                  </div>
                                                </div>
                                                <div className="timeline-content">
                                                  <h5>{item.pkgPlnDay}</h5>
                                                  <p>{item.pkgPlnDesc}</p>
                                                </div>
                                              </li>
                                            </>
                                          );
                                        })
                                      : ""}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-contact"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab"
                          >
                            <div className="tab-contant-3">
                              <SRLWrapper>
                                <div className="row">
                                  <div className="col-lg-8 col-md-8">
                                    <div className="package-grid-one">
                                      <div className="single-grid">
                                        {PackageImagesData
                                          ? PackageImagesData.map((item) => {
                                              return (
                                                <>
                                                  <Link
                                                    to={item.imgUrl}
                                                    className="g-img-sm-1 main-gallary"
                                                  >
                                                    <img
                                                      src={item.imgUrl}
                                                      alt="gallary-img"
                                                    />
                                                  </Link>
                                                </>
                                              );
                                            })
                                          : ""}

                                        <Link
                                          to={gallery2Img}
                                          className="g-img-sm-2 main-gallary"
                                        >
                                          <img
                                            src={gallery2Img}
                                            alt="gallary-img"
                                          />
                                        </Link>

                                        <Link
                                          to={galleryGxx1Img}
                                          className="g-img-md main-gallary"
                                        >
                                          <img
                                            src={galleryGxx1Img}
                                            alt="gallary-img"
                                          />
                                        </Link>
                                      </div>
                                      <div className="single-grid mt-24">
                                        <Link
                                          to={gallery2Img}
                                          className="g-img-sm-1 main-gallary"
                                        >
                                          <img
                                            src={gallery2Img}
                                            alt="gallary-img"
                                          />
                                        </Link>
                                        <Link
                                          to={gallery4Img}
                                          className="g-img-sm-2 main-gallary"
                                        >
                                          <img
                                            src={gallery4Img}
                                            alt="gallary-img"
                                          />
                                        </Link>
                                        <Link
                                          to={galleryGxx2Img}
                                          className="g-img-md main-gallary"
                                        >
                                          <img
                                            src={galleryGxx2Img}
                                            alt="gallary-img"
                                          />
                                        </Link>
                                      </div>

                                      <div className="single-grid mt-24">
                                        <Link
                                          to={gallery5Img}
                                          className="g-img-sm-1 main-gallary"
                                        >
                                          <img
                                            src={gallery5Img}
                                            alt="gallary-img"
                                          />
                                        </Link>
                                        <Link
                                          to={gallery6Img}
                                          className="g-img-sm-2 main-gallary"
                                        >
                                          <img
                                            src={gallery6Img}
                                            alt="gallary-img"
                                          />
                                        </Link>
                                        <Link
                                          to={galleryGxx3Img}
                                          className="g-img-md main-gallary"
                                        >
                                          <img
                                            src={galleryGxx3Img}
                                            alt="gallary-img"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                    <div className="package-grid-two">
                                      <div className="single-grid-2">
                                        <Link
                                          to={galleryGxl1Img}
                                          className="main-gallary"
                                        >
                                          <img
                                            src={galleryGxl1Img}
                                            alt="gallary-img"
                                          />
                                        </Link>
                                      </div>
                                      <div className="single-grid-2 mt-24">
                                        <Link
                                          to={galleryGxl2Img}
                                          className="single-grid-2 main-gallary mt-30"
                                        >
                                          <img
                                            src={galleryGxl2Img}
                                            alt="gallary-img"
                                          />
                                        </Link>
                                      </div>
                                      <div className="single-grid-2 mt-24">
                                        <Link
                                          to={galleryGxl3Img}
                                          className="main-gallary mt-30"
                                        >
                                          <img
                                            src={galleryGxl3Img}
                                            alt="gallary-img"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SRLWrapper>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="package-d-sidebar">
                      <div className="row">
                        <div className="col-lg-12 col-md-6">
                          <div className="p-sidebar-form">
                            <form onSubmit={this.handleSubmit}>
                              <h5 className="package-d-head">
                                Book This Package
                              </h5>
                              <div className="row">
                                <input
                                  name="tourPackageId"
                                  type="hidden"
                                  value={PackageDetailData.id}
                                  onChange={this.handleChange}
                                />
                                <input
                                  name="tourPackageName"
                                  type="hidden"
                                  value={PackageDetailData.title}
                                  onChange={this.handleChange}
                                />
                                <input
                                  name="vendorId"
                                  type="hidden"
                                  value={PackageDetailData.vendorId}
                                  onChange={this.handleChange}
                                />
                                <div className="col-lg-12">
                                  <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Full Name"
                                    onChange={this.handleChange}
                                  />
                                </div>
                                <div className="col-lg-12">
                                  <input
                                    name="emailId"
                                    type="email"
                                    placeholder="Your Email"
                                    onChange={this.handleChange}
                                  />
                                </div>
                                <div className="col-lg-12">
                                  <input
                                    type="tel"
                                    name="mobNo"
                                    placeholder="Phone"
                                    onChange={this.handleChange}
                                  />
                                </div>
                                <div className="col-lg-6">
                                  <select
                                    name="adult"
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={this.handleChange}
                                  >
                                    <option selected>Adult</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                  </select>
                                </div>
                                <div className="col-lg-6">
                                  <select
                                    name="child"
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={this.handleChange}
                                  >
                                    <option selected>Child</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                  </select>
                                </div>
                                <div className="col-lg-12">
                                  <button type="submit" class="submit-button">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {ArticleByTourPkgData.length >= 1 ? (
                          <div className="col-lg-12 col-md-6">
                            <div className="p-sidebar-cards mt-40">
                              <h5 className="package-d-head">Tourist Places</h5>
                              <ul className="package-cards">
                                {ArticleByTourPkgData
                                  ? ArticleByTourPkgData.map((item) => {
                                      return (
                                        <>
                                          <li className="package-card-sm">
                                            <div className="p-sm-img p-sm-img-width-height">
                                              <img
                                                src={item?.headerImgUrl}
                                                alt={item?.imgDescription}
                                              />
                                            </div>
                                            <div className="package-info">
                                              <div className="package-date-sm">
                                                <strong>
                                                  <i className="flaticon-calendar" />{" "}
                                                  {Moment(
                                                    item.updatedDt
                                                  ).format("d MMM, YYYY")}
                                                </strong>
                                              </div>
                                              <h3>
                                                <Link
                                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                                >
                                                  {item.title}
                                                </Link>
                                              </h3>
                                              <h5>
                                                <i className="flaticon-user" />{" "}
                                                {item.authorName}
                                              </h5>
                                            </div>
                                          </li>
                                        </>
                                      );
                                    })
                                  : ""}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="col-lg-12 col-md-6">
                          <div className="p-sidebar-banner mt-40">
                            <img
                              src={sidebarBannar}
                              alt=""
                              className="img-fluid"
                            />
                            <div className="sidebar-banner-overlay">
                              <div className="overlay-content">
                                <h3>Get 50% Off In Dubai Tour</h3>
                                <div className="sidebar-banner-btn">
                                  <Link to={`#`}>Book Now</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
        {/* ===============  Blog wrapper area end =============== */}
      </>
    );
  }
}

const PackageDetailWithTokenHandler = withTokenHandler(PackageDetails);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageDetailWithTokenHandler);
