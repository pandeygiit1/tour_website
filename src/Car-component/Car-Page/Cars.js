import React, { useEffect, useState } from "react";
// import '../Home-page-components/Home.css'
import style from "./Car.module.css";
import Footer from "../Home-page-components/Footer/Footer";
import Carlists from "./Car-lists/Car-list";
import Grid from "@mui/material/Grid"; // Grid version 1
import Card from "../Home-page-components/AvailableCars/HomeDivCarCard/HomeDivCarCard";
import Box from "@mui/material/Box";
// import { getCarsList } from '../AaxiosApiListener/ApiListener';
// import { generateToken } from '../AaxiosApiListener/GenerateToken'
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getCarsData } from "../../Actions/Cars.action";

const Cars = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [carList, setCarList] = useState([])
  //   const [page, setPage] = useState(0);
  //   const [token, setToken] = useState(null)
  const dispatch = useDispatch();
  const rentalCars = useSelector((state) => state.CarsReducer.rentalCars);

  useEffect(() => {
    dispatch(getCarsData());
  }, []);

  var currDate = new Date();

  const pickdate =
    currDate.getFullYear() +
    "-" +
    parseInt(currDate.getMonth() + 1) +
    "-" +
    currDate.getDate();
  const dropdate =
    currDate.getFullYear() +
    "-" +
    parseInt(currDate.getMonth() + 1) +
    "-" +
    currDate.getDate();
  const picktime = currDate.getHours() + ":" + currDate.getMinutes();
  const droptime = currDate.getHours() + ":" + currDate.getMinutes();
  const userData = {
    sourceCityId: "1",
    destinationCityId: "1",
    pickdate,
    picktime,
    dropdate,
    droptime,
  };

  return (
    <div>
      {/* <Helmet>
      <title>Our car list | ALXTrip</title>
      <meta name="description" content="Explore Our Fleet of Cars for a Comfortable Journey. From Maruti Suzuki to Toyota, We Have the Perfect Ride for Your Trip. Book Now and Enjoy Affordable Rates!" />
      <link rel="canonical" href='https://alxtrip.online/cars'/>
      </Helmet> */}
      {/* {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : ( */}
      <div>
        <div className={style.Aboutimage}>
          <h1 className={style.h2Aboutnames}>Our Cars</h1>
          <p className={style.p2Aboutnames}>
            Select the perfect car for your family and friends to ensure an
            enjoyable journey.
          </p>
        </div>
        <div className={style.carCard}>
          <Box className="box" sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} justify="center">
              {/* {rentalCars.map((cars) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Card cars={cars} userData={userData} />
                  
                </Grid>
              ))} */}
              <Grid item xs={12} sm={6} md={4} className={style.carCardList}>
                <Carlists />
              </Grid>
            </Grid>
          </Box>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Cars;
