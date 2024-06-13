const intialPackageSidebarData = {
  PackagePost: [],
  totalPages: 0,
  isLoading: false,
};

export const PackageSidebarReducer = (
  state = intialPackageSidebarData,
  action
) => {
  switch (action.type) {
    case "SET_PACKAGE_POST_DATA_START":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_PACKAGE_POST_DATA":
      return {
        ...state,
        PackagePost: action.payload.data,
        totalPages: action.payload.pages,
        isLoading: false,
      };
    default:
      return state;
  }
};
