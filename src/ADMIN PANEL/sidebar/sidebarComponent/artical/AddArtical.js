import React, { useState, useEffect, useCallback } from "react";
import { FiUploadCloud } from "react-icons/fi"
import "../home/user.css";
import { useDispatch, useSelector } from "react-redux";
import  { addArticle } from "../../../../Actions/AdminPanel-Actions/addArtical.action"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Artical.style.css";
import { Link } from "react-router-dom";
import ImageLibrary from "./image-modal/ImageLibrary"

const AddArtical = () => {
    
  const [file, setfile] = useState();
  const [show, setHide] = useState(false)
  const [type, setType] = useState("");
  const [author, setAuthor] = useState(null);
  
  const [tourPackageList, setTourPackageList] = useState()
  const id = useSelector((state)=>state.addArticalReducer.articleId)
  const [post, setPost] = useState({
    id: id,
    title: "",
    slugUrl: "",
    summary: "",
    seoTitle: "",
    description: "",
    headerImgUrl: "",
    imgDescription: "",
    content: "",
    focusKeyword: "",
    tags: "",
    authorId: 0,
    authorName: "",
    categoryName: "",
    publish: false,
    uploadFile:file
   
  });

 const dispatch=useDispatch()
 const imageFile=useSelector(state=>state.uploadImage.imageData)
 


  

  const fielChanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });

    if (post.title !== "" && post.slugUrl !== "") {
      dispatch(addArticle(post))
    }
  };

  //addArticle

  // const AddArticleHandler=async ()=>{


  //   const  response = await generateToken()
  //     const token = response.data.token
  //     console.log("AddArticleHandler token",token)
  //  if(token){
  // if(addArticalResp?.data?.isInsert !== "true" && post.title  !== "" && post.slugUrl !== "" ){
  //    console.log("AddArticleHandler condition run")
  // addArticle(token,post)
  //  .then((data)=>{

  //     setAddArticalResp(data)

  //   }).catch(error => console.log(error))

  // } 
  //     }
  // }
  // useEffect(() => {
  //   console.log("AddArticleHandler useEffect run")
  //     AddArticleHandler()
  // }, [post,addArticalResp])

  // const updateHandler=async()=>{
  //   const  response = await generateToken()
  //   const token = response.data.token
  //   console.log("updateHandler token",token)
  //   if(token){
  //     if(addArticalResp?.data?.isInsert === "true"){
  //       console.log("updateHandler condition run")

  //               updateArticle(token,post).then((data) => {
  //                       console.log("updateArticle",data)
  //               }).catch(error => {
  //                   console.log(error)
  //               })
  //             }
  //   }
  // }
  // useEffect(()=>{
  //   console.log("updateHandler use effect run")
  //   updateHandler()
  // },[post,addArticalResp])

  // const imageHandlerFunc=async ()=>{
  //     const response=await generateToken()
  //     const  token= response.data.token;
  //     if (token) {

  //        if (
  //          addArticalResp?.data?.isInsert === "true" &&
  //          imageData.upload !== undefined
  //        ) {
  //          imageUpload(token, imageData)
  //            .then((data) => {
  //              console.log(data)
  //            })
  //            .catch((error) => {
  //              console.log(error);
  //            });
  //        }
  //      }

  //  }

  //   useEffect(() => {
  //     imageHandlerFunc()

  //   }, [file,addArticalResp]);

  //   // useEffect(() => {
  //   //   generateToken().then((resp) => {
  //   //     if (resp) {
  //   //       const token = JSON.stringify(resp.data.token);
  //   //       getAuthorList(token)
  //   //         .then((data) => {
  //   //           setAuthor(data);
  //   //         })
  //   //         .catch((error) => {
  //   //           console.log(error);
  //   //         });
  //   //     }
  //   //   });
  //   // }, []);
  //   // console.log(imageData)

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    // try {
    //   generateToken().then((resp) => {
    //     if (resp) {
    //       const token = JSON.stringify(resp.data.token);


    //       updateArticle(token, post)
    //         .then((data) => {
    //           if (data?.data?.isUpdate === "true") {
    //             toast.success("Article Save Successfully!", {
    //               position: toast.POSITION.TOP_CENTER,
    //             });
    //           }
    //           if (data?.data?.isUpdate === "false") {
    //             toast.error("Please Try Again", {
    //               position: toast.POSITION.TOP_CENTER,
    //             });
    //           }
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         });
    //     }
    //   });
    // } catch (e) {
    // alert(e);
    // }
  };

  const PublishSubmit = () => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);

    //     updateArticle(token, post)
    //       .then((data) => {
    //         if (data?.data?.isUpdate === "true") {
    //           toast.success("Article Save Successfully!", {
    //             position: toast.POSITION.TOP_CENTER,
    //           });
    //         }
    //         if (data?.data?.isUpdate === "false") {
    //           toast.error("Please Try Again", {
    //             position: toast.POSITION.TOP_CENTER,
    //           });
    //         }
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
    // });
  };

  // useEffect(() => {
  //   generateToken().then((resp) => {
  //     if (resp) {
  //       const token = JSON.stringify(resp.data.token);
  //       getTourPackageList(token)
  //         .then((resp) => {
  //           setTourPackageList(resp.data.tourPackage);
  //         })
  //         .catch((err) => {
  //           console.log(err.message);
  //         });
  //     }
  //   });
  // }, []);

 


