import React from 'react'
import "./Artical.style.css"
import {MdDelete} from "react-icons/md"
// import { generateToken } from '../../AaxiosApiListener/GenerateToken'
// import { deleteArticle } from '../../AaxiosApiListener/AdminApiListener'
// import { ToastContainer, toast } from "react-toastify";



const ArticalFeaturedList = ({title}) => {
  const handleDelete=(articleId)=>{
    // generateToken().then((resp)=>{
    //   if(resp){
    //             const token = JSON.stringify(resp.data.token);
    //             deleteArticle(token, articleId).then((res)=>{
    //               if (res?.data?.isDelete === "true") {
    //                 toast.success("Article Delete Successfully!", {
    //                   position: toast.POSITION.TOP_CENTER,
    //                 });
    //               }
    //               if (res?.data?.isDelete === "false") {
    //                 toast.error("Please Try Again", {
    //                   position: toast.POSITION.TOP_CENTER,
    //                 });
    //               }

    //               console.log(res)
    //             }).catch((err)=>{
    //               console.log(err.message);
    //             })
    //   }
    //   })

    

  }
  return (
    <div className="listContainer">
      <p>{title.title}</p>
      <div className="iconPart">
        <hr></hr>
        <p>
          <MdDelete
            className="Articaldeleteicon"
            onClick={() => handleDelete(title.articleId)}
          />
        </p>
        {/* <ToastContainer /> */}
      </div>
      
    </div>
    
  );
}

export default ArticalFeaturedList