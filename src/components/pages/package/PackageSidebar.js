import React, { Component } from "react";
import { Link } from "react-router-dom";

import p_1 from "../../../assets/images/package/p-1.png";
import p_2 from "../../../assets/images/package/p-2.png";
import p_3 from "../../../assets/images/package/p-3.png";
import p_4 from "../../../assets/images/package/p-4.png";
import p_5 from "../../../assets/images/package/p-5.png";
import p_6 from "../../../assets/images/package/p-6.png";
import sidebarBanner from "../../../assets/images/sidebar-banner.png";
import { connect } from "react-redux";
// Using an ES6 transpiler like Babel
import Slider from "react-rangeslider";
// To include the default styles
import "react-rangeslider/lib/index.css";
import $ from "jquery";
import { getPackagePostData } from "../../../Actions/Packagesidebar.action";
import withTokenHandler from "../../../globalTokenGenerated";
import Loader from "../../../Loader/Loader";
const mapStateToProps = (state) => ({
  // BlogsidebarData: state.BlogsidebarReducer.Blogsidebar,
  isLoading: state.PackageSidebarReducer.isLoading,
  PackagePostData: state.PackageSidebarReducer.PackagePost,
  PackagePostPages: state.PackageSidebarReducer.totalPages,
});

const mapDispatchToProps = {
  getPackagePostData,
};

class PackageSidebar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10,
      manageState: "",
      PackagePostPage: 0,
    };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  componentDidMount() {
    var matched = $(".select-selected").length;
    if (matched === 1) {
      this.intiScripts();
    }
  }

  componentWillMount() {
    var matched = $(".select-selected").length;
    if (matched === 2) {
      this.intiScripts();
    }
  }

  intiScripts() {
    //  custom select input
    var packageSidebarClass, i, j, l, ll, selElmnt, a, b, c;
    packageSidebarClass = document.getElementsByClassName(
      "package-selected-sidebar"
    );
    l = packageSidebarClass.length;
    for (i = 0; i < l; i++) {
      selElmnt = packageSidebarClass[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      packageSidebarClass[i].appendChild(a);
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML === this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      packageSidebarClass[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
        e.stopPropagation();
        closeAllPackageSideBarSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
    function closeAllPackageSideBarSelect(elmnt) {
      var packageSidebarClass,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      packageSidebarClass = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = packageSidebarClass.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt === y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          packageSidebarClass[i].classList.add("select-hide");
        }
      }
    }
    document.addEventListener("click", closeAllPackageSideBarSelect);
  }

  componentDidMount() {
    const { generateTokenAndUpdateState } = this.props;
    const storedToken = localStorage.getItem("NewToken");
    if (storedToken) {
      this.fetchData();
    } else {
      generateTokenAndUpdateState().then(() => {
        this.fetchData();
      });
    }
  }

  fetchData = () => {
    const { token } = this.props;

    if (token == null) {
      const stJwtToken = localStorage.getItem("NewToken");
      this.props.getPackagePostData(0, stJwtToken);
    } else {
      this.props.getPackagePostData(0, token);
    }
  };

  // intiScripts() {
  //   $(document).ready(function () {
  //     $(".preloader").delay(100).fadeOut("slow");
  //   });
  // }

  render() {
    const { PackagePostData } = this.props;
    const { PackagePostPages } = this.props;
    const { isLoading } = this.props;
    console.log(PackagePostData);
    const { value } = this.state;
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
                      <h2>Tour Packages</h2>
                      <ul className="breadcrumb-links">
                        <li>
                          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                          <i className="bx bx-chevron-right" />
                        </li>
                        <li>Tour Packages</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            {/* ===============  Package  area start =============== */}
            <div className="package-sidebar-wrapper pt-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      {PackagePostData
                        ? PackagePostData.map((item) => {
                            return (
                              <>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="package-card">
                                    <div className="package-thumb">
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
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img src={p_2} alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                <span>$280</span>/Per Person
                              </h5>
                              <h5>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </h5>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                Lake Garda, Italy
                              </Link>
                            </h3>
                            <div className="package-rating">
                              <strong>
                                <i className="bx bxs-star" />
                                <span>8K+</span> Rating
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img src={p_3} alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                <span>$120</span>/Per Person
                              </h5>
                              <h5>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </h5>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                Mount Dtna, Italyr
                              </Link>
                            </h3>
                            <div className="package-rating">
                              <strong>
                                <i className="bx bxs-star" />
                                <span>8K+</span> Rating
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img src={p_4} alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                <span>$300</span>/Per Person
                              </h5>
                              <h5>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </h5>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                Amalfi Costa, Italy
                              </Link>
                            </h3>
                            <div className="package-rating">
                              <strong>
                                <i className="bx bxs-star" />
                                <span>8K+</span> Rating
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img src={p_5} alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                <span>$240</span>/Per Person
                              </h5>
                              <h5>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </h5>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                French Rivira, France
                              </Link>
                            </h3>
                            <div className="package-rating">
                              <strong>
                                <i className="bx bxs-star" />
                                <span>8K+</span> Rating
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img src={p_6} alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                <span>$145</span>/Per Person
                              </h5>
                              <h5>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </h5>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                Lake Geneva, France
                              </Link>
                            </h3>
                            <div className="package-rating">
                              <strong>
                                <i className="bx bxs-star" />
                                <span>8K+</span> Rating
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img src={p_1} alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                <span>$180</span>/Per Person
                              </h5>
                              <h5>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </h5>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                Paris Hill Tour
                              </Link>
                            </h3>
                            <div className="package-rating">
                              <strong>
                                <i className="bx bxs-star" />
                                <span>8K+</span> Rating
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img src={p_2} alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                <span>$280</span>/Per Person
                              </h5>
                              <h5>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </h5>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                Lake Garda, Italy
                              </Link>
                            </h3>
                            <div className="package-rating">
                              <strong>
                                <i className="bx bxs-star" />
                                <span>8K+</span> Rating
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img src={p_3} alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                <span>$120</span>/Per Person
                              </h5>
                              <h5>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </h5>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                Mount Dtna, Italyr
                              </Link>
                            </h3>
                            <div className="package-rating">
                              <strong>
                                <i className="bx bxs-star" />
                                <span>8K+</span> Rating
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img src={p_4} alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                <span>$300</span>/Per Person
                              </h5>
                              <h5>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </h5>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                Amalfi Costa, Italy
                              </Link>
                            </h3>
                            <div className="package-rating">
                              <strong>
                                <i className="bx bxs-star" />
                                <span>8K+</span> Rating
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="pagination mt-30">
                          <Link to={"#"}>
                            <i className="bx bx-chevron-left" />
                          </Link>
                          <Link to={"#"} className="active">
                            1
                          </Link>
                          <Link to={"#"}>2</Link>
                          <Link to={"#"}>3</Link>
                          <Link to={"#"}>4</Link>
                          <Link to={"#"}>
                            <i className="bx bx-chevron-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="package-sidebar">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
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
                              >
                                <i className="bx bx-paper-plane" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6">
                          <div className="sidebar-banner mt-40">
                            <img
                              src={sidebarBanner}
                              alt=""
                              className="img-fluid"
                            />
                            <div className="sidebar-banner-overlay">
                              <div className="overlay-content">
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
            {/* ===============  Package  area end =============== */}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

const PackageSidebarWithTokenHandler = withTokenHandler(PackageSidebar);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageSidebarWithTokenHandler);
