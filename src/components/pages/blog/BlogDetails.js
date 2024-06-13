import React, { Component } from "react";
import b_sm_5 from "../../../assets/images/blog/b-sm5.png";

import bd_png from "../../../assets/images/blog/bd.png";
import b_g_1 from "../../../assets/images/blog/blog-g-1.png";
import b_g_2 from "../../../assets/images/blog/blog-g-2.png";
import b_g_3 from "../../../assets/images/blog/blog-g-3.png";
import c_1 from "../../../assets/images/blog/c-1.png";
import c_2 from "../../../assets/images/blog/c-2.png";
import c_3 from "../../../assets/images/blog/c-3.png";

import b_sm_1 from "../../../assets/images/blog/b-sm1.png";
import b_sm_2 from "../../../assets/images/blog/b-sm2.png";
import b_sm_3 from "../../../assets/images/blog/b-sm3.png";
import b_sm_4 from "../../../assets/images/blog/b-sm4.png";

import Moment from "moment";
import { Parser } from "html-to-react";
import "./Blog.css";
import Loader from "../../../Loader/Loader";

import sidebarBanner from "../../../assets/images/sidebar-banner.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBlogDetailsData } from "../../../Actions/BlogDetails.action";
import withTokenHandler from "../../../globalTokenGenerated";

const mapStateToProps = (state) => ({
  BlogDetailData: state.BlogDetailsReducer.BlogDetails,
  TourPackageData: state.BlogDetailsTourPackageReducer.TourPackage,
  isLoading: state.BlogDetailsTourPackageReducer.isLoading,
});

const mapDispatchToProps = {
  getBlogDetailsData,
};

class BlogDetails extends Component {
  componentDidMount() {
    this.scrollTop();
    const url = window.location.href;
    const splitUrl = url.split(/\/+/);
    const slugUrl = splitUrl[3];
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
      this.props.getBlogDetailsData(slugUrl, stJwtToken);
    } else {
      this.props.getBlogDetailsData(slugUrl, token);
    }
  };

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { TourPackageData } = this.props;
    const { BlogDetailData } = this.props;
    const { isLoading } = this.props;
    console.log(BlogDetailData);
    return (
      <>
        {!isLoading ? (
          <>
            <div className="breadcrumb-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="breadcrumb-wrap">
                      <h2>Blog details</h2>
                      <ul className="breadcrumb-links">
                        <li>
                          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                          <i className="bx bx-chevron-right" />
                        </li>
                        <li>Blog Details</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            {/* ===============  Blog wrapper area start =============== */}
            <div className="blog-details-wrapper pt-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="blog-details">
                      <div className="blog-title-xl">
                        <h3>{BlogDetailData?.title}</h3>
                        <div className="blog-info-xl">
                          <Link to={`#`} className="blog-writer">
                            <i className="flaticon-user" />
                            {BlogDetailData?.authorName}
                          </Link>
                        </div>
                      </div>
                      <div className="blog-img-xl">
                        <img
                          src={BlogDetailData?.headerImgUrl}
                          alt={BlogDetailData?.imgDescription}
                          className="img-fluid"
                        />
                        <div className="blog-date">
                          <i className="flaticon-calendar" />{" "}
                          {Moment(BlogDetailData?.updatedDt).format(
                            "d MMM, YYYY"
                          )}
                        </div>
                      </div>
                      <div className="blog-texts mt-30">
                        <p> {Parser().parse(BlogDetailData?.description)}</p>
                      </div>
                      <div className="blog-bottom">
                        <div className="blog-tags">
                          <h5>tags:</h5>
                          <ul>
                            <li>
                              <Link to={`#`}>Trip</Link>
                            </li>
                            <li>
                              <Link to={`#`}>Travel Forest</Link>
                            </li>
                            <li>
                              <Link to={`#`}>Tourist</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="blog-social">
                          <ul>
                            <li>
                              <Link to={`#`}>
                                <i className="bx bxl-instagram" />
                              </Link>
                              <Link to={`#`}>
                                <i className="bx bxl-facebook" />
                              </Link>
                              <Link to={`#`}>
                                <i className="bx bxl-twitter" />
                              </Link>
                              <Link to={`#`}>
                                <i className="bx bxl-whatsapp" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="blog-sidebar">
                      <div className="sidebar-searchbox">
                        <div className="input-group search-box">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Tour..."
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            <i className="bx bx-paper-plane" />
                          </button>
                        </div>
                      </div>
                      {TourPackageData.length >= 1 ? (
                        <div className="row">
                          <div className="col-lg-12 col-md-6">
                            <div className="blog-popular mt-40">
                              <h5 className="categorie-head">Tour Packages</h5>
                              <ul>
                                {TourPackageData
                                  ? TourPackageData.map((item) => {
                                      return (
                                        <>
                                          <li className="blog-card-sm">
                                            <div className="blog-img-sm blog-img-sm-width-height">
                                              <img
                                                src={item.headerImgUrl}
                                                alt={item.imgDescription}
                                              />
                                            </div>
                                            <div className="blog-details-sm">
                                              <Link
                                                to={`${process.env.PUBLIC_URL}/blog-details`}
                                                className="blog-title-sm"
                                              >
                                                {item.title}
                                              </Link>
                                              <div className="blog-info">
                                                <Link
                                                  to={`#`}
                                                  className="blog-writer"
                                                >
                                                  <i className="flaticon-arrival" />{" "}
                                                  {item.location}
                                                </Link>
                                                <Link
                                                  to={`#`}
                                                  className="blog-date"
                                                >
                                                  {" "}
                                                  <i className="flaticon-calendar" />{" "}
                                                  {Moment(
                                                    item.updatedDt
                                                  ).format("d MMM, YYYY")}
                                                </Link>
                                              </div>
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
                      ) : (
                        ""
                      )}
                      <div className="row">
                        <div className="col-lg-12 col-md-6">
                          <div className="sidebar-banner mt-40">
                            <img
                              src={sidebarBanner}
                              alt=""
                              className="img-fluid"
                            />
                            <div className="sidebar-banner-overlay">
                              <div className="sidebar-content">
                                <h3>Get 50% Off In Dubai Tour</h3>
                                <div className="sidebar-banner-btn">
                                  <Link to={"#"}>Book Now</Link>
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

const BlogDetailWithTokenHandler = withTokenHandler(BlogDetails);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDetailWithTokenHandler);
