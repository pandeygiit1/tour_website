import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";

export async function saveContactData(data, token) {
  try {
    const resp = await axios({
      method: "POST",
      url: baseUrl + "api/user-service/contact/add",
      data: data,
      headers: {
        Authorization: "Bearer " + JSON.parse(token),
      },
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
  console.log("Form submitted with data:", data);
}
