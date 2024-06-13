import React, { useState, useEffect} from "react";
// import { Editor } from "@tinymce/tinymce-react";
import "./addTourpackage.css";
import "../../home/user.css";
import {FiUploadCloud} from "react-icons/fi"
// import { ToastContainer, toast } from 'react-toastify';
// import { generateToken } from "../../../../AaxiosApiListener/GenerateToken";
// import { addTourPackage } from "../../../../AaxiosApiListener/AdminApiListener";
// import { updateTourPackage } from "../../../../AaxiosApiListener/AdminApiListener";
// import { imageUpload } from "../../../../AaxiosApiListener/AdminApiListener";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { getAuthorList } from "../../../../AaxiosApiListener/AdminApiListener";



const AddTourpackage = () => {
  const [file, setfile] =useState(null)
  const [type, setType] =useState('')
  const [author, setAuthor] = useState(null)
  const [titleCheckBox, setTitleCheckBox ] = useState(false)
  const [slugUrlCheckBox, setSlugUrlCheckBox ] = useState(false)
  const [addTourPackageResp, setAddTourPackageResp] = useState()

  const [post, setPost] = useState({
    title:'',
    slugUrl:'',
    summary:'',
    description:'',
    content:'',
    imageDescription:'',
    isFeatured:0,
    isSponsored:0,
    authorName:'',
    caption1:'',
    caption2:'',
    caption3:'',
    authorId: "",

  })
  
  useEffect(() => {
    let timer = new Date().getTime()
    post['tourPackageId'] = "T"+timer;
    // let randomNoArticle = (Math.random() + 1).toString(36).substring(7);
    //setPost({...post, 'articleId':"A"+new Date().getTime()})
  },[])


const imageData ={id:post.tourPackageId, upload:file, screenName:"tourPackage", type:type}
const fielChanged=(event)=>{
  setPost({...post, [event.target.name]:event.target.value})
  if(post.title!==""){
    setTitleCheckBox(true)
  }
  if(post.title===""){
    setTitleCheckBox(false)
  }
  if(post.slugUrl!==""){
    setSlugUrlCheckBox(true)
  }
  if(post.slugUrl===""){
    setSlugUrlCheckBox(false)
  }
}
const checkBoxChanged=(event)=>{
  const value =event.target.checked ? 1:0
  setPost({...post, [event.target.name]:value})

}

useEffect(() => {
  // generateToken().then((resp) => {
  //     if(resp){
  //         const token = JSON.stringify(resp.data.token);
  //         if(addTourPackageResp?.data?.isInsert !== "true" && post.title !== '' && post.slugUrl !== ''){
  //           addTourPackage(token, post).then((data) => {
  //             console.log(data)
  //             // setDisabled(false)
  //             setAddTourPackageResp(data)
  //           }).catch(error => {
  //               console.log(error)
  //           })
  //         }
  //         else if(addTourPackageResp?.data?.isInsert === "true"){
  //           updateTourPackage(token, post).then((data) => {
  //             console.log(data)
  //               //setCarList(data)
  //           }).catch(error => {
  //               console.log(error)
  //           })
  //         }
          
  //     }
 // })
}, [post,addTourPackageResp])

useEffect(() => {
  // generateToken().then((resp) => {
  //     if(resp){
  //         const token = JSON.stringify(resp.data.token);
  //         if(addTourPackageResp?.data?.isInsert === "true" && imageData.upload !== null){
  //           imageUpload(token, imageData).then((data) => {
  //             console.log(data)
  //             // setDisabled(false)
  //           }).catch(error => {
  //               console.log(error)
  //           })
  //         }
  //     }
  // })
}, [imageData, addTourPackageResp])

useEffect(() => {
  // generateToken().then((resp) => {
  //     if(resp){
  //         const token = JSON.stringify(resp.data.token);
  //         getAuthorList(token).then((data) => {
  //           console.log(data)
  //           setAuthor(data)
  //         }).catch(error => {
  //             console.log(error)
  //         })
  //     }
  // })
}, [])

const handleSubmit=(e)=>{
    e.preventDefault();
    e.target.reset()
  // try {
  //     generateToken().then((resp) => {
  //       if(resp){
  //           const token = JSON.stringify(resp.data.token);
  //           updateTourPackage(token,post).then((data) => {            
  //             if(data?.data?.isUpdate==='true'){
  //               toast.success('Tour Package Save Successfully!', {
  //                 position: toast.POSITION.TOP_CENTER
  //               });
  //             }
  //             if(data?.data?.isUpdate==='false'){
  //               toast.error('Please Try Again', {
  //                 position: toast.POSITION.TOP_CENTER
  //             });
  //             }
  //           }).catch(error => {
  //               console.log(error)
  //           })
  //       }
    //})
  //} catch (e) {
     // alert(e)
  //}
}
// console.log(imageData)
  return (
    <div>
    <div className="articletopbtnsection">
    <button className="topbtn1">Preview</button>
  <button className="topbtn2">Publish </button>
    </div>
  
  <div style={{display: "flex"}}>
    <div className="addtourtoplevelcontainer">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="Generalcontainer">
          <input
            className="userinputfiledTop"
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            onBlur={fielChanged}
            required
          />
        </div>
        <div className="Generalcontainer">
          <input
            className="userinputfiledTop"
            id="slugUrl"
            name="slugUrl"
            type="text"
            required
            placeholder="Slug Url"
            onChange={fielChanged}
          />
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
              required
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
              required
              placeholder="Enter Summary"
              onChange={fielChanged}
            />
          </div>
        </div>
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
              onChange={fielChanged}
            />
          </div>
        </div>
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
              onChange={fielChanged}
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
              onChange={fielChanged}
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
              onChange={fielChanged}
            />
          </div>
        </div>
        {/* text editor */}
        <div className="Generalcontainer">
          <label htmlFor="ArticalDes">Content *</label>
          <CKEditor
            editor={ ClassicEditor }
            data=""
            onReady={ ( editor ) => {
              console.log( "CKEditor5 React Component is ready to use!", editor );
            } }
            onChange={ ( event, editor ) => {
              setPost({...post, 'content':editor.getData()})
            } }
          />
        </div>

        <div className="ArticalCheckbox">
          <input name="isFeatured" type="checkbox" id="isFeatured" onChange={checkBoxChanged}/>
          <label htmlFor="ArticalCheckbox"> Is Featured ? </label>
          <input name="isSponsored" type="checkbox" id="isSponsored"  onChange={checkBoxChanged} />
          <label htmlFor="ArticalCheckbox1"> Is Sponsored ? </label>
        </div>
        <div className="Generalcontainer">
          <select
            name="authorId"
            id="authorName"
            className="userinputfiledBottom"
            onChange={fielChanged}
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
        <div className="Generalcontainer">
          <input
            className="ArticalSubmitbtn"
            type="submit"
            placeholder="Sumit"
          />
        </div>
        {/* <ToastContainer /> */}
      </form>
    </div>
    <div className="articleRigthSection">
        <div>
          <input
            name="isSponsored"
            type="checkbox"
            id="isSponsored"
            checked={titleCheckBox}
          />
          <label htmlFor="ArticalCheckbox1"> Title </label>
        </div>
        <div>
          <input
            name="isSponsored"
            type="checkbox"
            id="isSponsored"
            checked={slugUrlCheckBox}
          />
          <label htmlFor="ArticalCheckbox1"> Slug Url </label>
        </div>
    </div>
    </div>
    </div>
  );
};

export default AddTourpackage;
