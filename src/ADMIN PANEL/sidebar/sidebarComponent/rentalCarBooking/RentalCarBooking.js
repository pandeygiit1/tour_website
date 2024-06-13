import React from "react";
// import DatePicker from "react-datepicker";
import "./RentalCarBookings.css";
import { useEffect } from "react";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
// import {
//   rentalCarBookingCreate,
//   getVendorList,
//   getRentalCarList,
// } from "../../AaxiosApiListener/AdminApiListener";
import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";

const RentalCarBooking = () => {
  const [vendorlist, setVendorlist] = useState([]);
  const [rentalCarList, setRentalCarList] = useState([]);
  const [toDate, setToDate] = useState(new Date());
  const [fromDate, setFromDate] = useState(new Date());
  const [rentalCarBooking, setRentalCarBooking] = useState({
    customerName: "",
    customerEmailId: "",
    customerMobNo: "",
    sourceCityName: "",
    destCityName: "",
    todate: "",
    fromdate: "",
    picktime: "",
    droptime: "",
    vendorId: "",
    rentalCarId: "",
    driverNo: "",
    totalKm: 0,
    totalFareperKMPrice: 0,
    startTripInfo: "",
    endTripInfo: "",
    customerInfo: "",
    bookingSts: "",
    noOfpsgnr: 0,
  });

  useEffect(() => {
    rentalCarBooking["bookingId"] = "RCB" + new Date().getTime();
  }, []);
  useEffect(() => {
    rentalCarBooking["customerId"] = "CU" + new Date().getTime();
  }, []);

  const handleonChange = (e) => {
    setRentalCarBooking({
      ...rentalCarBooking,
      [e.target.name]: e.target.value,
    });
  };
  const selectValue = (e) => {
    console.log(e);
  };
  // useEffect(() => {
  //   generateToken().then((resp) => {
  //     if (resp) {
  //       const token = JSON.stringify(resp.data.token);

  //       getRentalCarList(token)
  //         .then((data) => {
  //           console.log(data);
  //           setRentalCarList(data?.data?.data?.rentalCar);
  //           //  console.log(data.data.data.vendor);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   });
  // }, []);

  useEffect(() => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);

    //     getVendorList(token)
    //       .then((data) => {
    //         // console.log(data);
    //         setVendorlist(data?.data?.data?.vendor);
    //         //  console.log(data.data.data.vendor);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
   // });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    // try {
    //   generateToken().then((resp) => {
    //     if (resp) {
    //       const token = JSON.stringify(resp.data.token);
    //       rentalCarBookingCreate(token, rentalCarBooking)
    //         .then((data) => {
    //           if (data?.data?.isInsert === "true") {
    //             toast.success("Rental Car Booking Successfully!", {
    //               position: toast.POSITION.TOP_CENTER,
    //             });
    //           }
    //           if (data?.data?.isInsert === "false") {
    //             toast.error("Please Try Again", {
    //               position: toast.POSITION.TOP_CENTER,
    //             });
    //           }
    //         })
    //         .catch((err) => {
    //           console.log(err.message);
    //         });
    //     }
    //   });
    // } catch {
    //   console.log("error when api calling ");
    // }
  };
  return (
    <div className="topLevelboxrentalcarBooking">
      <form onSubmit={handleSubmit}>
        <h4>Rental Car Booking</h4>
        <div className="selectContainerRentalCar">
          <select
            className="leftSelectRental"
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
          <select
            className="RigthSelectRental"
            id="rentalCarId"
            onChange={handleonChange}
            name="rentalCarId"
          >
            <option>--Select Rental Car Name--</option>
            {rentalCarList?.map((rentalCar) => {
              return (
                <option
                  key={rentalCar.rentalCarId}
                  value={rentalCar.rentalCarId}
                >
                  {" "}
                  {rentalCar.modelNm} {rentalCar.modelNm}{" "}
                </option>
              );
            })}
          </select>
        </div>
        <div className="selectContainerRentalCar">
          <input
            name="customerName"
            onChange={handleonChange}
            required
            className="RigthSelectRental"
            id="customerName"
            placeholder="Customer Name"
          />
          <input
            onChange={handleonChange}
            name="customerEmailId"
            type="text"
            required
            className="RigthSelectRental"
            id="customerEmailId"
            placeholder="Customer Email"
          />
        </div>
        <div>
          <input
            type="number"
            maxLength={10}
            onChange={handleonChange}
            name="customerMobNo"
            required
            className="costomermobilenoinput"
            id="customerMobNo"
            placeholder="Customer Mob No"
          />
        </div>
        <div className="selectContainerRentalCar">
          <input
            type="text"
            onChange={handleonChange}
            name="sourceCityName"
            required
            className="RigthSelectRental"
            id="sourceCityName"
            placeholder="Source City Name"
          />
          <input
            type="text"
            onChange={handleonChange}
            name="destCityName"
            required
            className="RigthSelectRental"
            id="destCityName"
            placeholder="destination City Name"
          />
        </div>
        <div className="selectContainerRentalCar">
          <input
            type="date"
            className="leftSelectRental "
            id="todate"
            name="todate"
            onChange={handleonChange}
          />
          <input
            type="date"
            className="RigthSelectRental "
            id="fromdate"
            name="fromdate"
            onChange={handleonChange}
          />
        </div>{" "}
        <div className="selectContainerRentalCar">
          <input
            type="text"
            onChange={handleonChange}
            name="picktime"
            required
            className="RigthSelectRental"
            id="picktime"
            placeholder="Pick time"
          />
          <input
            type="text"
            onChange={handleonChange}
            name="droptime"
            required
            className="RigthSelectRental"
            id="droptime"
            placeholder="Drop time"
          />
        </div>{" "}
        <div className="selectContainerRentalCar">
          <input
            type="number"
            onChange={handleonChange}
            name="driverNo"
            className="RigthSelectRental"
            id="driverNo"
            placeholder="Driver No"
          />
          <input
            type="number"
            onChange={handleonChange}
            name="totalKm"
            className="RigthSelectRental"
            id="totalKm"
            placeholder="Total Km"
          />
        </div>
        <div className="selectContainerRentalCar">
          <input
            type="number"
            onChange={handleonChange}
            name="totalFareperKMPrice"
            className="RigthSelectRental"
            id="totalFareperKMPrice"
            placeholder="Total Fare per KM Price"
          />
          <input
            name="startTripInfo"
            type="text"
            onChange={handleonChange}
            className="RigthSelectRental"
            id="startTripInfo"
            placeholder="Start Trip Info"
          />
        </div>
        <div className="selectContainerRentalCar">
          <input
            name="endTripInfo"
            type="text"
            onChange={handleonChange}
            className="RigthSelectRental"
            id="endTripInfo"
            placeholder="End Trip Info"
          />
          <input
            name="customerInfo"
            type="text"
            onChange={handleonChange}
            className="RigthSelectRental"
            id="customerInfo"
            placeholder="customer Info"
          />
        </div>
        <div className="selectContainerRentalCar">
          <input
            name="bookingSts"
            type="text"
            onChange={handleonChange}
            className="RigthSelectRental"
            id="bookingSts"
            placeholder="Booking Sts"
          />
          <input
            name="agentEarning"
            type="text"
            onChange={handleonChange}
            className="RigthSelectRental"
            id="agentEarning"
            placeholder="Agent Earning"
          />
        </div>
        <div>
          <input className="generalbtnrentalcarbooking" type="submit" />
          <buttom className="generalbtnrentalcarbookingReset">Reset</buttom>
        </div>
        {/* <ToastContainer /> */}
      </form>
    </div>
  );
};

export default RentalCarBooking;
