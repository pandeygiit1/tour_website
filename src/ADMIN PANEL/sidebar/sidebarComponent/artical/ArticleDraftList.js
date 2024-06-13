import React from "react";
import { MdDelete } from "react-icons/md";
import { BsFillPencilFill, BsFillEyeFill } from "react-icons/bs";
import "./Artical.style.css";
import { Link } from "react-router-dom";
// import { generateToken } from '../../AaxiosApiListener/GenerateToken'
// import { deleteArticle } from '../../AaxiosApiListener/AdminApiListener'
// import { ToastContainer, toast } from "react-toastify";

const ArticleDraftList = ({ draft }) => {


  const handleDelete = (articleId) => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);
    //     deleteArticle(token, articleId)
    //       .then((res) => {
    //         if (res?.data?.isDelete === "true") {
    //           toast.success("Article Delete Successfully!", {
    //             position: toast.POSITION.TOP_CENTER,
    //           });
    //         }
    //         if (res?.data?.isDelete === "false") {
    //           toast.error("Please Try Again", {
    //             position: toast.POSITION.TOP_CENTER,
    //           });
    //         }

    //         console.log(res);
    //       })
    //       .catch((err) => {
    //         console.log(err.message);
    //       });
    //   }
    // });

    
  };

  return (
    <div className="listContainer">
      <div className="listCon1">
        <p>{draft?.title}</p>
        <hr></hr>
      </div>
      <div className="listCon2">
        <p>{draft?.authorName}</p>
        <hr></hr>
      </div>
      <div className="listCon3">
        <p>{draft?.categoryName}</p>
        <hr></hr>
      </div>

      <div className="btnList">
      <Link
          className="newsLink"
          to={window.location.origin+"/blog/"+draft?.slugUrl}
        >
          <BsFillEyeFill className="btnsize" />
        </Link>
        <Link
          className="newsLink"
          to={{
            pathname: "/sidebar/admin/article/edit/" + draft.title,
          }}
        >
          <BsFillPencilFill className="btnsize" />
        </Link>
        <MdDelete className="btnsize" onClick={() => handleDelete(draft.articleId)}/>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default ArticleDraftList;