useEffect(()=>{
  
  if(post.title  !== "" && post.slugUrl !== "" ){
       console.log("AddArticleHandler condition run")
      
  
    }else{
      console.log("error")
    }
  
},[post])

useEffect(()=>{
    
  setfile(imageFile)
   
},[imageFile])

  return (
    <div>
      <div className="articletopbtnsection">
        {post.title && post.slugUrl ?
          <Link to={window.location.origin + "/blog/" + post.slugUrl.replace(/ /g, '-')}><button className="topbtn1" >Preview</button></Link> :
          <Link to={window.location.origin + "/blog/" + post.slugUrl.replace(/ /g, '-')}><button className="topbtn" disabled={!post.title && !post.slugUrl}>Preview</button></Link>
        }


        {post.title && post.slugUrl && post.summary && post.description && post.content && post.imageDescription ? <Link to="/sidebar/admin/article/draft"><button className="topbtn1" onClick={PublishSubmit}>Publish </button> </Link>
          : <button className="topbtn">Publish </button>}
      </div>

      <div style={{ display: "flex" }}>
        <div className="ArticalContainer usercontainer1">

          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="Generalcontainer">
              <input
                className="userinputfiledTop"
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                onBlur={fielChanged}
                
              />
            </div>
            <div className="Generalcontainer-characters-counter">
              <small className="Generalcontainer-characters">
                Characters:
                <span className="Generalcontainer-count" >{post.title.length}</span>
              </small>
            </div>
            <div className="Generalcontainer">
              <input
                className="userinputfiledTop"
                id="slugUrl"
                name="slugUrl"
                type="text"
            
                placeholder="Slug Url"
                onChange={fielChanged}
              />
            </div>
            <div className="Generalcontainer-characters-counter">
              <small className="Generalcontainer-characters">
                Characters:
                <span className="Generalcontainer-count">{post.slugUrl.length}/255</span>
              </small>
            </div>
            <div className="generalflexcontainer ">
              <div className="sumarycontainerbox">
                <label htmlFor="Description" className="textcolor">
                  Short Description
                </label>
                <textarea
                  className="sumarycontainertaxt"
                  placeholder="Short Description"
                  id="description"
                  name="description"
                  type="text"
                 
                  onChange={fielChanged}
                />
                <div className="Generalcontainer-characters-counter">
                  <small className="Generalcontainer-characters">
                    Characters:
                    <span className="Generalcontainer-count">{post.description.length}</span>
                  </small>
                </div>
              </div>
              <div className="sumarycontainerbox">
                <label htmlFor="Summary" className="textcolor">
                  Summary
                </label>
                <textarea
                  className="sumarycontainertaxt"
                  id="Summary"
                  
                  name="summary"
                  type="text"
                  placeholder="Summary"
                  onChange={fielChanged}
                />
                <div className="Generalcontainer-characters-counter">
                  <small className="Generalcontainer-characters">
                    Characters:
                    <span className="Generalcontainer-count">{post.summary.length}</span>
                  </small>
                </div>
              </div>
            </div>

            <div className="generalflexcontainer">
              <div className="sumarycontainerbox1">
                <label htmlFor="headerimg0" className="textcolor">
                  Header Image
                </label>
                <div className="sumarycontainertaxt1 labelcontainerimage" onClick={() => setHide(true)}>
                  {
                    show ? <ImageLibrary  closeModal={()=>setHide(false)} data={show}   /> :""
                  }

                  {
                    file ? (<img className="fileimg" src={file.imgUrl}/>) : (
                      <>

                        <div className="iconssize">< FiUploadCloud /></div>
                        <div>Upload a hight resolution Image</div>

                      </>
                    )
                  }




                </div>
              </div>

              <div className="sumarycontainerbox">
                <label htmlFor="Summary1" className="textcolor">
                  Image Description
                </label>
                <textarea
                  className="sumarycontainertaxt"
                  id="imageDescription"
                  name="imgDescription"
                  type="text"
                  placeholder="Image Description..."
                  onChange={fielChanged}
                />
              </div>
            </div>
            <div className="Generalcontainer-characters-counter">
              <small className="Generalcontainer-characters">
                Characters:
                <span className="Generalcontainer-count">{post.imgDescription.length}</span>
              </small>
            </div>


            <div className="Generalcontainer">
              {/* <label htmlFor="ArticalDes">Content *</label> */}
              <CKEditor
                editor={ClassicEditor}
                data=""
                placeholder="Content"
                onReady={(editor) => {
                  console.log("CKEditor5 React Component is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  setPost({ ...post, content: editor.getData() });
                }}
              />
            </div>
            {/* <div className="ArticalCheckbox">
          <input
            name="isFeatured"
            type="checkbox"
            id="isFeatured"
            onChange={checkBoxChanged}
          />
          <label htmlFor="ArticalCheckbox"> Is Featured ? </label>
          <input
            name="isSponsored"
            type="checkbox"
            id="isSponsored"
            onChange={checkBoxChanged}
          />
          <label htmlFor="ArticalCheckbox1"> Is Sponsored ? </label>
        </div> */}
            <div className="Generalcontainer">
              <lable htmlFor="authorName" className="textcolor" >Select Author Name</lable>
              <select
                name="authorId"
                id="authorName"
                className="userinputfiledBottom"
                onChange={fielChanged}
              >
                <small>

                </small>

                <option value=""></option>
                {author &&
                  author?.data?.author.map((author) => {
                    return (
                      <option
                        key={author.authorId}
                        value={author.authorId}
                      >
                        {author.authorName}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="Generalcontainer">
              <lable htmlFor="authorName" className="textcolor" >Select Tour Package Title</lable>
              <select
                name="authorId"
                id="authorName"
                className="userinputfiledBottom"
                onChange={fielChanged}
              >
                <option value=""></option>
                {tourPackageList &&
                  tourPackageList?.map((tourPackageList) => {
                    return (
                      <option
                        key={tourPackageList.tourPackageId}
                        value={tourPackageList.tourPackageId}
                      >
                        {tourPackageList.title}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div style={{ textAlign: "end", color: "grey", fontSize: "1rem", margin: "20px", fontWeight: "700" }}>
              Save as draft
            </div>
            {/* <div className="Generalcontainer">
          <input
            className="userinputfiled"
            id="categoryName"
            name="categoryName"
            type="text"
            required
            placeholder="Category Name"
            onChange={fielChanged}
          />
        </div> */}
            {/* <div className="Generalcontainer">
          <input
            className="ArticalSubmitbtn"
            type="submit"
            placeholder="Sumit"
          />
        </div> */}
            {/* <ToastContainer /> */}
          </form>
        </div>
        <div className="articleRigthSection">

          <div style={{ margin: "13px" }}>
            {/* <input
             className="ArticalCheckbox1"
            name="isSponsored"
            type="checkbox"
            id="isSponsored"
            checked={titleCheckBox}
          /> */}
            <span >
              {post.title.length > 0 ? <span className="showright">&#10003;</span>
                : <span className="hidewrong">aa</span>
              } </span>


            <label htmlFor="ArticalCheckbox1" > Title </label>

          </div>

          <div style={{ margin: "13px" }}>
            {/* <input
            className="ArticalCheckbox1"
            name="isSponsored"
            type="checkbox"
            id="isSponsored"
            checked={slugUrlCheckBox}
          /> */}
            <span >
              {post.slugUrl.length > 0 ? <span className="showright">&#10003;</span>
                : <span className="hidewrong">aa</span>
              } </span>

            <label htmlFor="ArticalCheckbox1" > Slug Url </label>
          </div>
          <div style={{ margin: "13px" }}>

            <span >
              {file ? <span className="showright">&#10003;</span>
                : <span className="hidewrong">aa</span>
              } </span>

            <label htmlFor="ArticalCheckbox1" >Featured Image</label>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AddArtical;
