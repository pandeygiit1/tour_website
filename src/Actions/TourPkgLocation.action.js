import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";

export const getTourPkgLocation = (token) => {
  return async (dispatch, getstate) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + `api/tourpackage-service/tour/package/location/list`,
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setTourPkgLocation(data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };
};

const setTourPkgLocation = (value) => {
  return { type: "SET_TOUR_PKG_LOCATION", payload: value };
};

export const getTourPkgByLocation = (location, token) => {
  return async (dispatch, getstate) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + `api/tourpackage-service/tour/package/by/location`,
        params: { location: location },
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setTourPkgByLocation(data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };
};

const setTourPkgByLocation = (value) => {
  return { type: "SET_TOUR_PKG_BY_LOCATION", payload: value };
};
