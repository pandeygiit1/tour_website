const IntialState = {
    carsIsFratured:[],
    isLoading:false
}

export const availableCarReducer = (state = IntialState ,action)=>{
    switch(action.type){

case "SET_AVAILABLECAR_DATA": 
return{
  ...state, carsIsFratured:action.payload
}

        default:
            return state
    }
    }