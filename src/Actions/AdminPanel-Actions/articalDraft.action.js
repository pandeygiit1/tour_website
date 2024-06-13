import axios from "axios"


export const articalDraft = (page)=>{
    return async (dispatch)=>{
        const token = localStorage.getItem("Protectedtoken")
        try {
            if(token){
                  const resp = await axios({
                        method: "GET",
                        url: `https://alxtrip.algodox.co.in/api/admin-service/article/draft/${page}`,
                        headers: {
                              Authorization:
                                "Bearer " + token ,
                            },
                    })
                    console.log(resp.data.data.content)
                    dispatch({type:"DRAFT_ARTICLE",payload:resp.data.data.content})
      } 
          }catch(error) {
            console.log(error)
      }
    }
}