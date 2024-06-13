import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/images/service/ALXTRIPLOGO.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-row">
          <div className="containerrowmd4">
            <div className="AboutUsSection">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <p className="paregraffooter">
                Are you looking for reliable and affordable rental car services
                in India to meet your travel needs? Look no further! We've
                handpicked a range of top-rated car rental services that
                guarantee comfortable and dependable transportation throughout
                your journey.
              </p>
              <ul className="ullinkfooter">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100085906783783">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/alxtrip2022?t=PfsoF0DtTABvrKzZKI5VSA&amp;s=09">
                    {" "}
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/alxtrip.online?igshid=YzU1NGVlODEzOA==">
                    {" "}
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/alxtrip/">
                    {" "}
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="containerrowmd4">
            <div className="AboutUsSectionLink">
              <h2 className="titlefooterh">Quick Links</h2>
              <div>
                <div className="rn-widget-content-LinK">
                  <div className="col-66666">
                    <ul>
                      <li>
                        <Link to="/about-us"> About Us </Link>
                      </li>
                      <li>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/service">Service</Link>
                      </li>
                      <li>
                        <Link to="/blogs">Blogs</Link>
                      </li>
                      <li>
                        <Link to="/cars">Book Now</Link>
                      </li>
                      <li>
                        <Link to="/vendor">vender-details</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-66666">
                    <ul>
                      <li>
                        <Link to="Vendor-Register">Join Our Team</Link>
                      </li>
                      <li>
                        <Link to="/cars">Cars</Link>
                      </li>
                      <li>
                        <Link to="/cars">Book Now</Link>
                      </li>
                      <li>
                        <Link to="/Car/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/Car/refund-policy">Refund Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="containerrowmd4">
            <div className="AboutUsSectioninfo">
              <h2 className="titlefooterh">Contact Us</h2>
              <div className="rn-widget-content-LinK">
                <div className="col-66666">
                  <ul>
                    <div>
                      <a href="tel:919602646089">
                        <i className="lnr lnr-phone"></i>+ 91-9602646089
                      </a>
                    </div>
                    <div>
                      <a href="tel:919571144478">
                        <i className="lnr lnr-phone"></i>+ 91-9571144478
                      </a>
                    </div>
                    <div>
                      <a href="mailto:ajay.kumar@algodox.co.in">
                        <i className="lnr lnr-envelope"></i>{" "}
                        ajay.kumar@algodox.co.in
                      </a>
                    </div>
                    <li>
                      <i className="lnr lnr-map-marker"></i>605, SGH, Vaishali
                      Nagar, Jaipur, India
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rn-footer-copyright">
        <div className="container">
          <div className="align-items-center">
            <div className="col-66666">
              <p>Copyright © AlgoDox Technology 2023. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
