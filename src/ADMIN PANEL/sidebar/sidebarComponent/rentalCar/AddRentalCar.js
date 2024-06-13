import React from "react";
import "./AddRentalCar.css";
import { useEffect } from "react";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
// import { addRentalCar, getVendorList } from "../../AaxiosApiListener/AdminApiListener";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

// import Select from 'react-select';

const AddRentalCar = () => {
  const [vendorlist, setVendorlist] = useState([]);
  console.log(vendorlist);
  const [addVendrocar, setAddVendorcar] = useState({
    cityNm: "",
    oemNm: "",
    modelNm: "",
    vendorId: "",
    transmission: "",
    fuelName: "",
    noOfLgage: 0,
    isAirCondition: 0,
    noOfDorrs: 0,
    minKm: 0,
    perKmPrice: 0,
    discount: 0,
    noOfpsgnr: 0,
  });
  useEffect(() => {
    addVendrocar["rentalCarId"] = "RC" + new Date().getTime();
  }, []);
  console.log(addVendrocar);

  const handleonChange = (e) => {
    setAddVendorcar({ ...addVendrocar, [e.target.name]: e.target.value });
  };
  const selectValue = (e) => {
    console.log(e);
  };
  // useEffect(() => {
  //   generateToken().then((resp) => {
  //     if (resp) {
  //       const token = JSON.stringify(resp.data.token);

  //       getVendorList(token)
  //         .then((data) => {
  //           // console.log(data);
  //           setVendorlist(data?.data?.data?.vendor);
  //         //  console.log(data.data.data.vendor);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    //  try{
    //    generateToken().then((resp)=>{
    //     if(resp){
    //       const token = JSON.stringify(resp.data.token)
    //       addRentalCar(token, addVendrocar).then((resp)=>{
    //         console.log(resp);
    //       }).catch((err)=>{
    //         console.log(err.message);
    //       })
    //     }
    //   })

    //  }catch{
    //  console.log("error when api calling ");
    //  }
  };

  const options = [
    { value: "laxmanchocolate", label: "Chocolate" },
    { value: "laxmanstrawberry", label: "Strawberry" },
    { value: "laxmanvanilla", label: "Vanilla" },
  ];

  return (
    <div className="addRentaltopleveldiv">
      <h4 className="addRentalcarheading">Add Rental Car</h4>
      <htmlForm onSubmit={handleSubmit}>
        <div className="inputcontainer">
          <div className="addrentalinputcontainer">
            <label htmlFor="carname" class="addrentalinputhaeding">
              Oem Name
            </label>
            <select
              name="oemNm"
              onChange={handleonChange}
              required
              className="addrentalinput"
              id="oemNm"
              placeholder="Car Name"
            >
              <option>--Select Oem Name--</option>
            </select>
          </div>
          <div className="addrentalinputcontainer">
            <label htmlFor="cityname" class="addrentalinputhaeding">
              City Name
            </label>
            <select
              onChange={handleonChange}
              name="cityNm"
              //type="text"
              required
              className="addrentalinput"
              id="cityNm"
              placeholder="City Name"
            >
              <option>--Select City Name--</option>
            </select>
          </div>
        </div>

        <div className="inputcontainer">
          <div className="addrentalinputcontainer">
            <label htmlFor="modalname" class="addrentalinputhaeding">
              Modal Name
            </label>
            <select
              onChange={handleonChange}
              name="modelNm"
              required
              className="addrentalinput"
              id="modelNm"
              placeholder="Modal Name"
            >
              <option>--Select Modal Name--</option>
            </select>

            <label htmlFor="noofpassenger" class="addrentalinputhaeding">
              Number Of Passenger
            </label>
            <input
              name="noOfPsgnr"
              // type="number"
              onChange={handleonChange}
              required
              className="addrentalinput"
              id="noOfPsgnr"
              placeholder="No. Of Passenger"
            />
          </div>
          <div className="addrentalinputcontainer">
            <label htmlFor="selectimage" className="addrentalinputhaeding">
              Select Image
            </label>
            <div className="sumarycontainertaxt1 labelcontainerimage">
              <label>
                <input
                  className="custom-file-input"
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  title="Upload a hight resolution Image"
                  id="headerImgUrl"
                  name="upload"
                  type="file"
                  // onChange={(e) => {
                  //   setfile(e.target.files[0]);
                  //   setType(e.target.id);
                  // }}
                />
                <div className="iconssize">
                  <FiUploadCloud />
                </div>
                <div>Upload a hight resolution Image</div>
              </label>
            </div>
            {/* <label htmlFor="selectimage" class="addrentalinputhaeding">
              Select Image
            </label>
            <input
              id="AddRentalcarImg"
              className="addrentalinput"
              type="file"
              name="upload"
              accept="image/png, image/jpg, image/gif, image/jpeg"
            /> */}
          </div>
        </div>

        <div className="inputcontainer">
          <div className="addrentalinputcontainer">
            <label htmlFor="noofluggage" class="addrentalinputhaeding">
              Number Of Luggage
            </label>
            <input
              //  type="number"
              onChange={handleonChange}
              name="noOfLgage"
              required
              className="addrentalinput"
              id="noOfLgage"
              placeholder="No. Of luggage"
            />
          </div>
          <div className="addrentalinputcontainer">
            <label htmlFor="fueltype" class="addrentalinputhaeding">
              Fuel Type
            </label>
            <input
              //type="text"
              onChange={handleonChange}
              name="fuelName"
              required
              className="addrentalinput"
              id="fuelName"
              placeholder="Fuel type "
            />
          </div>
        </div>

        <div className="inputcontainer">
          <div className="addrentalinputcontainer">
            <label htmlFor="aircodition" class="addrentalinputhaeding">
              Air Condition
            </label>
            <input
              // type="number"
              onChange={handleonChange}
              name="isAirCondition"
              required
              className="addrentalinput"
              id="carname7"
              placeholder="Air Condition"
            />
          </div>
          <div className="addrentalinputcontainer">
            <label htmlFor="transmission" class="addrentalinputhaeding">
              Transmission
            </label>
            <select
              className="addrentalinput"
              id="carname7"
              onChange={handleonChange}
              required
              name="transmission"
              placeholder="Transmission"
            >
              <option>--Select Transmission--</option>
            </select>
          </div>
        </div>

        <div className="inputcontainer">
          <div className="addrentalinputcontainer">
            <label htmlFor="noofdoors" class="addrentalinputhaeding">
              Number Of Doors
            </label>
            <input
              // type="number"
              onChange={handleonChange}
              name="noOfDoors"
              required
              className="addrentalinput"
              id="carname8"
              placeholder="No. Of Doors"
            />
          </div>
          <div className="addrentalinputcontainer">
            <label htmlFor="selectvendor" class="addrentalinputhaeding">
              Vendor Name
            </label>
            {/* <Select 
                // className="addrentalinput"
                 id="selectvendor"
                  //  onChange={handleonChange}
                 //  name="vendorNm"
                 isMulti
                  options={options}
                 // multiple
                  onChange={selectValue}
                  >
                  </Select> */}
            <select
              className="addrentalinput"
              id="vendorId"
              onChange={handleonChange}
              name="vendorId"
            >
              <option>--Select Vendor Name--</option>
              {vendorlist?.map((vendor) => {
                return (
                  <option key={vendor.vendorId} value={vendor.vendorId}>
                    {" "}
                    {vendor.vendorName}{" "}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="inputcontainer">
          <div className="addrentalinputcontainer">
            <label htmlFor="minkm" class="addrentalinputhaeding">
              Min Km
            </label>
            <input
              // type="number"
              onChange={handleonChange}
              name="minKm"
              required
              className="addrentalinput"
              id="carname9"
              placeholder="Min Km"
            />
          </div>
          <div className="addrentalinputcontainer">
            <label htmlFor="price/km" class="addrentalinputhaeding">
              Price/km
            </label>
            <input
              // type="number"
              onChange={handleonChange}
              name="perKmPrice"
              required
              className="addrentalinput"
              id="perKmPrice"
              placeholder="Price/Km"
            />
          </div>
        </div>

        <div className="inputcontainer">
          <div className="addrentalinputcontainer">
            <label htmlFor="Discount" class="addrentalinputhaeding">
              Discount
            </label>
            <input
              // type="number"
              onChange={handleonChange}
              name="discount"
              required
              className="addrentalinput"
              id="discount"
              placeholder="Discount"
            />
          </div>
          <div className="addrentalinputcontainer">
            <label htmlFor="Discount" class="addrentalinputhaeding">
              Feature
            </label>
            <input
              // type="number"
              onChange={handleonChange}
              name="isfeature"
              required
              className="addrentalinput"
              id="isfeature"
              placeholder="Is Feature"
            />
          </div>
        </div>

        <div className="inputcontainer">
          <input className="addRentalinputbtn" id="carname12" type="submit" />
        </div>
      </htmlForm>
    </div>
  );
};

export default AddRentalCar;
