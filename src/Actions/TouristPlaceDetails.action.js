import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";

const startFetchingTouristPlaceDetailsData = (type) => {
  return {
    type: type,
  };
};

export const getTouristPlaceDetailsData = (slugUrl, token) => {
  return async (dispatch, getstate) => {
    dispatch(
      startFetchingTouristPlaceDetailsData(
        "SET_TOURIST_PLACES_DETAIL_DATA_START"
      )
    );

    try {
      const getData = await axios({
        method: "get",
        url:
          baseUrl +
          `api/touristplace-service/tourist/places/articles/by/slug-url`,
        params: { slugUrl: slugUrl },
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(getData.data);
      dispatch(setTouristPlaceDetailsData(getData.data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

const setTouristPlaceDetailsData = (value) => {
  return { type: "SET_TOURIST_PLACES_DETAIL_DATA", payload: value };
};
