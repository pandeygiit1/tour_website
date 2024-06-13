import React, { useEffect, useState } from "react";
import "./PopularTour.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Package1 from "./Package/Package1";
// import { getTourPackageIsFeaturedList } from '../../AaxiosApiListener/ApiListener';
// import { generateToken } from '../../AaxiosApiListener/GenerateToken';
import Rajasthan from "../../../assets/images/Rajasthan.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getPopularTour } from "../../../Actions/CarPopularTour.action";
function PopularTour() {
  const dispatch = useDispatch();
  const tourPackage = useSelector(
    (state) => state.CarPopularTourReducer.tourPackage
  );
  useEffect(() => {
    dispatch(getPopularTour());
  }, []);

  return (
    <div>
      <section className="Popular-section">
        <div className="Popularcontainer">
          <div className="Popular-section-title">
            <h6 className="Popular-title">Popular Tour Package</h6>
            <h5 className="Popular-title-h5">
              Experience the royalty of Rajasthan on a tour with your family.
              Known for its rich history and regal heritage, Rajasthan continues
              to exude a grandeur that is unparalleled. Embark on a journey to
              explore the royal state and indulge in its majestic charm.
            </h5>
            <span className="Popular-title-bg">Popular Tour Package</span>
          </div>
          <div className="popular-row">
            <div className="Popular-col-lg-12"></div>
          </div>

          <Card className="TourCards" style={{ backgroundColor: "#FFFFFF" }}>
            <Link
              className="PackageCardLink"
              to={{ pathname: "/tour-package/" + tourPackage.slugUrl }}
            >
              <CardMedia
                className="TourCardMedia"
                sx={{
                  height: "220px",
                  width: "100%",
                  backgroundSize: "100% 100%",
                  overflow: "hidden",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                image={Rajasthan}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  align="center"
                  fontSize="20px"
                  fontWeight="520"
                  fontFamily="Poppins, sans-serif"
                  color="#112E3B"
                >
                  4 Night 5 Days Udaipur-Mount Abu Tour Package
                </Typography>
              </CardContent>
            </Link>
            <CardActions>
              <div className="Tourcallbuttonpackagediv">
                <button className="Availabcarbtn">Book Now</button>
              </div>
            </CardActions>
          </Card>
          {/* <Box sx={{flexGrow: 1,display:'flex',flexWrap: 'wrap', alignItems: 'center'}}>
                            <Grid
                                container
                                spacing={3}
                                className='box'
                                justify="center"
                                position={'relative'}
                                minHeight={1}
                                paddingRight={-11}
                                paddingLeft={-11}
                                padding={6}
                                display= 'flex'  
                                flexGrow={0}
                                alignItems='center'
                              >
                                {
                                    tourPackage.map((tourPackage) => (
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Package1 key={tourPackage.slugUrl} tourPackage={tourPackage} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box> */}
        </div>
      </section>
    </div>
  );
}

export default PopularTour;
