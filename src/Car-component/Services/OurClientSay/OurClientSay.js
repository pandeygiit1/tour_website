import React from "react";
import "../OfferService/OfferService.css";
import Custom from "./boxClientSay";

function OurClientSay() {
  return (
    <div>
      <section className="Popular-Offer-section">
        <div className="Popular-Offer-container">
          <div className="Popular-Offer-section-title">
            <h6 className="Popular-Offer-title">What Our Client Say</h6>
            <span className="Popular-Offer-title-bg">Client Review</span>
          </div>
        </div>
        <Custom />
      </section>
    </div>
  );
}

export default OurClientSay;
