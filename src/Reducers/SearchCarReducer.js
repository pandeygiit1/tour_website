const IntialState = {
    SourceCities:[],
    isLoading:false
}

export const SearchCarReducer = (state = IntialState ,action)=>{
    switch(action.type){

case "SET_SEARCHCAR_DATA": 
return{
  ...state, SourceCities:action.payload
}

        default:
            return state
    }
    }