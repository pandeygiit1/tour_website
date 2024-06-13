import React, { useEffect, useState } from "react";
import "../Home-page-components/Home.css";
import style from "./VendorRegister.module.css";
import Footer from "../Home-page-components/Footer/Footer";
import VendorRegistarForm from "./VendorRegisterForm/VendorRegistorForm";
import { Helmet } from "react-helmet";

const VendorRegister = () => {
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
        <title>
          Vendor Register | Partner with Us for Travel Excellence | AlxTrip
        </title>
        <meta
          name="description"
          content="Become a valued partner in the world of travel excellence. Register as a vendor with ALXtrip.online and join us in creating memorable journeys for our clients."
        />
        <link rel="canonical" href="https://alxtrip.online/Vendor-Register" />
      </Helmet>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <div className={style.Aboutimage}>
            <h1 className={style.h2Aboutnames}>Vendor Sign up</h1>
            <p className={style.p2Aboutnames}>
              Join our platform now to unlock unlimited booking opportunities
              and maximize your profit potential.
            </p>
          </div>
          <div style={{ backgroundColor: "#fefefe", padding: "30px" }}>
            <VendorRegistarForm />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default VendorRegister;
