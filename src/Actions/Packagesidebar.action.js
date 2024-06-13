import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";

const startFetchingPackagePostData = (type) => {
  return {
    type: type,
  };
};

export const getPackagePostData = (page, token) => {
  console.log(page);
  return async (dispatch, getstate) => {
    dispatch(startFetchingPackagePostData("SET_PACKAGE_POST_DATA_START"));
    try {
      // Get Data
      const { data } = await axios({
        method: "get",
        url: baseUrl + `api/tourpackage-service/tour/package/list/${page}`,
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setPackagePostdata(data.data.content, data.data.totalPages));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };
};

const setPackagePostdata = (data, pages) => {
  return {
    type: "SET_PACKAGE_POST_DATA",
    payload: { data: data, pages: pages },
  };
};
