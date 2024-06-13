import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";

const startFetchingBlodDetaildata = (type) => {
  return {
    type: type,
  };
};

export const getBlogDetailsData = (slugUrl, token) => {
  return async (dispatch, getstate) => {
    dispatch(startFetchingBlodDetaildata("SET_BLOG_DETAIL_DATA_START"));

    try {
      const getData = await axios({
        method: "get",
        url:
          baseUrl + `api/touristplace-service/tourist/places/articles/detail`,
        params: { slugUrl: slugUrl },
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(getData.data);
      dispatch(setBlogDetailData(getData.data.data));
      if (getData.data) {
        const { data } = await axios({
          method: "get",
          url:
            baseUrl +
            `api/tourpackage-service/tour/package/by/${getData.data.data.id}`,
          headers: {
            Authorization: "Bearer " + JSON.parse(token),
          },
        });
        console.log(data.data);
        dispatch(setTourPkgByArticlePostData(data.data, data.data.totalPages));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

const setBlogDetailData = (value) => {
  return { type: "SET_BLOG_DETAIL_DATA", payload: value };
};

const setTourPkgByArticlePostData = (data, pages) => {
  return {
    type: "SET_TOUR_PKG_BY_ARTICLE_POST_DATA",
    payload: { data: data, pages: pages },
  };
};
