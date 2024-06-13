const IntialState = {
    tourPackage:[],
    isLoading:false
}

export const CarPopularTourReducer = (state = IntialState ,action)=>{
    switch(action.type){

case "SET_POPULARTOUR_DATA": 
return{
  ...state, tourPackage:action.payload
}

        default:
            return state
    }
    }