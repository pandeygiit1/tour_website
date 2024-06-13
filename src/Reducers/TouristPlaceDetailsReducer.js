const intialStateOfTouristPlaceDetails = {
  TouristPlaceDetails: [],
  isLoading: false,
};

export const TouristPlaceDetailsReducer = (
  state = intialStateOfTouristPlaceDetails,
  action
) => {
  switch (action.type) {
    case "SET_TOURIST_PLACES_DETAIL_DATA_START":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_TOURIST_PLACES_DETAIL_DATA":
      return {
        ...state,
        TouristPlaceDetails: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
