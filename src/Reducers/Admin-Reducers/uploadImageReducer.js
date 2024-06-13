
export  const uploadImageReducer=(state={imageData:null},actions)=>{
         const {type,payload}=actions
         console.log(payload)
        switch (type) {
            case "ADD_IMAGE":
                return {
                    ...state,imageData:payload
                }
            default: return state
               
        }
}

