import React, { Component } from "react";
import { Link } from "react-router-dom";
import { saveContactData } from "../../../Actions/ContactUs.action";
import SweetAlert2 from "react-sweetalert2";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        emailId: "",
        mobNumber: "",
        subject: "",
        message: "",
      },
    };
  }
  componentDidMount() {
    this.scrollTop();
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log("Form submitted with data:", this.state.formData);
    const stJwtToken = localStorage.getItem("NewToken");
    try {
      saveContactData(this.state.formData, stJwtToken)
        .then((data) => {
          if (data) {
            this.setState({
              swalProps: {
                show: true,
                title: "Thank you!",
                text: "We have recieved your details. Our representative will contact you soon.",
              },
            });
          }
          console.log(this.state.swalProps);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      alert(e);
    }
  };

  render() {
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>Contact US</h2>
                  <ul className="breadcrumb-links">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                      <i className="bx bx-chevron-right" />
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        <div className="contact-wrapper pt-90">
          <div className="contact-cards">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-arrival" />
                    </div>
                    <div className="contact-info">
                      <h5>Address</h5>
                      <p>605, SGH, Vaishali Nagar, Jaipur, India</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-customer-service" />
                    </div>
                    <div className="contact-info">
                      <h5>Email &amp; Phone</h5>
                      <p>(+91) 9571144478</p>
                      <p>care@alxtrip.online</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-thumbs-up" />
                    </div>
                    <div className="contact-info">
                      <h5>Social Media</h5>
                      <ul className="contact-icons">
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxl-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxl-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxl-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxl-whatsapp" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="contact-inputs pt-100">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-details">
                    <h5 className="contact-d-head">Get In Touch</h5>
                    <p>
                      Suspendisse dolor risus, congue ac diam id, viverra
                      facilisis dolor. Cras nec purus sagittis, varius tortor
                      at, maximus erat. Sed at tellus id tellus lobortis dictum.
                      Mauris dignissim, turpis vitae ullamcorper fermentum,
                      sapien arcu aliquam arcu, in viverra quam est ac ex. Cras
                      sed lectus eu.
                    </p>
                    <ul className="office-clock">
                      <li>
                        <div className="clock-icon">
                          <i className="flaticon-clock-1" />
                        </div>
                        <div className="clock-info">
                          <h5>Open Hour</h5>
                          <p>
                            Mon - Sat At <br /> 09.00Am to 10.00PM
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="clock-icon">
                          <i className="flaticon-clock-1" />
                        </div>
                        <div className="clock-info">
                          <h5>Close Hour</h5>
                          <p>Sunday Office Close</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-form">
                    <form onSubmit={this.handleSubmit}>
                      <h5 className="contact-d-head">Contact Us</h5>
                      <div className="row">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="email"
                            name="emailId"
                            placeholder="Your Email"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            name="mobNumber"
                            placeholder="Phone"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                        <div className="col-lg-12">
                          <textarea
                            name="message"
                            cols={30}
                            rows={7}
                            placeholder="Write Message"
                            defaultValue={""}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="col-lg-12">
                          <button type="submit" class="submit-button">
                            Submit
                          </button>
                        </div>
                        <SweetAlert2 {...this.state.swalProps} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
