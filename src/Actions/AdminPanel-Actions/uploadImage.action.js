

export const addImage=(imageData)=>{
   console.log(imageData)
          return async (dispatch)=>{
             const token=localStorage.getItem("Protectedtoken")
             if(token){
              console.log(imageData)
              dispatch({
            type:"ADD_IMAGE",
            payload:imageData
             })
             }

        
          }

}
