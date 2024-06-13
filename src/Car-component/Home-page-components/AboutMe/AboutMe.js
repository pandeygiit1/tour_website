import React from "react";
import style from "./AboutMe.module.css";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div id={style["car-rental-module"]}>
      <section className={style["rn-bg"]}>
        <div>
          <div className={style["rn-section-title"]}>
            <h2>Why People Like Us?</h2>
          </div>

          <div className={style.row}>
            <div className={style["col-lg-3"]}>
              <div className={style["rn-dot-feature"]}>
                <div className={style["rn-the-dot"]}></div>
                <div className={style["rn-dot-feature-info"]}>
                  <h3>Best Price Guarantee</h3>
                  <p>
                    We strive to deliver superior services to our valued
                    customers while keeping our prices competitive and
                    reasonable. We have some fantastic deals available that
                    we're sure you'll love.
                  </p>
                </div>
              </div>
            </div>
            <div className={style["col-lg-3"]}>
              <div className={style["rn-dot-feature"]}>
                <div className={style["rn-the-dot"]}></div>
                <div className={style["rn-dot-feature-info"]}>
                  <h3>Best Quality Cars</h3>
                  <p>
                    We understand the importance of comfort and hygiene during a
                    journey, which can make the experience feel much lighter. We
                    ensures a comfortable and hygienic trip.
                  </p>
                </div>
              </div>
            </div>
            <div className={style["col-lg-3"]}>
              <div className={style["rn-dot-feature"]}>
                <div className={style["rn-the-dot"]}></div>
                <div className={style["rn-dot-feature-info"]}>
                  <h3>City to City</h3>
                  <p>
                    We are based in Jaipur, Rajasthan and offer services
                    throughout the state. Whether you're planning a trip to any
                    of the cities, we've got you covered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={style["rn-dot-feature"]}>
                <div className={style["rn-the-dot"]}></div>
                <div className={style["rn-dot-feature-info"]}>
                  <h3>Airport Pickup and Drop</h3>
                  <p>
                    We offer economical{" "}
                    <Link to="https://alxtrip.online/service">
                      {" "}
                      Airport pickup and drop services{" "}
                    </Link>{" "}
                    from any location in Jaipur City
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.row}>
            <div className={style["col-lg-3"]}>
              <div className={style["rn-dot-feature"]}>
                <div className={style["rn-the-dot"]}></div>
                <div className={style["rn-dot-feature-info"]}>
                  <h3>Rent Cars for Events</h3>
                  <p>
                    For your special occasions and weddings, choose us as your
                    car rental service.We offer a wide selection of cars to
                    accommodate any number of guests, ensuring convenience for
                    all your special events.
                  </p>
                </div>
              </div>
            </div>
            <div className={style["col-lg-3"]}>
              <div className={style["rn-dot-feature"]}>
                <div className={style["rn-the-dot"]}></div>
                <div className={style["rn-dot-feature-info"]}>
                  <h3>Tour Package</h3>
                  <p>
                    Browse through our array of travel packages and confirm your
                    travel arrangements with us.We offer pre-arranged travel
                    itineraries, and we also provide customized plans tailored
                    to your preferences and convenience.
                  </p>
                </div>
              </div>
            </div>
            <div className={style["col-lg-3"]}>
              <div className={style["rn-dot-feature"]}>
                <div className={style["rn-the-dot"]}></div>
                <div className={style["rn-dot-feature-info"]}>
                  <h3>Hygiene First</h3>
                  <p>
                    We make sure to wash and sanitize our cars thoroughly after
                    every trip. Additionally, our drivers prioritize proper
                    sanitization during the trip to ensure the safety and health
                    of our passengers.
                  </p>
                </div>
              </div>
            </div>
            <div className={style["col-lg-3"]}>
              <div className={style["rn-dot-feature"]}>
                <div className={style["rn-the-dot"]}></div>
                <div className={style["rn-dot-feature-info"]}>
                  <h3>24/7 Customer Support</h3>
                  <p>
                    We are here to serve you anytime, day or night. Simply give
                    us a call to book your car and we will deliver it right to
                    your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
