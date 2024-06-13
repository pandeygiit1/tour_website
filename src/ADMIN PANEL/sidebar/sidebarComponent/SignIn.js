import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate   } from "react-router-dom";
import "./SignIn.css"
// import { generateToken } from "../../../AaxiosApiListener/GenerateToken";
// import { adminLogin } from "../../../AaxiosApiListener/AdminApiListener";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { Logininfo } from "../../../Actions/AdminPanel-Actions/Login.action";



const SignIn = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const [showPassword, setShowPassword] = useState(false);
  const [formData ,setFormData]  = useState({
    emailId : "",
    password : ""
  })
  const handleOnChange = (e)=>{
    setFormData((prevData)=>( {
        ...prevData , [e.target.name] : e.target.value
        })
    )
  }

  useEffect(() => {
    // This effect will be executed after the component mounts
    // and after every render (including after navigation)
  }, [navigate]);

  const handleSubmit= async(e)=> {
      e.preventDefault();
    console.log("formData" , formData)
    
      try {
        const newRoute = await dispatch(Logininfo(formData));
        if (newRoute) {
          navigate(newRoute);
        }
        
      } catch (err) {
        console.log(err);
      }
   }

  return (
    <div className="topContainer">
      <div className="leftContainer">
        {/* <img className="logostyle" src={logo} alt="Alxtrip" /> */}
       <h2 className="alx_style">Alx<span className="trip_style">Trip</span></h2>
        <h3 className="headdingstyle">A few clicks away from Login into your AlxTrip Account</h3>
        <p className="paragraphstyle">Login into your account by entering the details</p>
      </div>

      <div className="rigthContainer">
        <h1 className="rigthContainerheaddingstyle">Login</h1>
        <p className="rigthContainerparagraphstyle">Let's get you all set up!</p>
        <form onSubmit={handleSubmit}>

          <div className="rightdivemail">
            <label className="labels" htmlFor="email">Email</label>
            <input
              onChange={handleOnChange}
              id="email"
              name="emailId"
              required
              placeholder="enter your Email"
              type="email"
              className="inputfiled"
            />
          </div>

          <div className="rightdivemail parentdiv"  >
            <label  className="labels" htmlFor="password">Password</label>
            <input
              onChange={handleOnChange}
              id="password"
              required
              name="password"
              placeholder="Enter Password"
              type={showPassword ? "text" : "password"}
              className="inputfiled"
            />
            <div onClick={() => setShowPassword(!showPassword)} className="pass_icons">
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>

          <div className="check_box">
            <div>
              <input type="checkbox" id="checkbox" />{" "}
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div>
              <Link to="/user/reset-password" className = "forgotpassword">Forgot Password?</Link>
            </div>
          </div>
          <input   className="loginbutton" type="submit" value="Login" />
          {/* <ToastContainer /> */}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
