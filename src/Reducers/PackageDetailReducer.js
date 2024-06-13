const intialPackageDetailsData = {
  PackageDetails: {},
  isLoading: false,
};

export const PackageDetailsReducer = (
  state = intialPackageDetailsData,
  action
) => {
  switch (action.type) {
    case "SET_PACKAGE_DETAIL_DATA_START":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_PACKAGE_DETAIL_DATA":
      return {
        ...state,
        PackageDetails: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const packagePlanValue = {
  PackagePlan: [],
};

export const PackagePlanDetailReducer = (state = packagePlanValue, action) => {
  switch (action.type) {
    case "SET_PACKAGE_PLAN_DETAIL_DATA":
      return {
        PackagePlan: action.payload,
      };
    default:
      return state;
  }
};

const packageImagesValue = {
  PackageImages: [],
};

export const PackageImagesDetailReducer = (
  state = packageImagesValue,
  action
) => {
  switch (action.type) {
    case "SET_PACKAGE_IMAGES_DETAIL_DATA":
      return {
        PackageImages: action.payload,
      };
    default:
      return state;
  }
};

const ArticleByTourPkgValue = {
  ArticleByTourPkg: [],
  totalPages: 0,
};

export const ArticleByTourPkgDetailsReducer = (
  state = ArticleByTourPkgValue,
  action
) => {
  switch (action.type) {
    case "SET_ARTICLE_BY_TOUR_PKG_POST_DATA":
      return {
        ArticleByTourPkg: action.payload,
      };
    default:
      return state;
  }
};

export const TourPkgBookingDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TOUR_PACKAGE_BOOKING_DETAIL_DATA":
      return {
        TourPkgBooking: action.payload,
      };
    default:
      return state;
  }
};
