import React, { useEffect, useState } from "react";
import Footer from "../Home-page-components/Footer/Footer";
import "./Services.css";
import OfferService from "./OfferService/OfferService";
import OurClientSay from "./OurClientSay/OurClientSay";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Services = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Car Rental Services | Customized Tour Packages | ALXTrip </title>
        <meta
          name="description"
          content="Discover affordable rental car services in India for your travel needs. Explore Jaipur with hassle-free rental cars and enjoy comfortable and dependable transportation."
        />
        <meta
          name="keywords"
          content="taxi service in jaipur, cab service in jaipur, Car Rental Services in jaipur, rental car services in Jaipur "
        />
        <link rel="canonical" href="https://alxtrip.online/service" />
      </Helmet>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div id="CarRentalService">
          <div className="ServiceAboutimage">
            <h1 className="ServiceHeading">Services we Offer</h1>
            <p className="ServicePara">
              We offer top-notch car rental services to meet all your
              requirements.
            </p>
          </div>
          <OfferService />
          <div className="Service-offer-bg">
            <div className="Service-to-contact">
              <h6>Are you looking for renting your car?</h6>
              <p>
                Interested in becoming a partner with us? You can join our team
                and become an ALXian.
              </p>
              <Link to="Vendor-Register">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
          <OurClientSay />
          <hr />
          <div className="Service-plan-heading">
            <h2>Rental Car Services in Jaipur</h2>
            <div className="Service-plan-item">
              <p className="Service-plan-item-p">
                Are you planning a trip to the majestic city of Jaipur? To truly
                explore and immerse yourself in the rich cultural heritage and
                vibrant surroundings, you'll need a reliable mode of
                transportation. That's where rental car services in Jaipur come
                in. With a wide range of options available, you can choose the
                perfect vehicle to suit your needs and preferences.
                <br />
                <br />
                Whether you're traveling solo or with a group, rental car
                services in Jaipur offer convenient and hassle-free
                transportation solutions. From compact cars for those looking to
                zip around the city streets to spacious SUVs for families or
                larger groups, there's something for everyone. With competitive
                prices and flexible rental periods, you can explore the city at
                your own pace and convenience.
                <br />
                <br />
                Not only do rental car services provide the freedom to explore
                Jaipur on your terms, but they also ensure comfort and safety
                throughout your journey. Most rental car services in Jaipur
                offer well-maintained vehicles equipped with modern amenities,
                ensuring a comfortable and enjoyable travel experience.
                <br />
                <br />
                So, whether you're planning a sightseeing tour or attending
                business meetings, rental car services in Jaipur are a reliable
                and practical choice. Explore the city at your own pace and make
                the most of your visit to Jaipur.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Services;
