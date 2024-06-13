

export const addArticalReducer = (state={articleId:0},actions)=>{
    const {type,payload} = actions;
    console.log(payload)
    switch(type){
case "ADD_ARTICLE":
    return{
        ...state,articleId:payload
    }
    default:return state
    }
}