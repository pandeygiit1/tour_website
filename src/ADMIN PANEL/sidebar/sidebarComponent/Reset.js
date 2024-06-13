import React, { useState } from "react";
// import logo from "../ImagesFile/alx-logo.png"
import { Link } from "react-router-dom";
import "./SignIn.css"
import {IoChevronBackCircleOutline} from "react-icons/io5"

const Reset = () => {

    const [formData ,setFormData]  = useState({
      email : "",
      password : ""
    })
    
    const handleOnChange = (e)=>{
      setFormData((prevData)=>( {
          ...prevData , [e.target.name] : e.target.value
          })
      )
    }
  
    const handleSubmit=(e)=>{
      e.preventDefault();
     console.log("formData" , formData)
    }
  
    return (
      <div className="topContainer">

        {/* left  section */}

        <div className="leftContainer">
        <h2 className="alx_style">Alx<span className="trip_style">Trip</span></h2>
          <h3>Change securely!</h3>
          <p className="paragraphstyle">Change your account password and make your self more securely Alxtrip Admin Panel.</p>
        </div>
  
          {/* rigth section  */}

        <div className="rigthContainer">
          <Link to = "/admin/login" className = "forgotpassword"> <IoChevronBackCircleOutline className="forgotpassword"/> Back to login</Link>
          <h1>Forgot your password</h1>
          <p className="rigthparagraphstyle">send a link to your email to reset your password</p>
          <form onSubmit={handleSubmit}>
  
            <div className="rightdivemail">
              <label className="labels" htmlFor="email">Email ID</label>
              <input
                onChange={handleOnChange}
                id="email"
                name="email"
                required
                placeholder="Enter Email Id"
                type="email"
                className="inputfiled"
              />
            </div>
  
            <input className="loginbutton" type="submit" value="Send Reset Link" />
  
          </form>
        </div>
      </div>
    )
}

export default Reset
