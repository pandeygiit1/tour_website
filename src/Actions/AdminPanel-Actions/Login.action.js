import axios from "axios";
import { createBrowserHistory } from "history";

// const baseUrl = "https://alxtrip.algodox.co.in/";
// const deviceId = {
//     'deviceId': 'grc5VMavOnePlus9Pro2021KmRA'
// }

export const Logininfo = (userData) => {
  const history = createBrowserHistory();

  return async (dispatch, getstate) => {
    try {
      const body = { emailId: userData.emailId, password: userData.password };
      const resp = await axios({
        method: "POST",
        url: "https://alxtrip.algodox.co.in/admin/login",
        data: body,
      });
      console.log(resp.data);

      if (resp?.data?.data?.emailId === userData.emailId) {
        localStorage.setItem("Protectedtoken", resp.data.data.token);
        localStorage.setItem("userinfo", JSON.stringify(resp.data.data));
        dispatch(addUser(resp?.data?.data));
        return "/admin";
      }

      if (resp?.data?.data?.emailId !== userData.emailId) {
        alert("Your Email is not Register!");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const addUser = (value) => {
  return {
    type: "LOGIN_DATA",
    payload: value,
  };
};
