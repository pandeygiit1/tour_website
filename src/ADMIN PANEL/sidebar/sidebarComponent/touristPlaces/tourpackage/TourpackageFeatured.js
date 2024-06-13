import React, { useEffect } from 'react'
// import { generateToken } from '../../AaxiosApiListener/GenerateToken'
// import { getTourpackageFeatured } from '../../AaxiosApiListener/AdminApiListener'
import "../../artical/Artical.style.css";
import { useState } from 'react'

import {GrFormNext,GrFormPrevious} from "react-icons/gr"
import TourpackageFeaturedList from './TourpackageFeaturedList'

const TourpackageFeatured = () => {
  const [titleData, setTitleData] = useState([])
  const [currentpage, setCurrentpage] = useState(0);
  const [totalpage, setTotalpage] = useState(1);
//   console.log(titleData);
   useEffect(()=>{
          // generateToken().then((resp)=>{
          // if(resp){
          //           const token = JSON.stringify(resp.data.token);
          //           getTourpackageFeatured(token ,currentpage).then((res)=>{
          //              console.log("resp" , res);
          //              setTitleData(res?.data?.article)
          //              setTotalpage(res.data.totalPages)
          //           }).catch((err)=>{
          //             console.log(err.message);
          //           })
          // }
          // })
   },[currentpage]) 
   
   const handlePrevClick = () => {
    if (currentpage > 0) {
      setCurrentpage(currentpage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentpage < totalpage - 1) {
      setCurrentpage(currentpage + 1);
    }
  };


  return (
    <div className='afeaturecon'>
      <div className='tilecontainer'>
        <h4>Title</h4>
        <h4>Action</h4>
      </div>

      {
        titleData &&
        titleData.map((title)=>{
          return <TourpackageFeaturedList title={title} key={title.tourPackageId}/>
        })
      }

<div className="cureentpagecontainer">
          page -{" "}
          <p className="cureentpageshowtext">
            {currentpage + 1}/{totalpage}
          </p>
        </div>


        <div className="btnSection">
        <button
          disabled={currentpage === 0 ? true : false}
          onClick={handlePrevClick}
        className="NextPreviBtn">
          <span><GrFormPrevious className="lefticons"/></span> <span>Previous</span>
        </button >
        <button
         disabled={currentpage === totalpage - 1 ? true : false}
         onClick={handleNextClick}
        className="NextPreviBtn">
        <span>Next</span> <span> <GrFormNext className="righticons"/></span>
        </button >
      </div>
      
    
    </div>
  )
}

export default TourpackageFeatured