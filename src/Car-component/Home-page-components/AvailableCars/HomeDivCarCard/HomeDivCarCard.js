import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './HomeDivCarCard.css'
import SweetAlert2 from 'react-sweetalert2';
// import { generateToken } from '../../../AaxiosApiListener/GenerateToken';
// import { carBooking } from '../../../AaxiosApiListener/ApiListener';

export default function MediaCard({ cars }) {
  var currDate = new Date()
  const pickdate=currDate.getFullYear() + "-"+ parseInt(currDate.getMonth()+1) +"-"+currDate.getDate();
  const dropdate=currDate.getFullYear() + "-"+ parseInt(currDate.getMonth()+1) +"-"+currDate.getDate();
  const picktime =currDate.getHours() + ':' + currDate.getMinutes() + ':' + currDate.getSeconds();
  const droptime = currDate.getHours() + ':' + currDate.getMinutes() + ':' + currDate.getSeconds();
  const userData = { sourceCityName: "Jaipur", destCityName: "Jaipur" , pickdate,picktime,dropdate,droptime}
  
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [disable, setDisable] = useState('');
  const [swalProps, setSwalProps] = useState({});
  const user = { name: "", mobileNumber: "", emailId: "" }
  const [inputData, setInputData] = useState({ user })
  const handleData = (e) => {
      setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const closePopup = () => {		
		setPopup(false);
	};

  const onSubmit = async (e) => {
    e.preventDefault()
    e.target.reset()
    setDisable('true')
    setLoading('spinner-booking');

    // try {
    //     generateToken().then((resp) => {
    //         if (resp) {
    //             const token = JSON.stringify(resp.data.token);
    //             carBooking(token, cars, userData , inputData).then((data) => {
    //                 setLoading(false);
    //                 if (data?.data?.isInsert === 'true') {
    //                     setSwalProps({
    //                         show: true,
    //                         title: 'Thank you!',
    //                         text: 'We have recieved your details. Our representative will contact you soon.',
    //                     });
    //                 } else {
    //                     setSwalProps({
    //                         show: true,
    //                         title: 'Sorry!',
    //                         text: 'Something went wrong. Please try again later.',
    //                     });
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
  return (
    <div>
      {popup ? (
        <div className='login-modal-div'>
        <div className='modal-content'>
          <div className="close-div">
            Hire your Car with us and enjoy your Trip
            <span className="close" onClick={closePopup}>×</span>
          </div>
          <div className="white-bg center modal-header">
            <div className="login-register-div">              
              <section id="content1">
                <form  className="login-form" onSubmit={onSubmit}>
                  <div className={loading}></div>
                  <div className="modal-form-group">
                  <label className='modal-from-label'>Full Name</label>
                    <input type="text" name="name" maxLength={50}  required
                            onChange={handleData} className="modal-form-input"/>
                  </div>
                  <div className="modal-form-group">
                    <label className='modal-from-label'>
                    Your Email</label>
                    <input type="email" name="emailId" maxLength={50}  required
                            onChange={handleData} className="modal-form-input"/>
                  </div>
                  <div className="modal-form-group">
                    <label className='modal-from-label'>
                    Mobile Number</label>
                    <input type="tel" name="mobileNumber" maxLength={10}  required
                            onChange={handleData} className="modal-form-input"/>
                  </div>
                  
                  <button class="btn btn-green signin-button" type="submit" disabled={disable ? 1 : 0}>Submit</button>
                  &nbsp;&nbsp;
                  <button class="btn-cancle signin-button" onClick={closePopup}>Cancel</button>
                  
                  <SweetAlert2 {...swalProps} />
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
      ) : (
      null
      )}
      <Card className='HomeCardDiv'>
          <div className="rn-car-search-item">
          <CardMedia
          className='HomeCardMedia'                
          image={cars.imageUrl}  width='100%'
          height='100%'
          />
          <CardContent>
          <Typography gutterBottom variant="h6" marginTop="10px" fontSize="22px" fontWeight="500" fontFamily="Poppins, sans-serif"  color="#112E3B">
            {cars.carOemName} {cars.carModelName} {cars.carVariantName}
          </Typography>
          <Typography className='HomecardTypography' component='span' variant="body2" >
            <div className='Hometextallin'>
              <samp className='HomeIcon'>
                <i className="fa fa-users"></i> {cars.noOfPassengers} Passengers
              </samp>
              <samp className='HomeIcon'>
                <i className="fa fa-suitcase" ></i> 4 Luggages
              </samp>
              <samp className='HomeIcon'>
                <i className='fa fa-gas-pump'></i> {cars.fuel}
              </samp>
              <samp className='HomeIcon'>
                <i className="fa fa-solid fa-fan"></i> A.C.
              </samp>
            </div>
          </Typography>
          <CardActions>
          <div className='HomeCardCardActions'>
            <div className='HomeFromKM'>
                <span className="HomeRupyecolor">₹{cars.perKMPrice}</span>
                <span className="Fromcolor">/KM</span>
            </div>
            <button className='Availabcarbtn' onClick={setPopup}>Book Now</button>
          </div>
        </CardActions>
        </CardContent>
        
          </div>
      </Card>
    </div>
  );
}