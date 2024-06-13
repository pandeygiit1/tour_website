const intialStateofBlogsidebar = {
  Blogsidebar: [],
  isLoading: false,
};

export const BlogsidebarReducer = (
  state = intialStateofBlogsidebar,
  action
) => {
  switch (action.type) {
    case "SET_BLOGSIDEBAR_DATA_START":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_BLOGSIDEBAR_DATA":
      return {
        ...state,
        Blogsidebar: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const intialStateofBlogpost = {
  BlogPost: [],
  totalPages: 0,
};

export const BlogpostReducer = (state = intialStateofBlogpost, action) => {
  switch (action.type) {
    case "SET_BLOGPOST_DATA":
      return {
        ...state,
        BlogPost: action.payload.data,
        totalPages: action.payload.pages,
      };
    default:
      return state;
  }
};
