import React, { useEffect, useState } from "react";
// import logo from "../ImagesFile/alx-logo.png"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./SignIn.css"

const ResetComp = () => {
     
    const [formData ,setFormData]  = useState({
      email: ""
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
  useEffect(()=>{
      
    
  },[formData])
    
    return (
      <div className="topContainer">
        {/* left side */}
       <div className="leftContainer">
        {/* <img className="logostyle" src={logo} alt="Alxtrip" /> */}
       <h2 className="alx_style">Alx<span className="trip_style">Trip</span></h2>
        <h3 className="headdingstyle">A few clicks away from Login into your AlxTrip Account</h3>
        <p className="paragraphstyle">Login into your account by entering the details</p>
      </div>
   {/* rigth side */}
        <div className="rigthContainer">
        {/* <span class="lnr lnr-chevron-left-circle"></span> */}
            <Link to = "/admin/login" className ="backToLoginbox">
              <span class="lnr lnr-chevron-left-circle"></span>
            <span className="backToLoginbtn">Back to login</span></Link>
            <h1 className="rigthContainerheaddingstyle">Forgot your password</h1>
          <p className="rigthContainerparagraphstyle">send a link to your email to rest your password</p>
          <form onSubmit={handleSubmit}>
  
            <div className="rightdivemail parentdiv"  >
            <label  className="labels" htmlFor="email">Email ID</label>
              <input
                onChange={handleOnChange}
                id="email"
                required
                name="email"
                placeholder="Enter email Id"
                type="text"
                className="inputfiled"
              />
              
            </div>
             
          <input className="loginbutton" type="submit" value="Send Reset Link" />
  
          </form>
        </div>
      </div>
    );
}

export default ResetComp
