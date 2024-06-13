import React, { useEffect, useState } from "react";
import "./NewsAndUpdates.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import News1 from "./News/News1";
// import { getNewsAdUpdatesIsFeaturedList } from '../../AaxiosApiListener/ApiListener';
// import { generateToken } from '../../AaxiosApiListener/GenerateToken';
import explore from "../../../assets/images/Explore.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsAndUpdate } from "../../../Actions/NewsAndUpdate.action";
function NewsAndUpdates() {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.NewsAndUpdatesReducer.article);
  useEffect(() => {
    dispatch(getNewsAndUpdate());
  }, []);
  return (
    <div>
      <section className="News-section">
        <div className="Newscontainer">
          <div className="Popular-section-title">
            <h5 className="News-title">Explore Best Holiday Destinations</h5>
            <h5 className="News-title-Dece">
              Experience the royalty of Rajasthan on a tour with your family.
              Known for its rich history and regal heritage, Rajasthan continues
              to exude a grandeur that is unparalleled. Embark on a journey to
              explore the royal state and indulge in its majestic charm.
            </h5>
            <span className="Popular-title-bg">
              Explore Best Holiday Destinations
            </span>
          </div>
          <div>
            <Card className="Newscard" style={{ backgroundColor: "#fff" }}>
              <CardMedia
                sx={{
                  height: "220px",
                  width: "100%",
                  backgroundSize: "100% 100%",
                  overflow: "hidden",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                image={explore}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  align="center"
                  fontSize="20px"
                  fontWeight="520"
                  fontFamily="Poppins, sans-serif"
                  color="#112E3B"
                >
                  Unveiling the Majestic Beauty: Udaipur's Top Tourist
                  Attractions for Every Traveler
                </Typography>
              </CardContent>
              <div className="NewsCardCardActions">
                <Link
                  className="newsLink"
                  to={
                    {
                      // pathname: "/blog/" + newsAndUpdates.slugUrl,
                    }
                  }
                >
                  <button className="NewsBlogbtn">Read More</button>
                </Link>
              </div>
            </Card>
            {/* <Box sx={{flexGrow: 1,display:'flex',flexWrap: 'wrap', alignItems: 'center'}}>
                            <Grid
                                container
                                spacing={4}
                                className='box'
                                justify="center"
                                position={'relative'}
                                minHeight={1}
                                paddingRight={-11}
                                paddingLeft={-11}
                                paddnpm ing={6}
                                display= 'flex'  
                                flexGrow={0}
                                alignItems='center'
                              >
                                {   
                                    article.map((newsAndUpdates) => (
                                        <Grid item xs={12} sm={6} md={4}>
                                            <News1 key={newsAndUpdates.id} newsAndUpdates={newsAndUpdates} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsAndUpdates;
