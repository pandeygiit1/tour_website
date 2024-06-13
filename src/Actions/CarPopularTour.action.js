import axios from "axios"


// const startFetchingBlodSidebardata = (type)=>{
//   return{
//     type:type
//   }
// }

export const getPopularTour = (page)=>{
  
 

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
              url: baseUrl + `rest/webservices/tour/package/is-featured`,
              headers: {
                Authorization: 'Bearer ' + token
              }
            });
            // console.log(data.data.article)
            dispatch(setPopularTourData(data.data.tourPackage))
           
          } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error as needed
          }
     
    }
}
const setPopularTourData =  (value)=>{

    return {type:"SET_POPULARTOUR_DATA",payload:value}
}
