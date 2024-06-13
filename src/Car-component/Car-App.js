import React from 'react';
import Navbar from './Car-Navbar/Navbar';
import './Car-App.css';
import {
  BrowserRouter,Routes,Route,
  Outlet,
} from "react-router-dom";
import Home from './Home-page-components/Home';
import About from './Home-page-components/AboutMe/AboutMe';
// import Services from './pages/services';
// import Contact from './pages/contact';
// import TourPackage from './pages/TourPackage';
// import TourPackageDetail from './pages/TourPackageDetail';
// import Blog from './pages/blog';
// import BlogDetail from './pages/blogdetail';
import Cars from './Car-Page/Cars';
import Toolbar from './Car-Toolbar/Toolbar';
// import PrivacyPolicy from './pages/PrivacyPolicy'
// import RefundPolicy from './pages/RefundPolicy'
// import FindCars from './pages/findCars';
// import VendorRegister from './pages/VendorRegister'
// import VenderDetail from './pages/venderDetail/VenderDetail';
// import Reset from  './admin/Reset'
// import ResetComp from './admin/ResetComp';
// import Nopage from './pages/Nopage';
// import Sidebar from './admin/sidebar/Sidebar';
// import User from './admin/User/User';
// import SignIn from './admin/SignIn';
// import AddArtical from './admin/AddArtical';
// import Protected from './admin/Protected';
// import AddTourpackage from './admin/AddTourpackage';
// import ArticalFeatured from './admin/artical/ArticalFeatured';
// import ArticalDraft from './admin/artical/ArticalDraft';
// import ArticleEdit from './admin/artical/ArticleEdit';
// import ArticalPublish from './admin/artical/ArticalPublish';
// import TourpackageDraft from './admin/tourpackage/TourpackageDraft';
// import EditTourpackage from "./admin/tourpackage/EditTourpackage"
// import AddRentalCar from './admin/rentalCar/AddRentalCar';
// import Tourpackagepublished from './admin/tourpackage/Tourpackagepublished';
// import TourpackageFeatured from './admin/tourpackage/TourpackageFeatured';
// import CarModal from './admin/rentalCar/CarModal';
// import RentalCarBooking from './admin/rentalCarBooking/RentalCarBooking';
// import BookingReport from './admin/rentalCarBooking/BookingReport';
// import RentalCarBookingEdit from './admin/rentalCarBooking/RentalCarBookingEdit';
// import AddTouristPlaces from './admin/touristPlaces/AddTouristPlaces';

function CarApp() {
  return (
    <>
      {/* <Toolbar/>
      <Navbar/>
      <Outlet/> */}
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path='/CarCars' element={<Cars/>} />
        </Route>
      </Routes>
     
    </>
  );
}

export default CarApp;


// export  const router = createBrowserRouter([
//  { 
//     path : "/admin/login",
//     element : <SignIn/>,
//     errorElement : <Nopage/>,
//  },
//  {
//   path : "/user/reset-password",
//   element : <ResetComp/>,
//   errorElement : <Nopage/>,
// },

// {
//   path: "/admin/Reset",
//   element : <Reset/>,
//   errorElement : <Nopage/>,
// },
 
    // {
    //     path : "/",
    //     element: <CarApp/>,
    //     // errorElement : <Nopage/>,

    //     children : [
    //         {
    //           path : "/",
    //           element : <Home/>
    //         },
    //         {
                
    //           path :'/car-rental/cars',
    //           element : <Cars/>
    //         },
  
            // {
                
            //         path :'/about-us',
            //         element : <About/>
            // },
            // {
                
            //         path :'/service',
            //         element : <Services/>
            // },
            // {
                
            //         path :'/contact-us',
            //         element : <Contact/>
            // },
            // {
                
            //         path :'/tour-packages',
            //         element : <TourPackage/>
            // },
            // {
                
            //         path :'/tour-package/:type',
            //         element : <TourPackageDetail/>
            // },
            // {
                
            //         path :'/blogs',
            //         element : <Blog/>
            // },
            // {
                
            //         path :'/blog/:type',
            //         element : <BlogDetail/>
            // },
            
            // {
                
            //         path :'/cars-search',
            //         element : <FindCars/>
            // },
            // {
                
            //         path :'/privacy-policy',
            //         element : <PrivacyPolicy/>
            // },
            // {
            //         path : "/refund-policy" ,
            //         element : <RefundPolicy/>
            // },
            // {
            //         path : "/Vendor-Register" ,
            //         element : <VendorRegister/>
            // },
            // {
            //         path : "/vendor",
            //         element : <VenderDetail/>
            // }
            // ,
       

    //     ],
    // },
    // {
    //     path : "/sidebar",
    //     element :(<Protected>
    //                <Sidebar/>
    //               </Protected>
    //              ),
    //            errorElement : <Nopage/>,

    //     children: [
          
    //       {
    //         path : "/sidebar",
    //         element : <User/>
    //       },
    //       {
    //         path: "/sidebar/admin/article/create",
    //         element : <AddArtical/>
    //       },
    //       {
    //         path: "/sidebar/admin/article/edit/:title",
    //         element : <ArticleEdit/>
    //       },
    //       {
    //         path: "/sidebar/admin/tour/package/create",
    //         element : <AddTourpackage/>
    //       },
    //       {
    //         path: "/sidebar/admin/article/featured",
    //         element : <ArticalFeatured/>
    //       },
    //       {
    //         path: "/sidebar/admin/article/draft",
    //         element : <ArticalDraft/>
    //       },
    //       {
    //         path: "/sidebar/admin/article/published",
    //         element : <ArticalPublish/>
    //       },
    //       {
    //         path: "/sidebar/admin/tour/package/draft",
    //         element : <TourpackageDraft/>
    //       },
    //       {
    //         path: "/sidebar/admin/Tourpackage/edit/:title",
    //         element : <EditTourpackage/>
    //       },
    //       {
    //         path: "/sidebar/admin/rental/car/create",
    //         element : <AddRentalCar/>
    //       },
    //       {
    //         path: "/sidebar/admin/tour/package/published",
    //         element : <Tourpackagepublished/>
    //       },
    //       {
    //         path: "/sidebar/admin/tour/package/featured",
    //         element : <TourpackageFeatured/>
    //       },
    //       {
    //         path: "/sidebar/admin/car/model/create",
    //         element : <CarModal/>
    //       },
    //       {
    //         path: "/sidebar/admin/rental/car/booking",
    //         element : <RentalCarBooking/>
    //       },
    //       {
    //         path: "/sidebar/admin/rental/car/booking/bookingReport",
    //         element : <BookingReport/>
    //       },
    //       {
    //         path: "/sidebar/admin/rental/car/booking/RentalCarBookingEdit",
    //         element : <RentalCarBookingEdit/>
    //       },
    //       {
    //         path: "/sidebar/admin/tourist/places/add",
    //         element : <AddTouristPlaces/>
    //       },
    //     ]
    // },

    
// ]);