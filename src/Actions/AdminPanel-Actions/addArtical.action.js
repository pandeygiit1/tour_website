import axios from "axios";

export const addArticle = (post) => {
  return async (dispatch) => {
    const token = localStorage.getItem("Protectedtoken");
    // console.log("AddArticleHandler token",token)
    // console.log(post)
    try {
      if (token) {
        const resp = await axios({
          method: "POST",
          url: "https://alxtrip.algodox.co.in/api/admin-service/article/add",
          data: post,
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(resp.data.data.id);
        dispatch({ type: "ADD_ARTICLE", payload: resp.data.data.id });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
