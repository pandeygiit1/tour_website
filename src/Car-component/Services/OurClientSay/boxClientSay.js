import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../OfferService/OfferService.css";
const content = [
  {
    title: "Surabhi Jain",
    description:
      "I was pleasantly surprised by the clean and hygienic car that was provided for my trip. The services exceeded my expectations and I am truly impressed",
  },
  {
    title: "Riddhima Shah",
    description:
      "They offer great tour packages that make traveling both convenient and budget-friendly. My trip to Gujarat with them was truly unforgettable.",
  },
  {
    title: "Praveen Dubey",
    description:
      "Their services are top-notch and the booking process is effortless. They prioritize cleanliness during the trip and consistently deliver exceptional services.",
  },
];

function Custom() {
  return (
    <div>
      <Slider className="Service-boxslider" autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="Service-boxslider-Content"
            style={{ background: "#fffffff" }}
          >
            <div className="inner">
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <i className="fasb fas fa-star"></i>
              <i className="fasb fas fa-star"></i>
              <i className="fasb fas fa-star"></i>
              <i className="fasb fas fa-star"></i>
              <i className="fasb fas fa-star"></i>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Custom;
