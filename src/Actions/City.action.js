import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";

export const getCityList = (token) => {
  return async (dispatch, getstate) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + `api/carrental-service/city/list`,
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setCityList(data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };
};

const setCityList = (value) => {
  return { type: "SET_CITY_LIST", payload: value };
};
