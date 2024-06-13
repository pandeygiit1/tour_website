import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import Form from "./Form";
import FormContainer from "./FormContainer";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import { Button } from "../../Home-page-components/Custom/Button";
import VendorRegistarimage from "./VendorRegisterImage";
import style from "../VendorRegister.module.css";
// import '../VenderRegister.css'
// import { getSourceCityList } from "../../AaxiosApiListener/ApiListener";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
// import { vendorRegister } from '../../AaxiosApiListener/ApiListener'
import SweetAlert2 from "react-sweetalert2";

const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;
const VendorRegistarForm = () => {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState("");
  const [sourceCity, setSourceCity] = useState(null);
  const [swalProps, setSwalProps] = useState({});

  useEffect(() => {
    // generateToken().then((resp) => {
    // 	if (resp) {
    // 		const token = JSON.stringify(resp.data.token);
    // 		getSourceCityList(token).then((data) => {
    // 			setSourceCity(data)
    // 		}).catch(error => {
    // 			console.log(error)
    // 		})
    // 	}
    // })
  }, []);

  const userData = {
    vendorName: "",
    vendorMobileNumber: "",
    vendorEmailId: "",
    cityId: "",
    address: "",
    url: "",
  };
  const [inputData, setInputData] = useState(userData);
  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    setDisable("true");
    setLoading("vendor-spinner");
    try {
      // generateToken().the`````````n((resp) => {
      //     if (resp) {
      //         const token = JSON.stringify(resp.data.token);
      //         vendorRegister(token, inputData).then((data) => {
      //             setLoading(false);
      //             if (data?.status === 'SUCCESS') {
      //                 setSwalProps({
      //                     show: true,
      //                     title: 'Thank you!',
      //                     text: 'We have recieved your details. Our representative will contact you soon.',
      //                 });
      //             }
      //             else if (data?.data?.isInsert === 'exists') {
      //                 setSwalProps({
      //                     show: true,
      //                     title: 'Sorry!',
      //                     text: 'Please try again your number is already exists.',
      //                 });
      //             }
      //             else {
      //                 setSwalProps({
      //                     show: true,
      //                     title: 'Sorry!',
      //                     text: 'Something went wrong. Please try again later.',
      //                 });
      //             }
      //         }).catch(error => {
      //             console.log(error)
      //         })
      //     }
      // })
    } catch (e) {
      alert(e);
    }
  };

  return (
    <FormContainer>
      <div className={loading}></div>
      <FormContainer wrapper>
        <VendorRegistarimage />
        <div>
          <h3 className={style.textbookingcompanyinfo}>
            Make Money Renting Your Car
          </h3>
          <Form onSubmit={onSubmit}>
            <WrapperGrid>
              <label htmlFor="fullName" className={style.vendorInputTitle}>
                Full Name *
              </label>
              <div className={style.vendorFromInput}>
                <input
                  type="text"
                  name="vendorName"
                  placeholder="Name"
                  onChange={handleData}
                  required
                  className={style.vendorInput}
                />
              </div>
            </WrapperGrid>
            <WrapperGrid>
              <label htmlFor="mobileNumber" className={style.vendorInputTitle}>
                Mobile Number *
              </label>
              <div className={style.vendorFromInput}>
                <input
                  type="tel"
                  name="vendorMobileNumber"
                  placeholder="Mobile Number"
                  maxLength={10}
                  onChange={handleData}
                  required
                  className={style.vendorInput}
                />
              </div>
            </WrapperGrid>
            <WrapperGrid>
              <label htmlFor="yourEmail" className={style.vendorInputTitle}>
                Your Email *
              </label>
              <div className={style.vendorFromInput}>
                <input
                  type="email"
                  name="vendorEmailId"
                  placeholder="Your Email"
                  onChange={handleData}
                  className={style.vendorInput}
                />
              </div>
            </WrapperGrid>
            <WrapperGrid>
              <label htmlFor="yourCity" className={style.vendorInputTitle}>
                Your City*
              </label>
              <div className={style.vendorFromInput}>
                <select
                  name="cityId"
                  id="cityId"
                  onChange={handleData}
                  className={style.vendorInput}
                >
                  <option className="fas" value="">
                    Select City
                  </option>
                  {sourceCity?.data?.sourceCities?.map((cities) => (
                    <option value={cities.id} key={cities.id}>
                      {cities.cityName}
                    </option>
                  ))}
                </select>
              </div>
            </WrapperGrid>
            <WrapperGrid full>
              <label htmlFor="yourAddress" className={style.vendorInputTitle}>
                Your Address *
              </label>
              <div className={style.vendorFromInput}>
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  onChange={handleData}
                  className={style.vendorInput}
                />
              </div>
            </WrapperGrid>
            <WrapperGrid full>
              <label htmlFor="url" className={style.vendorInputTitle}>
                URL
              </label>
              <div className={style.vendorFromInput}>
                <input
                  type="text"
                  name="url"
                  placeholder="URL"
                  onChange={handleData}
                  className={style.vendorFromInput}
                />
              </div>
            </WrapperGrid>
            <WrapperGrid full>
              <div className={style.vendorfromsubmit}>
                <button className={style.vendorFromBtn}>Submit</button>
              </div>

              {/* <Button disabled={disable ? 1 : 0}>Submit</Button> */}
            </WrapperGrid>
            <SweetAlert2 {...swalProps} />
          </Form>
        </div>
      </FormContainer>
    </FormContainer>
  );
};

export default VendorRegistarForm;
