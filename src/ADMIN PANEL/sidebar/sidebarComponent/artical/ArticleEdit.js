import React, { useState, useEffect } from "react";
// import "././User/user.css";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
// import { updateArticle } from "../../AaxiosApiListener/AdminApiListener";
// import { imageUpload } from "../../AaxiosApiListener/AdminApiListener";
// import { ToastContainer, toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { getAuthorList } from "../../AaxiosApiListener/AdminApiListener";
import { useParams } from "react-router-dom";
// import { getSearchArticle } from "../../AaxiosApiListener/AdminApiListener";
import {FiUploadCloud} from "react-icons/fi"

const ArticleEdit = () => {


  const titleData = useParams();
  console.log(titleData)

  const [file, setfile] = useState(null);
  const [type, setType] = useState("");
  const [articleId, setArticleId] = useState("");
  const [title, setTitle] = useState(null);
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [imgDescription, setImgDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [content, setContent] = useState("");
  const [isFeatured, setIsFeatured] = useState();
  const [isSponsored, setIsSponsored] = useState();
  const [authorId, setAuthorId] = useState("");




  const changeData = {
    articleId: articleId,
    authorId: authorId,
    title: title,
    summary: summary,
    description: description,
    imgDescription: imgDescription,
    categoryName: categoryName,
    content: content,
    isFeatured: isFeatured ? 1 : 0,
    isSponsored: isSponsored ? 1 : 0,
  };



  const imageData = {
    id: articleId,
    upload: file,
    screenName: "article",
    type: type,
  };

  // useEffect(() => {
  //   generateToken().then((resp) => {
  //     if (resp) {
  //       const token = JSON.stringify(resp.data.token);
  //       getSearchArticle(token, titleData)
  //         .then((data) => {
  //           console.log("ArticalEditData:",data)
  //           setTitle(data?.data?.article?.title);
  //           setSummary(data?.data?.article?.summary);
  //           setImgDescription(data?.data?.article?.imgDescription);
  //           setCategoryName(data?.data?.article?.categoryName);
  //           setDescription(data?.data?.article?.description);
  //           setContent(data?.data?.article?.content);
  //           setArticleId(data?.data?.article?.articleId);
  //           setIsFeatured(data?.data?.article?.isFeatured===1 ? true : false)
  //           setIsSponsored(data?.data?.article?.isSponsored===1 ? true : false)
  //           setfile(data?.data?.article?.headerImgUrl)
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   });
  // }, [titleData]);

  // useEffect(() => {
  //   generateToken().then((resp) => {
  //     if (resp) {
  //       const token = JSON.stringify(resp.data.token);
  //       updateArticle(token, changeData)
  //         .then((data) => {
  //           console.log(data);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   });
  // }, [changeData]);

  // useEffect(() => {
  //   generateToken().then((resp) => {
  //     if (resp) {
  //       const token = JSON.stringify(resp.data.token);
  //       if (imageData.upload !== null) {
  //         imageUpload(token, imageData)
  //           .then((data) => {
  //             // setfile(data)
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           });
  //       }
  //     }
  //   });
  // }, [imageData]);

  // useEffect(() => {
  //   generateToken().then((resp) => {
  //     if (resp) {
  //       const token = JSON.stringify(resp.data.token);
  //       getAuthorList(token)
  //         .then((data) => {
  //           // console.log(data);
  //           setAuthor(data);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   });
  // }, []);

  console.log(imageData);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    // try {
    //   generateToken().then((resp) => {
    //     if (resp) {
    //       const token = JSON.stringify(resp.data.token);
    //       updateArticle(token, changeData)
    //         .then((data) => {
    //           if (data?.data?.isUpdate === "true") {
    //             toast.success("Article Update Successfully!", {
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
    //} catch (e) {
     // alert(e);
    //}
  };

  console.log("isFeatured   "+isFeatured)
  console.log("isSponsored   "+ isSponsored)


  return (
    <div>
      
      <div className="articletopbtnsection">
      <button className="topbtn1">Preview</button>
       <button className="topbtn2">Publish</button>
      </div>

      <div style={{ display: "flex" }}>
        <div className="ArticalContainer usercontainer1">
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="Generalcontainer">
              <input
                className="userinputfiled"
                id="title"
                name="title"
                type="text"
                placeholder="title
                ]"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              
            </div>
            <div>
              
            </div>
            {/* <div className="Generalcontainer">
              <input
                className="userinputfiled"
                id="categoryName"
                name="categoryName"
                type="text"
                value={categoryName}
                placeholder="Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div> */}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  placeholder="Summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>
            </div>
            <div className="generalflexcontainer">
              <div className="sumarycontainerbox1">
                <label htmlFor="headerimg0" className="textcolor">
                  Header Image
                </label>
                <div className="sumarycontainertaxt1 labelcontainerimage">
                  <label>
                    <input
                      className="custom-file-input"
                      title="Upload a hight resolution Image"
                      id="headerImgUrl"
                      name="upload"
                      type="file"
                      accept="image/png, image/jpg, image/gif, image/jpeg"
                      onChange={(e) => {
                        setfile(e.target.files[0]);
                        setType(e.target.id);
                      }}
                    />
                    {
                      file ? (<img className="fileimg" src={file}/>) : (<><div className = "iconssize">< FiUploadCloud/></div>
                      <div>Upload a hight resolution Image</div> </>)
                    }
                  </label>
                </div>
              </div>
              <div className="sumarycontainerbox">
                <label htmlFor="Summary1" className="textcolor">
                  Image Description
                </label>
                <textarea
                  className="sumarycontainertaxt"
                  id="imgDescription"
                  name="imgDescription"
                  type="text"
                  placeholder="Image Description..."
                  value={imgDescription}
                  onChange={(e) => setImgDescription(e.target.value)}
                />
              </div>
            </div>
            
            <div className="Generalcontainer">
              <label htmlFor="ArticalDes">Content *</label>
              <CKEditor
                editor={ClassicEditor}
                data={content}
                onReady={(editor) => {
                  console.log(
                    "CKEditor5 React Component is ready to use!",
                    editor
                  );
                }}
                onChange={(event, editor) => {
                  setContent(editor.getData());
                }}
              />
            </div>

            <div className="ArticalCheckbox">
              <input
                name="isFeatured"
                type="checkbox"
                id="isFeatured"
                defaultChecked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
              />
              <label htmlFor="ArticalCheckbox"> Is Featured ? </label>
            </div>
            <div>
              <input
                name="isSponsored"
                type="checkbox"
                id="isSponsored"
                defaultChecked={isSponsored}
                onChange={(e) => setIsSponsored(e.target.checked)}
              />
              <label htmlFor="ArticalCheckbox1"> Is Sponsored ? </label>
            </div>
            <div className="Generalcontainer">
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
                      <option key={author.authorId} value={author.authorId}>
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
                placeholder="Update"
              />
            </div>
            {/* <ToastContainer /> */}
          </form>
        </div>
        <div className="articleRigthSection">right side box</div>
      </div>
    </div>
  );
};

export default ArticleEdit;
