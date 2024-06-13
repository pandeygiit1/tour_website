import React from "react";
import "./OfferService.css";
import Grid from "@mui/material/Grid"; // Grid version 1
import Box from "@mui/material/Box";
import Offer1 from "./Offer1";
import Offer2 from "./Offer2";
import Offer3 from "./Offer3";
import Offer4 from "./Offer4";
import Offer5 from "./Offer5";
import Offer6 from "./Offer6";

function PopularTour() {
  return (
    <div>
      <section className="Popular-Offer-section">
        <div className="Popular-Offer-container">
          <div className="Popular-Offer-section-title">
            <h6 className="Popular-Offer-title">What We Offer</h6>
            <span className="Popular-Offer-title-bg">What We Offer</span>
          </div>
          <div className="Offer-container">
            <div className="Offer-card-container-1">
              <div className="Offer-card">
                <Offer1 />
              </div>
              <div className="Offer-card">
                <Offer2 />
              </div>
              <div className="Offer-card">
                <Offer3 />
              </div>
              <div className="Offer-card">
                <Offer4 />
              </div>
              <div className="Offer-card">
                <Offer5 />
              </div>
              <div className="Offer-card">
                <Offer6 />
              </div>
            </div>
            {/* <Box sx={{ flexGrow: 1 }}>
              {/* <div className="Offer-card-container-1"> */}
            {/* <Grid
                  container
                  spacing={3}
                  className="Offer-box"
                  justify="center"
  > */}
            {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}>
                <Offer1 />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}>
                <Offer2 />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}>
                <Offer3 />
              </Grid> */}
            {/* </Grid> */}
            {/* </div> */}
            {/* <div className="Offer-card-container-2"> */}
            {/* <Grid container spacing={3} className="box" justify="center"> */}
            {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}>
                <Offer4 />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}>
                <Offer5 />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}>
                <Offer6 />
              </Grid> */}
            {/* </Grid> */}
            {/* </div> */}
            {/* </Box> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularTour;

//  <div className="Offer-row">
//    <div className="col-lg-12">
//      <div className="Popular-Offer-section-title">
//        <h6 className="Popular-Offer-title">What We Offer</h6>
//        <span className="Popular-Offer-title-bg">What We Offer</span>
//      </div>
//    </div>
//  </div>;
