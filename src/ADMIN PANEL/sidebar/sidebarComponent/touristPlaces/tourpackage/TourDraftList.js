import React from "react";
import { MdDelete } from "react-icons/md";
import { BsFillPencilFill, BsFillEyeFill } from "react-icons/bs";
import "../../artical/Artical.style.css";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
// import { deleteTourPackage } from "../../AaxiosApiListener/AdminApiListener";

const TourDraftList = ({ draft }) => {
  const handleDelete = (articleId) => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);
    //     deleteTourPackage(token, articleId)
    //       .then((res) => {
    //         if (res?.data?.isDelete === "true") {
    //           toast.success("Tour Package Delete Successfully!", {
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
        <p>{draft?.slugUrl}</p>
        <hr></hr>
      </div>

      <div className="btnList">
        <Link>
          <BsFillEyeFill className="btnsize" />
        </Link>
        <Link
          className="newsLink"
          to={{
            pathname: "/sidebar/admin/Tourpackage/edit/" + draft.title,
          }}
        >
          <BsFillPencilFill className="btnsize" />
        </Link>
        <Link>
          <MdDelete className="btnsize" onClick={() => handleDelete(draft.tourPackageId)}/>
        </Link>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default TourDraftList;
