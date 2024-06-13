import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Image LightBox
import SimpleReactLightbox from "simple-react-lightbox";

//Layout default import from components.
import MainLayout from "./components/layouts/main";
import MainTwoLayout from "./components/layouts/main-two";

//Import wrapping layout
// import Layout from "./components/app";

//Import all page from components
import AboutUs from "./components/pages/about-us/AboutUs";
// import destinations                     from "./components/pages/destinations/Destinations";
import Packages from "./components/pages/package/Packages";
import ContactUs from "./components/pages/contact/Contact";
import Faq from "./components/pages/faq/Faq";
import Error from "./components/pages/404/404";
import GuideComponent from "./components/pages/guide/GuideComponent";
import GalleryComponent from "./components/pages/gallary/GalleryComponent";
import PackageSidebar from "./components/pages/package/PackageSidebar";
// import packageStandard                  from "./components/pages/package/PackageStanderd";
import PackageDetails from "./components/pages/package/PackageDetails";
import BlogComponent from "./components/pages/blog/BlogComponent";
import BlogSidebar from "./components/pages/blog/BlogSidebar";
// import blogStandard                     from "./components/pages/blog/BlogStandard";
import BlogDetails from "./components/pages/blog/BlogDetails";
// import CarApp                          from "./Car-component/Car-App";

//Initializations All Css
import "./index.css";
import "./index.scss";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

import Cars from "./Car-component/Car-Page/Cars";
import Navbar from "./Car-component/Car-Navbar/Navbar";
import Home from "./Car-component/Home-page-components/Home";
import Headers from "./components/common/headers";
import Services from "./Car-component/Services/Service";
import RefundPolicy from "./Car-component/Services/Policies/RefundPolicy";
import PrivacyPolicy from "./Car-component/Services/Policies/PrivacyPolicy";
import VendorRegister from "./Car-component/VendorRegister/VendorRegister";
import Sidebar from "./ADMIN PANEL/sidebar/Sidebar";
import User from "./ADMIN PANEL/sidebar/sidebarComponent/home/user";
import AddArtical from "./ADMIN PANEL/sidebar/sidebarComponent/artical/AddArtical";
import ArticleEdit from "./ADMIN PANEL/sidebar/sidebarComponent/artical/ArticleEdit";
import ArticalFeatured from "./ADMIN PANEL/sidebar/sidebarComponent/artical/ArticalFeatured";
import ArticalDraft from "./ADMIN PANEL/sidebar/sidebarComponent/artical/ArticalDraft";
import ArticalPublish from "./ADMIN PANEL/sidebar/sidebarComponent/artical/ArticalPublish";
import AddTourpackage from "./ADMIN PANEL/sidebar/sidebarComponent/touristPlaces/tourpackage/AddTourpackage";
import TourpackageDraft from "./ADMIN PANEL/sidebar/sidebarComponent/touristPlaces/tourpackage/TourpackageDraft";
import Tourpackagepublished from "./ADMIN PANEL/sidebar/sidebarComponent/touristPlaces/tourpackage/Tourpackagepublished";
import TourpackageFeatured from "./ADMIN PANEL/sidebar/sidebarComponent/touristPlaces/tourpackage/TourpackageFeatured";
import CarModal from "./ADMIN PANEL/sidebar/sidebarComponent/rentalCar/CarModal";
import RentalCarBooking from "./ADMIN PANEL/sidebar/sidebarComponent/rentalCarBooking/RentalCarBooking";
import BookingReport from "./ADMIN PANEL/sidebar/sidebarComponent/rentalCarBooking/BookingReport";
import RentalCarBookingEdit from "./ADMIN PANEL/sidebar/sidebarComponent/rentalCarBooking/RentalCarBookingEdit";
import AddTouristPlaces from "./ADMIN PANEL/sidebar/sidebarComponent/touristPlaces/AddTouristPlaces";
import AddRentalCar from "./ADMIN PANEL/sidebar/sidebarComponent/rentalCar/AddRentalCar";
import SignIn from "./ADMIN PANEL/sidebar/sidebarComponent/SignIn";
import TourPrivacyPolicy from "./components/pages/TourPolicies/TourPrivacypolicy";
import TourRefundPolicy from "./components/pages/TourPolicies/TourRefundPolicy";
import Dashboard from "./ADMIN PANEL/sidebar/sidebarComponent/dashboard/dashboard";
import PackageByLocation from "./components/pages/package/PackageByLocation";
import TouristPlaceDetails from "./components/pages/blog/TouristPlaceDetails";
//Default Warniing Error Hide
console.log = console.warn = console.error = () => {};

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

