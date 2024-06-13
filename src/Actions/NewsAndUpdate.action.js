import axios from "axios"


// const startFetchingBlodSidebardata = (type)=>{
//   return{
//     type:type
//   }
// }

export const getNewsAndUpdate = (page)=>{
  
 

    return async (dispatch,getstate)=>{

    //   dispatch(startFetchingBlodSidebardata("SET_BLOGSIDEBAR_DATA_START"))
    console.log("dispatch")

        const baseUrl = "https://alxtrip.algodox.co.in/api/alxtrip-customer/";

        const headers = {
            'deviceId': 'grc5VMavOnePlus9Pro2021KmRA'
        }

        try {
            // Generate Token
            const tokenResponse = await axios.post(
              baseUrl + "jwt/generateToken",
              {},
              {
                headers: headers
              }
            );
      console.log(tokenResponse)
            const token = tokenResponse.data.data.token;
      console.log(token)
            // Get Data
            const { data } = await axios({
              method: 'get',
              url: baseUrl + `rest/webservices/blog/list/is-featured`,
              headers: {
                Authorization: 'Bearer ' + token
              }
            });
            // console.log(data.data.article)
            dispatch(setNewsAndUpdateData(data.data.article))
           
          } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error as needed
          }
     
    }
}
const setNewsAndUpdateData =  (value)=>{

    return {type:"SET_NEWSANDUPDATES_DATA",payload:value}
}
