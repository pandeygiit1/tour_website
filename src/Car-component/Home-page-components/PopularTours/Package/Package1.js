import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Package.css'
// import { generateToken } from '../../../AaxiosApiListener/GenerateToken';
// import { tourPackageBooking } from '../../../AaxiosApiListener/ApiListener'; 
import SweetAlert2 from 'react-sweetalert2';
import { Link } from 'react-router-dom';

export default function MediaCard({tourPackage}) {
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
    //             tourPackageBooking(token, tourPackage, inputData).then((data) => {
    //                 setLoading(false);
                   
    //                 if (data?.data?.isInsert === 'true') {
    //                   setSwalProps({
    //                       show: true,
    //                       title: 'Thank you!',
    //                       text: 'We have recieved your details. Our representative will contact you soon.',
                          
    //                   });
    //               } else {
    //                   setSwalProps({
    //                       show: true,
    //                       title: 'Sorry!',
    //                       text: 'Something went wrong. Please try again later.',
    //                   });
    //               }
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
              Rent a Car from us and have a delightful journey.
              <span className="close" onClick={closePopup}>×</span>
            </div>
            <div className="white-bg center modal-header">
              <div className="login-register-div">              
                <section id="content1">
                  <form  className="login-form" onSubmit={onSubmit}>
                    <div className={loading}></div>
                    <div className="modal-form-group">
                    <label className='modal-from-label'>Full Name</label>
                      <input type="text" name="name" maxLength={50} required
                              onChange={handleData} className="modal-form-input"/>
                    </div>
                    <div className="modal-form-group">
                      <label className='modal-from-label'>
                      Your Email</label>
                      <input type="email" name="emailId" maxLength={50} required
                              onChange={handleData} className="modal-form-input"/>
                    </div>
                    <div className="modal-form-group">
                      <label className='modal-from-label'>
                      Mobile Number</label>
                      <input type="tel" name="mobileNumber" maxLength={10} required
                              onChange={handleData} className="modal-form-input"/>
                    </div>
                    <button className="btn btn-green signin-button" disabled={disable ? 1 : 0}>Submit</button>
                    <button className="btn-cancle signin-button" onClick={closePopup}>Cancel</button> 
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
        <Card className='TourCards' style={{backgroundColor: "#FFFFFF"}}>
        <Link className= 'PackageCardLink' to={{ pathname:'/tour-package/'+tourPackage.slugUrl}}>
          <CardMedia 
            className='TourCardMedia'         
            sx={{ height: "220px", width: "100%", backgroundSize: "100% 100%", overflow: "hidden", backgroundRepeat: "no-repeat", backgroundPosition: 'center'}}
            image={tourPackage.headerImgUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" align="center" fontSize="20px" fontWeight="520" fontFamily="Poppins, sans-serif"  color="#112E3B">
            {tourPackage.title}
            </Typography>
            </CardContent>
            </Link>
            <CardActions >
            <div className='Tourcallbuttonpackagediv'>
              <button className='Availabcarbtn' onClick={setPopup}>Book Now</button>
            </div>
          </CardActions>
        </Card>
    </div>
  );
}