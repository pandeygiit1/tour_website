import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";

const startFetchingBlodDetaildata = (type) => {
  return {
    type: type,
  };
};

export const getPackageDetailsData = (slugUrl, token) => {
  return async (dispatch, getstate) => {
    dispatch(startFetchingBlodDetaildata("SET_PACKAGE_DETAIL_DATA_START"));

    try {
      const getData = await axios({
        method: "get",
        url: baseUrl + `api/tourpackage-service/tour/package/detail`,
        params: { slugUrl: slugUrl },
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(getData.data);
      dispatch(setPackageDetailData(getData.data.data));
      if (getData.data) {
        const { data } = await axios({
          method: "get",
          url:
            baseUrl +
            `api/touristplace-service/tourist/places/articles/tour/package/${getData.data.data.id}`,
          headers: {
            Authorization: "Bearer " + JSON.parse(token),
          },
        });
        console.log(data.data);
        dispatch(setArticleByTourPkgPostData(data.data));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

const setPackageDetailData = (value) => {
  return { type: "SET_PACKAGE_DETAIL_DATA", payload: value };
};

const setArticleByTourPkgPostData = (value) => {
  return { type: "SET_ARTICLE_BY_TOUR_PKG_POST_DATA", payload: value };
};

export const getPackagePlanDetailData = (tourPkgId, token) => {
  console.log(tourPkgId);
  return async (dispatch, getstate) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + `api/tourpackage-service/tour/package/plan/${tourPkgId}`,
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setPackagePlanDetailData(data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };
};

const setPackagePlanDetailData = (value) => {
  return { type: "SET_PACKAGE_PLAN_DETAIL_DATA", payload: value };
};

export const getPackageImageDetailData = (tourPkgId, token) => {
  console.log(tourPkgId);
  return async (dispatch, getstate) => {
    try {
      const { data } = await axios({
        method: "get",
        url:
          baseUrl + `api/tourpackage-service/tour/package/images/${tourPkgId}`,
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
      console.log(data.data);
      dispatch(setPackageImageDetailData(data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };
};

const setPackageImageDetailData = (value) => {
  return { type: "SET_PACKAGE_IMAGES_DETAIL_DATA", payload: value };
};

export async function getTourPackageBookingDetailData(data, token) {
  try {
    const resp = await axios({
      method: "POST",
      url: "https://alxtrip.algodox.co.in/api/tourpackage-service/tour/package/booking",
      data: data,
      headers: {
        Authorization: "Bearer " + JSON.parse(token),
      },
    });
    console.log(resp.data);
    return resp.data;
    // dispatch(setTourPackageBookingDetailData(data.data));
  } catch (error) {
    console.log(error);
  }
  console.log("Form submitted with data:", data);
}

const setTourPackageBookingDetailData = (value) => {
  return { type: "SET_TOUR_PACKAGE_BOOKING_DETAIL_DATA", payload: value };
};
