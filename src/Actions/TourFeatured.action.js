import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";

const startFetchingPackageFeaturedData = (type) => {
  return {
    type: type,
  };
};

export const getPackageFeaturedPostData = (token) => {
  return async (dispatch, getstate) => {
    dispatch(
      startFetchingPackageFeaturedData("SET_PACKAGE_FEATURED_DATA_START")
    );
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + `api/tourpackage-service/tour/package/featured`,
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setPackageFeaturedPostData(data.data, data.data.totalPages));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };
};

const setPackageFeaturedPostData = (data, pages) => {
  return {
    type: "SET_PACKAGE_FEATURED_POST_DATA",
    payload: { data: data, pages: pages },
  };
};

export const getBlogFeaturedPostData = (token) => {
  return async (dispatch, getstate) => {
    try {
      const { data } = await axios({
        method: "get",
        url:
          baseUrl + `api/touristplace-service/tourist/places/articles/featured`,
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setBlogFeaturedPostData(data.data, data.data.totalPages));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };
};

const setBlogFeaturedPostData = (data, pages) => {
  return {
    type: "SET_BLOG_FEATURED_POST_DATA",
    payload: { data: data, pages: pages },
  };
};

export const getPackageFeaturedLocationData = (token) => {
  return async (dispatch, getstate) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + `api/tourpackage-service/tour/package/by/location`,
        params: { location: "Jaipur" },
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setPackageFeaturedLocationData(data.data, data.data.totalPages));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };
};

const setPackageFeaturedLocationData = (data, pages) => {
  return {
    type: "SET_PACKAGE_FEATURED_LOCATION_DATA",
    payload: { data: data, pages: pages },
  };
};
