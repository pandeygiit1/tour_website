import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import "./Blog.css";
import Loader from "../../../Loader/Loader";
import sidebarBanner from "../../../assets/images/sidebar-banner.png";
import { connect } from "react-redux"; // Import connect from react-redux
import { getTouristPlaceDetailsData } from "../../../Actions/TouristPlaceDetails.action";
import withTokenHandler from "../../../globalTokenGenerated";
const mapStateToProps = (state) => ({
  TouristPlaceDetails: state.TouristPlaceDetailsReducer.TouristPlaceDetails,
  isLoading: state.TouristPlaceDetailsReducer.isLoading,
});

const mapDispatchToProps = {
  getTouristPlaceDetailsData,
};

class TouristPlaceDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

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
      this.props.getTouristPlaceDetailsData(slugUrl, stJwtToken);
    } else {
      this.props.getTouristPlaceDetailsData(slugUrl, token);
    }
  };

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { TouristPlaceDetails } = this.props;
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
                      <h2>Tourist Places Detail</h2>
                      <ul className="breadcrumb-links">
                        <li>
                          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                          <i className="bx bx-chevron-right" />
                        </li>
                        <li>Tourist Places Detail</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-sidebar-wrapper pt-90">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      {TouristPlaceDetails
                        ? TouristPlaceDetails.map((item) => {
                            return (
                              <>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="blog-card">
                                    <div className="blog-img">
                                      <img
                                        src={item.headerImgUrl}
                                        alt={item.imgDescription}
                                        className="img-fluid img-fluid-height-width"
                                      />
                                      <div className="blog-date">
                                        <i className="flaticon-calendar" />{" "}
                                        {Moment(item?.updatedDt).format(
                                          "d MMM, YYYY"
                                        )}
                                      </div>
                                    </div>
                                    <div className="blog-details">
                                      <div className="blog-info">
                                        <Link to={`#`} className="blog-writer">
                                          <i className="flaticon-user" />
                                          {item.authorName}
                                        </Link>
                                      </div>
                                      <Link
                                        to={{
                                          pathname:
                                            `${process.env.PUBLIC_URL}/tourist-place/` +
                                            item.slugUrl.replace(
                                              "tourist/places/",
                                              ""
                                            ),
                                        }}
                                        className="blog-title"
                                      >
                                        {item.title}
                                      </Link>
                                      <div className="blog-btn">
                                        <Link
                                          to={{
                                            pathname:
                                              `${process.env.PUBLIC_URL}/tourist-place/` +
                                              item.slugUrl.replace(
                                                "tourist/places/",
                                                ""
                                              ),
                                          }}
                                          className="btn-common-sm"
                                        >
                                          Read More
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="blog-sidebar mt-30">
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
                      {/* <div className="row">
                        <div className="col-lg-12 col-md-6">
                          <div className="blog-popular mt-40">
                            <h5 className="categorie-head">Tourist Places</h5>
                            <ul>
                              {BlogpostData
                                ? BlogpostData.map((item) => {
                                    return (
                                      <>
                                        <li className="blog-card-sm">
                                          <div className="blog-img-sm blog-img-sm-width-height">
                                            <img
                                              src={item?.headerImgUrl}
                                              alt={item?.imgDescription}
                                            />
                                          </div>
                                          <div className="blog-details-sm">
                                            <Link
                                              to={{
                                                pathname:
                                                  `${process.env.PUBLIC_URL}/tourist-place/` +
                                                  item.slugUrl.replace(
                                                    "tourist/places/",
                                                    ""
                                                  ),
                                              }}
                                              className="blog-title-sm"
                                            >
                                              {item.title}
                                            </Link>
                                            <div className="blog-info">
                                              <Link
                                                to={`#`}
                                                className="blog-writer"
                                              >
                                                <i className="flaticon-user" />{" "}
                                                {item.authorName}
                                              </Link>
                                              <Link
                                                to={`#`}
                                                className="blog-date"
                                              >
                                                {" "}
                                                <i className="flaticon-calendar" />{" "}
                                                {Moment(item.updatedDt).format(
                                                  "d MMM, YYYY"
                                                )}
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
                      </div> */}
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
            {/* ===============  Blog wrapper area end =============== */}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

const BlogSidebarWithTokenHandler = withTokenHandler(TouristPlaceDetails);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogSidebarWithTokenHandler);
