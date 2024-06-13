import React from "react";
import { useEffect, useState } from "react";
// import { getSearchTourPackage, getTourpackagePublished } from "../../AaxiosApiListener/AdminApiListener";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
import "../../artical/Artical.style.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import TourDraftList from "./TourDraftList";

const Tourpackagepublished = () => {
  const [articalList, setArticleList] = useState([]);
  const [currentpage, setCurrentpage] = useState(0);
  const [totalpage, setTotalpage] = useState(1);
  const [title, setTitle] = useState(null);
  const [searchTourPackage, setSearchTourPackage] = useState(null);

  // console.log("data" , articalList);
  // useEffect(() => {
  //   generateToken().then((resp) => {
  //     if (resp) {
  //       const token = JSON.stringify(resp.data.token);
  //       if(title===null || title===""){
  //         getTourpackagePublished(token, currentpage)
  //         .then((resp) => {
  //           setArticleList(resp.data.article);
  //           setTotalpage(resp.data.totalPages);
  //           setSearchTourPackage(null)
  //         })
  //         .catch((err) => {
  //           console.log(err.message);
  //         });
  //       }
  //       if(title!==null || title!==""){
  //         getSearchTourPackage(token, {title:title})
  //         .then((resp) => {
  //           // console.log("resp", resp);
  //           setSearchTourPackage(resp.data.tourPackage);
  //         })
  //         .catch((err) => {
  //           console.log(err.message);
  //         });
  //       }
        
  //     }
  //   });
  // }, [currentpage, title]);

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
    <>
      <div className="searchCon">
        <input
          className="pulishinput"
          type="text "
          placeholder="Tap to Search For Published Articles"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="inputsearchicon">
          <CiSearch style={{ fontSize: "1.2rem" }} />
        </div>
      </div>
      {searchTourPackage?
       <div className="ArticleDraftContainer">
        <div className="articledtitlecontainer">
          <h4>Title</h4>
          <h4>Author Name</h4>
          <h4>SlugUrl</h4>
          <h4>Action</h4>
        </div>
          <TourDraftList draft={searchTourPackage}/>
      </div>
      :
      <div className="ArticleDraftContainer">
        <div className="articledtitlecontainer">
          <h4>Title</h4>
          <h4>Author Name</h4>
          <h4>SlugUrl</h4>
          <h4>Action</h4>
        </div>
        {articalList &&
          articalList.map((draft) => {
            return <TourDraftList draft={draft} key={draft.tourPackageId} />;
          })}

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

      }
      
    </>
  );
};

export default Tourpackagepublished;
