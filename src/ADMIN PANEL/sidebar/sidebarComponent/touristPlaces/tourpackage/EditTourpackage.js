import React, { useState, useEffect} from "react";
// import { Editor } from "@tinymce/tinymce-react";
import "./addTourpackage.css";
import "../../home/user.css";
import {FiUploadCloud} from "react-icons/fi"
import { ToastContainer, toast } from 'react-toastify';
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
// import { getSearchTourPackage } from "../../AaxiosApiListener/AdminApiListener";
// import { updateTourPackage } from "../../AaxiosApiListener/AdminApiListener";
// import { imageUpload } from "../../AaxiosApiListener/AdminApiListener";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { getAuthorList } from "../../AaxiosApiListener/AdminApiListener";
import { useParams } from "react-router-dom";



const AddTourpackage = () => {
  const titleData = useParams();
  const [file, setfile] = useState(null);
  const [type, setType] = useState("");
  const [tourPackageId, setTourPackageId] = useState("");
  const [title, setTitle] = useState(null);
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [imgDescription, setImgDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [caption1, setCaption1] = useState("");
  const [caption2, setCaption2] = useState("");
  const [caption3, setCaption3] = useState("");
  const [content, setContent] = useState("");
  const [isFeatured, setIsFeatured] = useState();
  const [isSponsored, setIsSponsored] = useState();
  const [authorId, setAuthorId] = useState("");

  // const [isFeaturedBox, setIsFeaturedBox] = useState(true);
  // const [isSponsoredBox, setIsSponsoredBox] = useState(true);

  const changeData = {
    tourPackageId: tourPackageId,
    authorId: authorId,
    title: title,
    summary: summary,
    description: description,
    imgDescription: imgDescription,
    caption1: caption1,
    caption2: caption2,
    caption3: caption3,
    content: content,
    isFeatured: isFeatured ? 1 : 0,
    isSponsored: isSponsored ? 1 : 0,
  };

  const imageData = {
    id: tourPackageId,
    upload: file,
    screenName: "tourPackage",
    type: type,
  };

  useEffect(() => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);
    //     getSearchTourPackage(token, titleData)
    //       .then((data) => {
    //         setTitle(data?.data?.tourPackage?.title);
    //         setSummary(data?.data?.tourPackage?.summary);
    //         setImgDescription(data?.data?.tourPackage?.imgDescription);
    //         setCaption1(data?.data?.tourPackage?.caption1);
    //         setCaption2(data?.data?.tourPackage?.caption2);
    //         setCaption3(data?.data?.tourPackage?.caption3);
    //         setDescription(data?.data?.tourPackage?.description);
    //         setContent(data?.data?.tourPackage?.content);
    //         setTourPackageId(data?.data?.tourPackage?.tourPackageId);
    //         setIsFeatured(data?.data?.tourPackage?.isFeatured===1 ? true : false)
    //         setIsSponsored(data?.data?.tourPackage?.isSponsored===1 ? true : false)
           
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
   // });
  }, [titleData]);

  useEffect(() => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);
    //     updateTourPackage(token, changeData)
    //       .then((data) => {
    //         console.log(data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
    // });
  }, [changeData]);

  useEffect(() => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);
    //     if (imageData.file !== null) {
    //       imageUpload(token, imageData)
    //         .then((data) => {})
    //         .catch((error) => {
    //           console.log(error);
    //         });
    //     }
    //   }
    // });
  }, [imageData]);

  useEffect(() => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);
    //     getAuthorList(token)
    //       .then((data) => {
    //         // console.log(data);
    //         setAuthor(data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
    // });
  }, []);
  console.log(imageData);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    //try {
    //   generateToken().then((resp) => {
    //     if (resp) {
    //       const token = JSON.stringify(resp.data.token);
    //       updateTourPackage(token, changeData)
    //         .then((data) => {
    //           if (data?.data?.isUpdate === "true") {
    //             toast.success("Tour Package Update Successfully!", {
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
    //   alert(e);
    // }
  };
  return (
    <div>
    <div className="articletopbtnsection">
    <button className="topbtn1">Preview</button>
  <button className="topbtn2">Publish</button>
    </div>
  
  <div style={{display: "flex"}}>
    <div className="addtourtoplevelcontainer">
      {/* <h3 className="textcolor">Tour Package</h3> */}
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="Generalcontainer">
          {/* <label htmlFor="Articaltital">Title *</label> */}
          <input
            className="userinputfiled"
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="Generalcontainer">
          {/* <label htmlFor="Articalslugurl">Author Name*</label> */}
          <select
            name="authorId"
            id="authorName"
            className="userinputfiled"
            onChange={(e) => setAuthorId(e.target.value)}
            >
            <option value="">--Select Author Name--</option>
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

        <div className="generalflexcontainer ">
          <div className="sumarycontainerbox">
            <label htmlFor="Description" className="textcolor">
              Short Description
            </label>
            <textarea
              className="sumarycontainertaxt"
              placeholder="Enter short description"
              id="description"
              name="description"
              type="text"
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
            />
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
              value={summary}
              placeholder="Enter Summary"
              onChange={(e)=> setSummary(e.target.value)}
            />
          </div>
        </div>
        {/* header image section */}
        <div className="generalflexcontainer">
          <div className="sumarycontainerbox1">
            <label htmlFor="headerimg0" className="textcolor">
              Header Image
            </label>
            <div className="sumarycontainertaxt1 labelcontainerimage">
              <label >
              <input
                className="custom-file-input"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                title="Upload a hight resolution Image"
                id="headerImgUrl"
                name="upload"
                type="file"
                onChange={e => { setfile(e.target.files[0]); setType(e.target.id)}}

                
              />
              <div className = "iconssize"><  FiUploadCloud/></div>
              <div>Upload a hight resolution Image</div>
              </label>
             
            </div>
          </div>
          <div className="sumarycontainerbox">
            <label htmlFor="Summary1" className="textcolor">
            Image Description 
            </label>
            <textarea
              className="sumarycontainertaxt"
              id="imageDescription"
              name="imageDescription"
              type="text"
              placeholder="Image Description"
              value={imgDescription}
              onChange={(e)=> setImgDescription(e.target.value)}
            />
          </div>
        </div>
        {/* other image section */}
        <div className="generalflexcontainer">
          <div className="sumarycontainerbox1">
            <label htmlFor="headerimg1" className="textcolor">
              Image Url 1
            </label>
            <div className="sumarycontainertaxt1 labelcontainerimage">
              <label >
              <input
                className="custom-file-input"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                title="Upload a hight resolution Image"
                id="imgUrl1"
                name="upload"
                type="file"
                onChange={e => { setfile(e.target.files[0]); setType(e.target.id)}}
              />
              <div className = "iconssize"><  FiUploadCloud/></div>
              <div>Upload a hight resolution Image</div>
              </label>
             
            </div>
          </div>
          <div className="sumarycontainerbox">
            <label htmlFor="Summary2" className="textcolor">
              Caption 1
            </label>
            <textarea
              className="sumarycontainertaxt"
              id="caption1"
              name="caption1"
              type="text"
              placeholder="Enter Caption 1"
              value={caption1}
              onChange={(e)=> setCaption1(e.target.value)}
            />
          </div>
        </div>
        <div className="generalflexcontainer">
          <div className="sumarycontainerbox1">
            <label htmlFor="headerimg2" className="textcolor">
            Image Url 2
            </label>
            <div className="sumarycontainertaxt1 labelcontainerimage">
              <label >
              <input
                className="custom-file-input"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                title="Upload a hight resolution Image"
                id="imgUrl2"
                name="upload"
                type="file"
                onChange={e => { setfile(e.target.files[0]); setType(e.target.id)}}
              />
              <div className = "iconssize">< FiUploadCloud/></div>
              <div>Upload a hight resolution Image</div>
              </label>
             
            </div>
          </div>
          <div className="sumarycontainerbox">
            <label htmlFor="Summary3" className="textcolor">
            Caption 2
            </label>
            <textarea
              className="sumarycontainertaxt"
              id="caption2"
              name="caption2"
              type="text"
              placeholder="Enter Caption 2"
              value={caption2}
              onChange={(e)=> setCaption2(e.target.value)}
            />
          </div>
        </div>
        <div className="generalflexcontainer">
          <div className="sumarycontainerbox1">
            <label htmlFor="headerimg3" className="textcolor">
            Image Url 3
            </label>
            <div className="sumarycontainertaxt1 labelcontainerimage">
              <label >
              <input
                className="custom-file-input"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                title="Upload a hight resolution Image"
                id="imgUrl3"
                name="upload"
                type="file"
                onChange={e => { setfile(e.target.files[0]); setType(e.target.id)}}
              />
              <div className = "iconssize"><  FiUploadCloud/></div>
              <div>Upload a hight resolution Image</div>
              </label>
             
            </div>
          </div>
          <div className="sumarycontainerbox">
            <label htmlFor="Summary4" className="textcolor">
            Caption 3
            </label>
            <textarea
              className="sumarycontainertaxt"
              id="caption3"
              name="caption3"
              type="text"
              placeholder="Enter Caption 3"
              value={caption3}
              onChange={(e)=> setCaption3(e.target.value)}
            />
          </div>
        </div>
        {/* text editor */}
        <div className="Generalcontainer">
          <label htmlFor="ArticalDes">Content *</label>
          <CKEditor
            editor={ ClassicEditor }
            data={content}
            onReady={ ( editor ) => {
              // console.log( "CKEditor5 React Component is ready to use!", editor );
            } }
            onChange={ ( event, editor ) => {
              setContent(editor.getData());
            } }
          />
        </div>

        <div className="ArticalCheckbox">
          <input name="isFeatured" type="checkbox" id="isFeatured" defaultChecked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)}/>
          <label htmlFor="ArticalCheckbox"> Is Featured ? </label>
        </div>
        <div>
          <input name="isSponsored" type="checkbox" id="isSponsored" defaultChecked={isSponsored} onChange={(e) => setIsSponsored(e.target.checked)} />
          <label htmlFor="ArticalCheckbox1"> Is Sponsored ? </label>
        </div>
        <div className="Generalcontainer">
          <input
            className="ArticalSubmitbtn"
            type="submit"
            placeholder="Sumit"
          />
        </div>
        <ToastContainer />
      </form>
    </div>
    <div className="articleRigthSection">
      right side box
    </div>
    </div>
    </div>
  );
};

export default AddTourpackage;
