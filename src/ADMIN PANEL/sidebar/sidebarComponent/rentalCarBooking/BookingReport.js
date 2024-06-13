import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import { generateToken } from '../../AaxiosApiListener/GenerateToken';
// import { BookingReportData } from '../../AaxiosApiListener/AdminApiListener';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';
// import ArticleDraftList from '../../../../artical/ArticleDraftList';
// import "./ArticleDraft.css"

const BookingReport = () => {
 const [data , setData] = useState();
 const userinfo = JSON.parse(localStorage.getItem("userinfo"))
 const vendorId = userinfo?.user.vendirId


 console.log(vendorId)

// useEffect(()=>{
//          generateToken().then((resp)=>{
//           if(resp){
//             const token =  JSON.stringify(resp.data.token);
//             console.log(token)
//             // debugger;
//             BookingReportData(token,vendorId).then((resp)=>{
//                     console.log("data" , resp);
//                     setData(resp);
//             })
//           }
      
//          })
// },[])


const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
}
const handleSelect = (date)=>{
  console.log(date);
}
  return (
    <div>
         <div>
          <h4>Rental Report</h4>
          <div>
              {/* <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
         /> */}
          </div>
          <div>
            <select>
              <option>---select vendor---</option>
              <option>---select vendor---</option>
              <option>---select vendor---</option>
              <option>---select vendor---</option>
            </select>
          </div>
         </div>
   {/* second section */}
        <div>
          
        </div>

         </div>
  )
}

export default BookingReport