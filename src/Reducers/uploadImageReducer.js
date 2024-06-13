
export  const uploadImageReducer=(state={imageData:{}},actions)=>{
         const {type,payload}=actions
        switch (type) {
            case "ADD_IMAGE":
                return {
                    ...state,imageData:payload
                }
            default: return state
               
        }
}

