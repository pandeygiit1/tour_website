
export const draftArticalReducer = (state={articalList:[]},actions)=>{
const {type,payload} = actions;
switch(type){
case "DRAFT_ARTICLE":
    return{
        ...state,articalList:payload
    }
    default:return state;
}
}