const cityListValue = {
  CityList: [],
};

export const CityListReducer = (state = cityListValue, action) => {
  switch (action.type) {
    case "SET_CITY_LIST":
      return {
        CityList: action.payload,
      };
    default:
      return state;
  }
};
