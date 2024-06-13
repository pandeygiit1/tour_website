import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { getPackageFeaturedPostData } from "../../../Actions/TourFeatured.action";
import {
  getTourPkgLocation,
  getTourPkgByLocation,
} from "../../../Actions/TourPkgLocation.action";
import withTokenHandler from "../../../globalTokenGenerated";
import Loader from "../../../Loader/Loader";

const mapStateToProps = (state) => ({
  TourPkgLocation: state.TourPkgLocationReducer.TourPkgLocation,
});

const mapDispatchToProps = {
  getTourPkgLocation,
  getTourPkgByLocation,
};
class MainBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      location: "",
      searchbarBorder:false
    };
  }

  componentDidMount() {
    const { generateTokenAndUpdateState } = this.props;
    const storedToken = localStorage.getItem("NewToken");
    if (storedToken) {
      this.fetchData(storedToken);
    } else {
      generateTokenAndUpdateState().then((token) => {
        this.fetchData(token);
      });
    }
  }

  fetchData = (token) => {
    this.props.getTourPkgLocation(token);
  };

  changeDatepickerHandeller = (date) => {
    this.setState({ startDate: date });
  };

  handleSelectChange = (event) => {
    this.setState({ location: event.target.value });
  };

  render() {
    const { PackageFeaturedPostData } = this.props;
    const { TourPkgLocation } = this.props;
    const { isLoading } = this.props;
    console.log(TourPkgLocation);
    const mainBannerOptions = {
      items: 1,
      loop: true,
      margin: 0,
      smartSpeed: 700,
      dots: false,
      nav: true,
      autoplay: 4000,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
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
          items: 1,
          nav: false,
          dost: false,
        },
        1000: {
          items: 1,
          nav: true,
          loop: true,
        },
      },
    };

    const startDate = this.state.startDate;
    return (
      <>
        {/* ===============  Main banner area start =============== */}
        <div className="main-banner">
          <OwlCarousel
            className="banner-slider owl-carousel"
            {...mainBannerOptions}
          >
            {PackageFeaturedPostData
              ? PackageFeaturedPostData.slice(1, 4).map((item) => {
                  return (
                    <>
                      <div
                        className="slider-item"
                        style={{
                          backgroundImage: `url(${item.headerImgUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="container">
                          <div
                            className="slider-content wow fadeInLeft animated"
                            data-wow-delay="300ms"
                            data-wow-duration="1500ms"
                          >
                            <h2>{item.title} </h2>
                            <h5>
                              {item.days} Days/{item.nights} night Tour
                            </h5>
                            {this.state.location ? (
                              <div className="banner-btn">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package`}
                                  className="btn-common"
                                >
                                  Book Now
                                </Link>
                              </div>
                            ) : (
                              ""
                            )}
                            {/* <div className="banner-btn">
                              <Link
                                to={`${process.env.PUBLIC_URL}/package`}
                                className="btn-common"
                              >
                                Book Now
                              </Link>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              : ""}
          </OwlCarousel>
        </div>
        {/* ===============  Main banner area end =============== */}

        {/* ===============  findfrom area start ============= */}
        <div className="find-form">
          <div className="container">
            <form className="findfrom-wrapper">
              <div className="row">
                <div className="col-lg-4">
                  <select className={this.state.searchbarBorder ? "searchbarBorder" : ""}
                    value={this.state.location}
                    onChange={this.handleSelectChange}
                  >
                    <option value="" disabled>
                      Location..
                    </option>
                    {TourPkgLocation?.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-3">
                  <div className="calendar-input">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => this.changeDatepickerHandeller(date)}
                      className="input-field check-in"
                      placeholder="dd-mm-yy"
                    />
                    <i className="flaticon-calendar" />
                  </div>
                </div>
                
                {this.state.location ? (
                  <div
                    className="col-lg-4"
                    onClick={() =>
                      this.props.getTourPkgByLocation(
                        this.state.location,
                        localStorage.getItem("NewToken")
                      )
                    }
                  >
                    <div className="find-btn">
                      <Link
                        to={{
                          pathname: `${process.env.PUBLIC_URL}/tour-package/location`,
                        }}
                        className="btn-second"
                      >
                        <i className="bx bx-search-alt" /> Find now
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="col-lg-4">
                    <div className="find-btn" onClick={()=>this.setState({searchbarBorder:true})}>
                      <Link to={`#`} className="btn-second">
                        <i className="bx bx-search-alt" /> Find now
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* ===============  findfrom area end =============== */}
      </>
    );
  }
}

const MainBannerWithTokenHandler = withTokenHandler(MainBanner);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBannerWithTokenHandler);
