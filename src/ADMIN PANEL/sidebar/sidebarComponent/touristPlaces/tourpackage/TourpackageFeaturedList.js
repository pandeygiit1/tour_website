import React from "react";
import "../../artical/Artical.style.css";
import { MdDelete } from "react-icons/md";
// import { ToastContainer, toast } from "react-toastify";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
// import { deleteTourPackage } from "../../AaxiosApiListener/AdminApiListener";

const TourpackageFeaturedList = ({ title }) => {
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
      <p>{title.title}</p>
      <div className="iconPart">
        <hr></hr>
        <p>
          <MdDelete
            className="Articaldeleteicon"
            onClick={() => handleDelete(title.tourPackageId)}
          />
        </p>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default TourpackageFeaturedList;
