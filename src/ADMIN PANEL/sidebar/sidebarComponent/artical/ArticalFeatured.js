import React, { useEffect } from "react";
// import { generateToken } from '../../AaxiosApiListener/GenerateToken'
// import { getArticalFeatured } from '../../AaxiosApiListener/AdminApiListener'
import { useState } from "react";
import ArticalFeaturedList from "./ArticalFeaturedList";
import "./Artical.style.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const ArticalFeatured = () => {
  const [currentpage, setCurrentpage] = useState(0);
  const [totalpage, setTotalpage] = useState(1);
  const [titleData, setTitleData] = useState([]);

  //  useEffect(()=>{
  //         generateToken().then((resp)=>{
  //         if(resp){
  //                   const token = JSON.stringify(resp.data.token);
  //                   getArticalFeatured(token).then((res , currentpage)=>{
  //                      setTitleData(res?.data?.article)
  //                      setTotalpage(res.data.totalPages);
  //                   }).catch((err)=>{
  //                     console.log(err.message);
  //                   })
  //         }
  //         })
  //  },[currentpage])

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
    <div className="afeaturecon">
      <div className="tilecontainer">
        <h4>Title</h4>
        <h4>Action</h4>
      </div>

      {titleData &&
        titleData.map((title) => {
          return <ArticalFeaturedList title={title} key={title.articleId} />;
        })}
      <div className="cureentpagecontainer">
        Page -{" "}
        <p className="cureentpageshowtext">
          {currentpage + 1}/{totalpage}
        </p>
      </div>

      <div className="btnSection">
        <button
          disabled={currentpage === 0 ? true : false}
          onClick={handlePrevClick}
          className="NextPreviBtn"
        >
          <span>
            <GrFormPrevious className="lefticons" />
          </span>{" "}
          <span>Previous</span>
        </button>
        <button
          disabled={currentpage === totalpage - 1 ? true : false}
          onClick={handleNextClick}
          className="NextPreviBtn"
        >
          <span>Next</span>{" "}
          <span>
            {" "}
            <GrFormNext className="righticons" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ArticalFeatured;