/*
 * Version : 0.1
 * Event : Rendering all content to web.
 * Actions: Define all routes and page.
 * @return html
 * */

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={"/"}>
          <Routes>
            {/*========================== Car-Routing================================================ */}
            <Route path="/car-rental" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/car-rental/available-cars" element={<Cars />} />
              <Route path="/car-rental/services" element={<Services />} />
              <Route
                path="/car-rental/refund-policy"
                element={<RefundPolicy />}
              />
              <Route
                path="/car-rental/privacy-policy"
                element={<PrivacyPolicy />}
              />
              <Route
                path="/car-rental/vendor-register"
                element={<VendorRegister />}
              />
            </Route>

            {/*========================== Tour-Routing================================================ */}
            <Route path="/" element={<Headers />}>
              <Route index element={<MainLayout />} />
              <Route
                path={`${process.env.PUBLIC_URL}/about-us`}
                element={<AboutUs />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/tour-package`}
                element={<PackageSidebar />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/tour-package/:type`}
                element={<PackageDetails />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/tourist-place`}
                element={<BlogSidebar />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/tourist-place/:type`}
                element={<BlogDetails />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/tourist-place-detail/:type`}
                element={<TouristPlaceDetails />}
              />
              <Route path={`${process.env.PUBLIC_URL}/faq`} element={<Faq />} />
              <Route
                path={`${process.env.PUBLIC_URL}/404`}
                element={<Error />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/contact-us`}
                element={<ContactUs />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/privacy-policy`}
                element={<TourPrivacyPolicy />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/refund-policy`}
                element={<TourRefundPolicy />}
              />
              <Route
                path="/register-travel-agent"
                element={<VendorRegister />}
              />
              <Route
                path="/tour-package/location"
                element={<PackageByLocation />}
              />
            </Route>

            {/*========================== Admin-Panel-Routing================================================ */}
            <Route path="/admin/login" element={<SignIn />} />
            <Route path="/admin" element={<Sidebar />}>
              <Route index element={<Dashboard />} />{" "}
              <Route path="/admin/article/create" element={<AddArtical />} />
              <Route
                path="/admin/article/edit/:title"
                element={<ArticleEdit />}
              />
              <Route
                path="/admin/tour-package/create"
                element={<AddTourpackage />}
              />
              <Route
                path="/admin/article/featured"
                element={<ArticalFeatured />}
              />
              <Route path="/admin/article/draft" element={<ArticalDraft />} />
              <Route
                path="/admin/article/published"
                element={<ArticalPublish />}
              />
              <Route
                path="/admin/tour-package/draft"
                element={<TourpackageDraft />}
              />
              <Route
                path="/admin/Tourpackage/edit/:title"
                element={<AddTourpackage />}
              />
              <Route
                path="/admin/car-rental/create"
                element={<AddRentalCar />}
              />
              <Route
                path="/admin/tour-package/published"
                element={<Tourpackagepublished />}
              />
              <Route
                path="/admin/tour-package/featured"
                element={<TourpackageFeatured />}
              />
              <Route path="/admin/car/model/create" element={<CarModal />} />
              <Route
                path="/admin/rental/car/booking"
                element={<RentalCarBooking />}
              />
              <Route
                path="/admin/rental/car/booking/bookingReport"
                element={<BookingReport />}
              />
              <Route
                path="/admin/rental/car/booking/RentalCarBookingEdit"
                element={<RentalCarBookingEdit />}
              />
              <Route
                path="/admin/tourist/places/add"
                element={<AddTouristPlaces />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Root />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
