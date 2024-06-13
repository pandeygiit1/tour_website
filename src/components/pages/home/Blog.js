import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//Import Images
import Moment from "moment";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { BlogFeaturedPostData } = this.props;
    return (
      <>
        {/* ===============  Blog area start =============== */}
        <div className="blog-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-30">
                  <h5>Latest Blog</h5>
                  <h2>Stay Updated And new post our Blog</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {BlogFeaturedPostData
                ? BlogFeaturedPostData.slice(0, 3).map((item) => {
                    return (
                      <>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft animated"
                          data-wow-duration="1500ms"
                          data-wow-delay="0ms"
                        >
                          <div className="blog-card">
                            <div className="blog-img">
                              <img
                                src={item.headerImgUrl}
                                alt={item.imgDescription}
                                className="img-fluid-height-width"
                              />
                              <div className="blog-date">
                                <i className="flaticon-calendar" />{" "}
                                {Moment(item.updatedDt).format("d MMM, YYYY")}
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
                                    `${process.env.PUBLIC_URL}/tourist/place/` +
                                    item.slugUrl.replace("tourist/places/", ""),
                                }}
                                className="blog-title"
                              >
                                {item.title}
                              </Link>
                              <div className="blog-btn">
                                <Link
                                  to={{
                                    pathname:
                                      `${process.env.PUBLIC_URL}/tourist/place/` +
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
        </div>
        {/* ===============  Blog area end =============== */}
      </>
    );
  }
}

export default Blog;
