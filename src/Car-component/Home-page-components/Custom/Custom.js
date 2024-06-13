import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Custom.css";
import "./Button.css";
import { Link } from "react-router-dom";

function Custom() {
  return (
    <div>
      <Slider className="slider" autoplay={3000}>
        <div className="sliderContent-1">
          <div className="inner">
            <h1>Top-notch Car Rental Services in various cities of India</h1>
            <p>We provide car rental services to any city in India.</p>
            <Link to="/cars">
              <button className="btn">Book Now</button>
            </Link>
          </div>
        </div>
        <div className="sliderContent-2">
          <div className="inner">
            <h2>Let us assist you in planning your Travel Itinerary</h2>
            <p>
              Take a look at our selection of travel packages and plan your
              travel itinerary with us.
            </p>
            <Link to="/tour-packages">
              <button className="btn">Book Now</button>
            </Link>
          </div>
        </div>
        <div className="sliderContent-3">
          <div className="inner">
            <h2>Organize your Events with Our Travel Assistance</h2>
            <p>Rent Cars from us for your Special Occasions and Weddings.</p>
            <Link to="/contact-us">
              <button className="btn">Book Now</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Custom;
