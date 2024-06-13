import React, { useEffect, useState } from "react";
import Custom from "./Custom/Custom";
import Footer from "./Footer/Footer";
import SearchCar from "./SearchCar/SearchCar";
import AboutMe from "./AboutMe/AboutMe";
import AvailableCars from "./AvailableCars/AvailableCars";
import PopularTour from "./PopularTours/PopularTour";
import NewsAndUpdates from "./NewsAndUpdates/NewsAndUpdates";
import { Helmet } from "react-helmet";
import "./Home.css";
import ReactGA from "react-ga";
ReactGA.initialize("G-ZVMTS8YMF2");

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Car Rental Services at affordable prices in Jaipur Rajasthan | ALXTrip{" "}
        </title>
        <meta
          name="description"
          content="Experience convenient airport pickup and drop services in Rajasthan with ALXTrip. Reliable, comfortable, and timely transportation for a memorable journey. Book now! "
        />
        <meta
          name="keywords"
          content="Rent Cars for Events in Jaipur, Airport pickup and drop services Jaipur, Online car rental jaipur, car on rent in jaipur, car hire in jaipur, hire a car in jaipur, rent a car in jaipur, jaipur car hire"
        />
        <link rel="canonical" href="https://alxtrip.online" />
      </Helmet>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <Custom />
          <SearchCar />
          <div className="section-line"></div>
          <AboutMe />
          <AvailableCars />
          <PopularTour />
          <NewsAndUpdates />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
