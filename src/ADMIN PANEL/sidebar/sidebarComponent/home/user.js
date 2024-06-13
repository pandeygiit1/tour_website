import React, { useState, useEffect } from "react";
import "./user.css";
// import { ToastContainer, toast } from "react-toastify";
// import { generateToken } from "../../../../AaxiosApiListener/GenerateToken";
// import { addUser } from "../../../../AaxiosApiListener/AdminApiListener";

// import { FcAddImage } from "react-icons/fc";

const User = () => {
  const [inputData, setInputData] = useState({
    name: "",
    emailId: "",
    mobNo: "",
    password: "",
    userTyp: "",
    pin: ""
  });
  
  useEffect(() => {
    inputData["vendorId"] = "V" + new Date().getTime();
  }, []);
  
  const fielChanged = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    e.target.reset()
    // try {
    //     generateToken().then((resp) => {
    //         if (resp) {
    //             const token = JSON.stringify(resp.data.token);
    //             addUser(token, inputData).then((data) => {
    //                 if (data?.data?.isInsert === 'true') {
    //                   toast.success("User Save Successfully!", {
    //                     position: toast.POSITION.TOP_CENTER,
    //                   });
    //                 } if(data?.data?.isInsert === 'exists') {
    //                   toast.error("User Already Exit!", {
    //                     position: toast.POSITION.TOP_CENTER,
    //                   });
    //                 }
    //             }).catch(error => {
    //                 console.log(error)
    //             })
    //         }
    //     })
    // } catch (e) {
    //     alert(e)
    // }
}
console.log(inputData)

  return (
    <div className="usercontainer1">
      <form onSubmit={onSubmit}>
        {/* <div>
          <label className="labelcontainser">
            <input
              type="file"
              style={{display : "none"}}
              accept="image/png, image/jpg, image/gif, image/jpeg"
            />
            <span className="imageuploaddiv">
              {<FcAddImage className="imageuploadIcon" />}
            </span>
            <div className="rightcontainerheading">
              upload a profile picture
            </div>
          </label>
        </div> */}

        <div className="Generalcontainer">
          
          <input
            className="userinputfiled"
            id="name"
            name="name"
            type="name"
            placeholder="Name "
            required
            onChange={fielChanged}
            maxLength={50}
          ></input>
        </div>
        <div className="Generalcontainer">
          <input
            className="userinputfiled"
            id="emailId"
            type="email"
            placeholder="Email"
            required
            name="emailId"
            onChange={fielChanged}
            maxLength={50}
          ></input>
        </div>
        <div className="Generalcontainer">
          <input
            className="userinputfiled"
            id="mobNo"
            name="mobNo"
            type="tel"
            placeholder="Mobile No "
            required
            onChange={fielChanged}
            maxLength={10}
          ></input>
        </div>
        <div className="Generalcontainer">
          <input
            className="userinputfiled"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={fielChanged}
            maxLength={128}
          ></input>
        </div>
        <div className="Generalcontainer">
          <input
            className="userinputfiled"
            id="pin"
            type="password"
            name="pin"
            placeholder="Pin"
            required
            onChange={fielChanged}
            maxLength={128}
          ></input>
        </div>
        <div className="Generalcontainer">
          <input
            className="userinputfiled"
            id="userType"
            type="text"
            name="userType"
            placeholder="User Type "
            required
            onChange={fielChanged}
            maxLength={20}
          ></input>
        </div>
        <div className="Generalcontainer">
          <input
            className="ArticalSubmitbtn"
            type="submit"
            placeholder="Sumit"
          />
        </div>
        {/* <ToastContainer /> */}
      </form>
    </div>
  );
};

export default User;
