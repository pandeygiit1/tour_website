const intialStateOfBlogDetails = {
  BlogDetails: {},
  isLoading: false,
};

export const BlogDetailsReducer = (
  state = intialStateOfBlogDetails,
  action
) => {
  switch (action.type) {
    case "SET_BLOG_DETAIL_DATA_START":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_BLOG_DETAIL_DATA":
      return {
        ...state,
        BlogDetails: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const intialStateOfTourPackage = {
  TourPackage: [],
  totalPages: 0,
};

export const BlogDetailsTourPackageReducer = (
  state = intialStateOfTourPackage,
  action
) => {
  switch (action.type) {
    case "SET_TOUR_PKG_BY_ARTICLE_POST_DATA":
      return {
        ...state,
        TourPackage: action.payload.data,
        totalPages: action.payload.pages,
      };
    default:
      return state;
  }
};

// export const BlogDetailsReducer = (state = { BlogDetails: {} }, action) => {
//   switch (action.type) {
//     case "SET_BLOG_DETAIL_DATA_START":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case "SET_BLOG_DETAIL_DATA":
//       return {
//         BlogDetails: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const IntialState = {
//   TourPackage: [],
//   totalPages: 0,
//   isLoading: false,
// };

// export const BlogDetailsTourPackageReducer = (state = IntialState, action) => {
//   switch (action.type) {
//     case "SET_TOUR_PKG_BY_ARTICLE_POST_DATA":
//       return {
//         ...state,
//         TourPackage: action.payload.data,
//         totalPages: action.payload.pages,
//         isLoading: false,
//       };
//     default:
//       return state;
//   }
// };
