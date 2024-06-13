import React, { useEffect, useState } from "react";
import "./AvailableCars.css";
// import HomeDivCarCard from "./HomeDivCarCard/HomeDivCarCard";
import Box from "@mui/material/Box";
// import { getCarsIsFeaturedList } from '../../AaxiosApiListener/ApiListener';
// import { generateToken } from '../../AaxiosApiListener/GenerateToken';
import Car1 from "../../../assets/images/cars/Car1.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableCarData } from "../../../Actions/AvailableCar.action";
function AvailableCars() {
  const dispatch = useDispatch();
  const carsIsFratured = useSelector(
    (state) => state.availableCarReducer.carsIsFratured
  );
  console.log(carsIsFratured);
  useEffect(() => {
    dispatch(getAvailableCarData());
  }, []);
  return (
    <div>
      <section className="rn-section rn-section-light-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-section-title  rn-title-bg-color-white ">
                <h2 className="rn-title">Available Cars</h2>
                <h5 className="rn-title-p">
                  Choose your car that best fit for your trip
                </h5>
                <span className="rn-title-bg">Most Popular Cars</span>
              </div>
            </div>
          </div>
          <Box className="boxs" sx={{ flexGrow: 1 }}>
            <Card className="HomeCardDiv">
              <div className="rn-car-search-item">
                <CardMedia
                  className="HomeCardMedia"
                  image={Car1}
                  width="%"
                  height="100%"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    marginTop="10px"
                    fontSize="22px"
                    fontWeight="500"
                    fontFamily="Poppins, sans-serif"
                    color="#112E3B"
                  >
                    Maruti Suzuki Swift Dzire
                  </Typography>
                  <Typography
                    className="HomecardTypography"
                    component="span"
                    variant="body2"
                  >
                    <div className="Hometextallin">
                      <samp className="HomeIcon">
                        <i className="fa fa-users"></i> 5 Passengers
                      </samp>
                      <samp className="HomeIcon">
                        <i className="fa fa-suitcase"></i> 4 Luggages
                      </samp>
                      <samp className="HomeIcon">
                        <i className="fa fa-gas-pump"></i> Petrol
                      </samp>
                      <samp className="HomeIcon">
                        <i className="fa fa-solid fa-fan"></i> A.C.
                      </samp>
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="HomeCardCardActions">
                    <div className="HomeFromKM">
                      <span className="HomeRupyecolor">₹12</span>
                      <span className="Fromcolor">/KM</span>
                    </div>
                    <button className="Availabcarbtn">Book Now</button>
                  </div>
                </CardActions>
              </div>
            </Card>
          </Box>

          {/* <Box className="boxs" sx={{ flexGrow: 1 }}>
              {carsIsFratured.map((cars) => (
                <HomeDivCarCard key={cars.rentalCarId} cars={cars} />
              ))}
            </Box> */}
        </div>
      </section>
    </div>
  );
}

export default AvailableCars;
