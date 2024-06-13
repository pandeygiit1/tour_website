import React from "react";
import { useEffect, useState } from "react";
// import { getArticalpublished, getSearchArticle } from "../../AaxiosApiListener/AdminApiListener";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
import ArticleDraftList from "./ArticleDraftList";
import "./Artical.style.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";

const ArticalPublish = () => {
  const [articalList, setArticleList] = useState([]);
  const [searchArticle, setSearchArtical] = useState(null);
  const [currentpage, setCurrentpage] = useState(0);
  const [totalpage, setTotalpage] = useState(1);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);
    //     if(title===null || title===""){
    //       getArticalpublished(token, currentpage)
    //       .then((resp) => {
    //         setArticleList(resp.data.article);
    //         setTotalpage(resp.data.totalPages);
    //         setSearchArtical(null)
    //       })
    //       .catch((err) => {
    //         console.log(err.message);
    //       });
    //     }
    //     if(title!==null || title!==""){
    //       getSearchArticle(token, {title:title})
    //       .then((resp) => {
    //         // console.log("resp", resp);
    //         setSearchArtical(resp.data.article);
    //       })
    //       .catch((err) => {
    //         console.log(err.message);
    //       });
    //     }
    //   }
    // });
  }, [currentpage, title]);

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
      <div className="searchbar">
        <div className="searchCon">
          <CiSearch />
        </div>
        <div className="inputsearchicon">
          <input
            className="pulishinput"
            type="text "
            placeholder="Tap to Search For Published Articles"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      {searchArticle ? (
        <div className="ArticleDraftContainer">
          <div className="articledtitlecontainer">
            <div className="draftTitle">
              <h4>Title</h4>
            </div>
            <h4>Author Name</h4>
            <h4>Category Name</h4>
            <h4>Action</h4>
          </div>
          <ArticleDraftList draft={searchArticle} />;
        </div>
      ) : (
        <div className="ArticleDraftContainer">
          <div className="articledtitlecontainer">
            <div className="draftTitle">
              <h4>Title</h4>
            </div>
            <h4>Author Name</h4>
            <h4>Category Name</h4>
            <h4>Action</h4>
          </div>
          {articalList &&
            articalList.map((draft) => {
              return <ArticleDraftList draft={draft} key={draft.articleId} />;
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
      )}
    </>
  );
};

export default ArticalPublish;
