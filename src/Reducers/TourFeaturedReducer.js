const intialStateOfPackageFeaturedPost = {
  PackageFeaturedPost: [],
  totalPages: 0,
  isLoading: false,
};

export const PackageFeaturedPostReducer = (
  state = intialStateOfPackageFeaturedPost,
  action
) => {
  switch (action.type) {
    case "SET_PACKAGE_FEATURED_DATA_START":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_PACKAGE_FEATURED_POST_DATA":
      return {
        ...state,
        PackageFeaturedPost: action.payload.data,
        totalPages: action.payload.pages,
        isLoading: false,
      };
    default:
      return state;
  }
};

const intialStateOfBlogFeaturedPost = {
  BlogFeaturedPost: [],
  totalPages: 0,
};

export const BlogFeaturedPostReducer = (
  state = intialStateOfBlogFeaturedPost,
  action
) => {
  switch (action.type) {
    case "SET_BLOG_FEATURED_POST_DATA":
      return {
        ...state,
        BlogFeaturedPost: action.payload.data,
        totalPages: action.payload.pages,
      };
    default:
      return state;
  }
};

const intialStateOfPackageFeaturedLocation = {
  PackageFeaturedLocation: [],
  totalPages: 0,
};

export const PackageFeaturedLocationReducer = (
  state = intialStateOfPackageFeaturedLocation,
  action
) => {
  switch (action.type) {
    case "SET_PACKAGE_FEATURED_LOCATION_DATA":
      return {
        ...state,
        PackageFeaturedLocation: action.payload.data,
        totalPages: action.payload.pages,
      };
    default:
      return state;
  }
};
