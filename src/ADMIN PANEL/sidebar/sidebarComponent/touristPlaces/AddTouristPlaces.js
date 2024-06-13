import React, { useState } from "react";
// import { generateToken } from "../../../../AaxiosApiListener/GenerateToken";
// import { touristPlacesAdd } from "../../../../AaxiosApiListener/AdminApiListener";
// import { ToastContainer, toast } from "react-toastify";


const AddTouristPlaces = () => {
  const [touristPlaces, setTouristPlaces] = useState({
    placeName: "",
    slugUrl: "",
    imgUrl: "",
    shortDescription: ""
  });
  //   console.log("touristPlaces", touristPlaces);
  const handleChange = (e) => {
    setTouristPlaces({ ...touristPlaces, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // try {
    //   generateToken().then((resp) => {
    //     const token = JSON.stringify(resp.data.token);
    //     if (resp) {
    //       touristPlacesAdd(token, touristPlaces)
    //         .then((data) => {
    //           // console.log(data);
    //           if (data?.data?.isInsert === "true") {
    //             toast.success("Tourist Places Save Successfully!", {
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
     // alert(e);
    //}

    //     reset form filds
    e.target.reset();
  };
  return (
    <div className="toplevelcarmodeldiv">
      <form onSubmit={handleSubmit}>
        <div className="generaldivcarModel">
          <label>Place Name</label>
          <input
            className="carModelInput"
            onChange={handleChange}
            name="placeName"
            type="text"
            required
            placeholder="Enter Place Name"
          />
        </div>
        <div className="generaldivcarModel">
          <label>Slug Url</label>
          <input
            className="carModelInput"
            onChange={handleChange}
            name="slugUrl"
            type="text"
            required
            placeholder="Enter Slug Url"
          />
        </div>
        <div className="generaldivcarModel">
          <label>Img Url</label>
          <input
            className="carModelInput"
            onChange={handleChange}
            name="imgUrl"
            type="text"
            required
            placeholder="Enter Img Url"
          />
        </div>
        <div className="generaldivcarModel">
          <label>Short Description</label>
          <input
            className="carModelInput"
            onChange={handleChange}
            name="shortDescription"
            type="text"
            required
            placeholder="Enter Short Description"
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

export default AddTouristPlaces;
