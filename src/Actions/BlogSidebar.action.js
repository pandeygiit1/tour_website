import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";

const startFetchingBlodSidebardata = (type) => {
  return {
    type: type,
  };
};

export const getBlogSidebarData = (page, token) => {
  console.log(page);
  return async (dispatch, getstate) => {
    dispatch(startFetchingBlodSidebardata("SET_BLOGSIDEBAR_DATA_START"));

    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + `api/touristplace-service/tourist/places/list/${page}`,
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setBlogSidebarData(data.data.content));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

const setBlogSidebarData = (value) => {
  return { type: "SET_BLOGSIDEBAR_DATA", payload: value };
};

//==================================================================

export const getBlogPostData = (page, token) => {
  console.log(page);
  return async (dispatch, getstate) => {
    try {
      const { data } = await axios({
        method: "get",
        url:
          baseUrl +
          `api/touristplace-service/tourist/places/articles/list/${page}`,
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setBlogPostData(data.data.content, data.data.totalPages));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };
};

const setBlogPostData = (data, pages) => {
  return { type: "SET_BLOGPOST_DATA", payload: { data: data, pages: pages } };
};
