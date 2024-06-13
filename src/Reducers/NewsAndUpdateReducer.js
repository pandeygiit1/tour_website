const IntialState = {
    article:[],
    isLoading:false
}

export const NewsAndUpdatesReducer = (state = IntialState ,action)=>{
    switch(action.type){

case "SET_NEWSANDUPDATES_DATA": 
return{
  ...state, article:action.payload
}

        default:
            return state
    }
    }