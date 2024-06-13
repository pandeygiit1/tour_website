import React from "react";
import { useEffect } from "react";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
// import { getTourPackageDraft } from "../../AaxiosApiListener/AdminApiListener";
import { useState } from "react";
import "../../artical/Artical.style.css";
import {GrFormNext,GrFormPrevious} from "react-icons/gr"
import TourDraftList from "./TourDraftList";

const TourpackageDraft = () => {
  const [articalList, setArticleList] = useState([]);
  const [currentpage, setCurrentpage] = useState(0);
  const [totalpage, setTotalpage] = useState(1);
  // console.log("Draft response", articalList);
  useEffect(() => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);
    //     getTourPackageDraft(token ,currentpage)
    //       .then((resp) => {
    //                 // console.log("tourpackagedraftlist" , resp);
    //         setArticleList(resp.data.article);
    //         setTotalpage(resp.data.totalPages);
    //       })
    //       .catch((err) => {
    //         console.log(err.message);
    //       });
    //   }
    // });
  }, [currentpage]);

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
    <div className="ArticleDraftContainer">
      <div className="articledtitlecontainer">
        <h4>Title</h4>
        <h4>TourpackageId</h4>
        <h4>SlugUrl</h4>
        <h4>Action</h4>
      </div>
      {
        articalList &&
        articalList.map((draft)=>{
          return <TourDraftList draft = {draft}  key={draft.tourPackageId}/>
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
  );
};

export default TourpackageDraft;
