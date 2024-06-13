const TourPkgByLocationValue = {
  TourPkgByLocation: [],
  isLoading: true,
};

export const TourPkgByLocationReducer = (
  state = TourPkgByLocationValue,
  action
) => {
  switch (action.type) {
    case "SET_TOUR_PKG_BY_LOCATION_DATA_START":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_TOUR_PKG_BY_LOCATION":
      return {
        ...state,
        TourPkgByLocation: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const TourPkgLocationValue = {
  TourPkgLocation: [],
};

export const TourPkgLocationReducer = (
  state = TourPkgLocationValue,
  action
) => {
  switch (action.type) {
    case "SET_TOUR_PKG_LOCATION":
      return {
        TourPkgLocation: action.payload,
      };
    default:
      return state;
  }
};
