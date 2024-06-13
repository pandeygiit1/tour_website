import axios from "axios"
import "./image-modal.style.css"
import { useEffect, useState } from "react"
import { FiUploadCloud } from "react-icons/fi"
import { useDispatch } from "react-redux"
import ProgressBar from "@ramonak/react-progress-bar";
import { addImage } from "../../../../../../src/Actions/AdminPanel-Actions/uploadImage.action"
import { useNavigate } from "react-router-dom"


const ImageLibrary = ({ closeModal,data }) => {
const [pageshow,setPageShow] = useState(data)
  const [showloader, setShowLoader] = useState(false)
  const [loadervalue, setLoaderValue] = useState(0)
  const [show, setShow] = useState(true)
  const [file, setfile] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState('')
  const [imageLibrary, setImageLibrary] = useState([])
  const [uploadImgData, setUploadImgData] = useState()
  const [count, setCount] = useState(0)
  const [searchFaild, setSearchFaild] = useState()
  const [selectImgBoxShow, setSelectImgBoxShow] = useState(false)
  const [selectImgById, setSelectImgById] = useState(null)
  const { token } = JSON.parse(localStorage.getItem("userinfo"));
const navigate = useNavigate()

  const [Data, setData] = useState({
    imgName: "",
    altText: ""
  })

  const dispatch = useDispatch()

  // const hidefunc = () => {
  //   closeModal();
  // }


  const previousHandler = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const nextHandler = () => {
    // if(count>10){
    setCount(count + 1)
    // }
  }

  const imageLibrarySearchHandler = (event) => {
    const searchFaild = event.target.value.toLocaleLowerCase()
    setSearchFaild(searchFaild)

  }



  const UploadImageHandler = async () => {
    setShowLoader(true)
    setLoaderValue(20)
    const data = { upload: file, imgName: Data.imgName, altTag: Data.altText };
    try {
      const Response = await axios({
        method: "post",
        url: "https://alxtrip.algodox.co.in/api/admin-service/img/upload",
        data: data,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": `multipart/form-data; boundary=<calculated when request is sent>`,
        },
      });
      if (Response.data) {
        setUploadImgData(Response.data.data)
        setData({
          imgName: "",
          altText: ""
        });
      }
    } catch (response) {
      console.log(response);
      console.log("api status " + response.status);
    }
    setLoaderValue(100)
    setShow(true)
  };

  const selectImgHandler = (id) => {
    setSelectImgBoxShow(true)
    const selectImage = imageLibrary.find((item, index) => {
      return item.id === id
    })
    setSelectImgById(selectImage)
  }

  const uploadImageInputHandler = (e) => {

    const { name, value } = e.target
    setData({ ...Data, [name]: value })

  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setfile(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const UploadBannerImageHandler = (imgData) => {
    // closeModal();
     setPageShow(false)
    navigate("/admin/article/create")
    dispatch(addImage(imgData))
    
  }


  useEffect(() => {
    const ImageLibraryHandler = async () => {
      try {
        const fetchResp = await axios.get(
          `https://alxtrip.algodox.co.in/api/admin-service/img/list?page=${count}`, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
        );

        setImageLibrary(fetchResp.data.data.content)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    ImageLibraryHandler();
  }, [count]);

  // useEffect(()=>{
  //    const getImageBySearch=async()=>{
  //   const searchByImage=await axios.get(`https://alxtrip.algodox.co.in/api/admin-service/img/search?imgName=${searchFaild}`,
  //   )

  //    }  

  //    getImageBySearch()
  // },[searchFaild])

  return (
    <>
    {
      pageshow? 
      <> 
      <div className="wrapp-container" onClick={()=>setPageShow(false)} > </div>

      <div className="imageLibrary-container" >
        <header >
          <div className="imageTextStyleOuter">
            <h2 className="imageTextStyleInner">Images</h2>
          </div>
          <div className="imageLibrary-topBtn">
            <div>Image Library</div>
            {
              show ? <button className="btnStyle" onClick={() => setShow(false)}>Upload Image</button> : <button className="btnStyle" onClick={() => setShow(true)}> Back to Media Library</button>
            }
          </div>
        </header>
        {
          show ? (
            <>
              <main>
                <div className="imageLibrary-main-conatiner">
                  <div className="mainTopBox">
                    <p className="mainTopBox-para">.</p>
                    <div className="mainTopBox-input">
                      <input className="inputStyle" type="search" placeholder="Search by name or alt text" onChange={imageLibrarySearchHandler} />
                    </div>

                  </div>
                  <div className="imageLibraryData">
                    <div className="imagesBox">
                      {
                        imageLibrary.map((item) => {

                          const { imgName, imgUrl, id } = item

                          return (
                            <>
                              <div className="imageLibraryItem"  >
                                <img className="imageLibraryItem-img" src={imgUrl} onClick={() => selectImgHandler(id)} />
                                <div className="imageLibraryItem-text">
                                  <h5>{imgName.slice(0, 12)}...</h5>
                                </div>

                              </div>
                            </>
                          )
                        }
                        )}
                    </div>
                    {
                      selectImgBoxShow && (

                        <>

                          <div className="imageSelectBox">

                            <div className="selectImage">
                              <img src={selectImgById.imgUrl} height="190" width="210" />
                              <div className="imageRemoveBtn" onClick={() => setSelectImgBoxShow(false)}><i class="ri-close-circle-fill"></i></div>
                            </div>
                            <div className="imageDetailsInput">
                              <input className="imageDetailsInput-input" type="text" name="imgName" placeholder="imgName" value={selectImgById.imgName} />
                              <input className="imageDetailsInput-input" type="text" name="altText" placeholder="altText" value={selectImgById.altTag} />
                            </div>
                            <div className="imageDetails">
                              <p>Uploaded on :</p>
                              <p>Uploaded by :</p>
                              <p>Formte :</p>
                            </div>
                            <div className="imageDeleteBtn"><i class="ri-delete-bin-6-line"></i> Delete</div>


                          </div>
                        </>
                      )
                    }



                  </div>
                </div>
              </main>
              <footer>
                <div className="imageLibrary-footer-container">

                  <div>
                    <button className="btnStyle" onClick={previousHandler}>Prev</button>
                    <button className="btnStyle" onClick={nextHandler}>Next</button>
                  </div>

                  <div>
                    <button className="btnStyle" onClick={()=>UploadBannerImageHandler(selectImgById)}>Upload Banner Image</button>
                  </div>

                </div>
              </footer>

            </>
          ) : (
            <>

              <main className="UploadImage-main-conatiner">

                <div className="main-conatiner-top-box">
                  <div className={!file ? "top-box-upload" : "top-box-unupload"}> <span className={!file ? "top-box-spanStyle-upload" : "top-box-spanStyle-unupload"}>1</span>Upload Images</div>

                  <div className={file ? "top-box-upload" : "top-box-unupload"}><span className={file ? "top-box-spanStyle-upload" : "top-box-spanStyle-unupload"}>2</span>Update Info</div>
                </div>


                {
                  !file ? (
                    <div className="main-conatiner-bottom-box">
                      <div className="main-conatiner-uploadbox">
                        <label >
                          <input
                            className="custom-file-input"
                            accept="image/png, image/jpg, image/gif, image/jpeg"
                            title="Upload a hight resolution Image"
                            id="headerImgUrl"
                            name="upload"
                            type="file"
                            onChange={handleImageChange}
                          />
                          <div className="UploadImage-text">
                            <div className="iconssize"><  FiUploadCloud /></div>
                            <h3 className="UploadImage-text-headdingStyle" >Upload Media</h3>
                            <div>Only .png,.jpg,.webp,.gif images can be uploaded.</div>
                            <div>Recommended image size : 860px X 484px</div>
                          </div>

                        </label>

                      </div>

                    </div>
                  ) : (
                    <>
                      <div className="main-conatiner-infobox">

                        <div className="infobox-img">
                          <img src={image} alt={file.name} />
                        </div>
                        <div className="infobox-wrapper">
                          <input className="infobox-input" type="text" placeholder="Enter img name" name="imgName" value={file.name} onChange={uploadImageInputHandler} />

                          <input className="infobox-input" type="text" placeholder="Enter alt text" name="altText" value={Data.altText} onChange={uploadImageInputHandler} />
                        </div>

                        <button className="infobox-btn" type="submit" onClick={UploadImageHandler}>Finish Uploading</button>
                        <p className="infobox-para">Image upload will only be completed after alt text </p>



                      </div>
                      {
                        showloader ? <div style={{ width: "600px", marginLeft: "350px" }}><ProgressBar bgColor="red" completed={loadervalue} /></div> : ""
                      }


                    </>)

                }
              </main>
            </>
          )
        }
      </div></> :""
    }
     
    </>
  )
}

export default ImageLibrary