import React from "react";
import { useEffect } from "react";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
// import { getArticalDraft } from "../../AaxiosApiListener/AdminApiListener";
import ArticleDraftList from "./ArticleDraftList";
import { useState } from "react";
import "./Artical.style.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { articalDraft } from "../../../../Actions/AdminPanel-Actions/articalDraft.action";

const ArticalDraft = () => {
  // const [articalList, setArticleList] = useState([]);
  const [currentpage, setCurrentpage] = useState(0);
  const [totalpage, setTotalpage] = useState(1);
  const [title, setTitle] = useState(null);

  const dispatch = useDispatch()
  const articalList = useSelector((state)=>state.draftArticalReducer.articalList)

  useEffect(()=>{
  dispatch(articalDraft(currentpage))
  },[articalList])

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
      <div className="draftsearch">
        <div className="draftsearchbar">
          <h3>Draft Articles</h3>
          <div className="draftinputsearchicon">
            <div className="draftsearchicon">
              <CiSearch />
            </div>
            <input
              className="draftinput"
              type="text "
              placeholder="Tap to Search For Draft Articles"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
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
          articalList?.map((draft) => {
            return <ArticleDraftList draft={draft} key={draft.articleId} />;
          })}

        <div className="cureentpagecontainer">
          Page -
          <p className="cureentpageshowtext">
            {currentpage + 1}/{totalpage}
          </p>{" "}
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
    </>
  );
};

export default ArticalDraft;
