import React, { Component } from "react";
import MainBanner from "./MainBanner";
import Packages from "./Packages";
import Destinations from "./Destinations";
import Blog from "./Blog";
import Review from "./Review";
import Achievement from "./Achievement";
import Loader from "../../../Loader/Loader";
import { connect } from "react-redux";
import withTokenHandler from "../../../globalTokenGenerated";
import {
  getPackageFeaturedPostData,
  getPackageFeaturedLocationData,
  getBlogFeaturedPostData,
} from "../../../Actions/TourFeatured.action";

const mapStateToProps = (state) => ({
  PackageFeaturedPostData: state.PackageFeaturedPostReducer.PackageFeaturedPost,
  isLoading: state.PackageFeaturedPostReducer.isLoading,
  PackageFeaturedLocationData:
    state.PackageFeaturedLocationReducer.PackageFeaturedLocation,
  BlogFeaturedPostData: state.BlogFeaturedPostReducer.BlogFeaturedPost,
});

const mapDispatchToProps = {
  getPackageFeaturedPostData,
  getPackageFeaturedLocationData,
  getBlogFeaturedPostData,
};

//Define Default Content
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
    this.props.getPackageFeaturedPostData(token).then(() => {
      this.setState({ loading: false });
    });
    this.props.getPackageFeaturedLocationData(token);
    this.props.getBlogFeaturedPostData(token);
  };

  render() {
    const { PackageFeaturedPostData } = this.props;
    console.log("PackageFeaturedPostData",PackageFeaturedPostData)
    const { PackageFeaturedLocationData } = this.props;
    console.log("PackageFeaturedLocationData",PackageFeaturedLocationData)
    const { BlogFeaturedPostData } = this.props;
    console.log("BlogFeaturedPostData",BlogFeaturedPostData)
    console.log(PackageFeaturedPostData);
    const { isLoading } = this.props;
    const { loading } = this.state;
    return (
      <>
        {!loading ? (
          <>
            <div>
              {/* Start Preloader Area */}
              {/* <div className="preloader">
          <div className="loader loader1">
            <span style={{ "--i": 1 }} />
            <span style={{ "--i": 2 }} />
            <span style={{ "--i": 3 }} />
            <span style={{ "--i": 4 }} />
            <span style={{ "--i": 5 }} />
            <span style={{ "--i": 6 }} />
            <span style={{ "--i": 7 }} />
            <span style={{ "--i": 8 }} />
            <span style={{ "--i": 9 }} />
            <span style={{ "--i": 10 }} />
            <span style={{ "--i": 11 }} />
            <span style={{ "--i": 12 }} />
            <span style={{ "--i": 13 }} />
            <span style={{ "--i": 14 }} />
            <span style={{ "--i": 15 }} />
            <span style={{ "--i": 16 }} />
            <span style={{ "--i": 17 }} />
            <span style={{ "--i": 18 }} />
            <span style={{ "--i": 19 }} />
            <span style={{ "--i": 20 }} />
            <div className="rocket" />
          </div>
        </div> */}
              {/* End Preloader Area */}

              {/*---------Start Imported All Sections-----------*/}
              <MainBanner PackageFeaturedPostData={PackageFeaturedPostData} />
              <Packages PackageFeaturedPostData={PackageFeaturedPostData} />
              <Destinations
                PackageFeaturedLocationData={PackageFeaturedLocationData}
              />
              <Achievement />
              <Review />
              {/* <Features/> */}
              <Blog BlogFeaturedPostData={BlogFeaturedPostData} />
              {/*---------End Imported All Sections-----------*/}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

const HomePageWithTokenHandler = withTokenHandler(HomePage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageWithTokenHandler);
