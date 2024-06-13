import React, { useState } from "react";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
// import { CarModel } from "../../AaxiosApiListener/AdminApiListener";
// import { ToastContainer, toast } from "react-toastify";
import "./CarModel.css";

const CarModal = () => {
  const [carmodeldata, setCarmodeldata] = useState({
    oemNm: "",
    modelNm: "",
    carTyp: "",
  });
  //   console.log("carmodeldata", carmodeldata);
  const handleChange = (e) => {
    setCarmodeldata({ ...carmodeldata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // try {
    //   generateToken().then((resp) => {
    //     const token = JSON.stringify(resp.data.token);
    //     if (resp) {
    //       CarModel(token, carmodeldata)
    //         .then((data) => {
    //           // console.log(data);
    //           if (data?.data?.isInsert === "true") {
    //             toast.success("Car Model Save Successfully!", {
    //               position: toast.POSITION.TOP_CENTER,
    //             });
    //           }

    //           if (data?.data?.isInsert === "false") {
    //             toast.error("Please Try Again", {
    //               position: toast.POSITION.TOP_CENTER,
    //             });
    //           }
    //         })

    //         .catch((resp) => {
    //           console.log(resp);
    //         });
    //     }
    //   });
    // } catch (e) {
    //   alert(e);
    // }

    //     reset form filds
    e.target.reset();
  };
  return (
    <div className="toplevelcarmodeldiv">
      <form onSubmit={handleSubmit}>
        <div className="generaldivcarModel">
          <label>Oem-Name</label>
          <input
            className="carModelInput"
            onChange={handleChange}
            name="oemNm"
            type="text"
            required
            placeholder="Enter Oem-Name"
          />
        </div>
        <div className="generaldivcarModel">
          <label>Model-Name</label>
          <input
            className="carModelInput"
            onChange={handleChange}
            name="modelNm"
            type="text"
            required
            placeholder="Enter Model-Name"
          />
        </div>
        <div className="generaldivcarModel">
          <label>Car-Type</label>
          <input
            className="carModelInput"
            onChange={handleChange}
            name="carTyp"
            type="text"
            required
            placeholder="Enter Car-Type"
          />
        </div>
        <div className="generaldivcarModel">
          <input className="carModelsubmitbtn  carModelInput" type="submit" />
        </div>
        {/* <ToastContainer /> */}
      </form>
    </div>
  );
};

export default CarModal;
