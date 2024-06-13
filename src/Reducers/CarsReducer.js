const IntialState = {
    rentalCars:[],
    isLoading:false
}

export const CarsReducer = (state = IntialState ,action)=>{
    switch(action.type){

case "SET_CARS_DATA": 
return{
  ...state, rentalCars:action.payload
}

        default:
            return state
    }
    }