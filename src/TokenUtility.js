import axios from "axios";

const deviceId = {
  deviceId: "gr",
};

const baseUrl = "https://alxtrip.algodox.co.in/";

export const generateToken = (data) => {
  return axios
    .post(baseUrl + "jwt/generate-token", data, { headers: deviceId })
    .then((Response) => Response.data);
};
