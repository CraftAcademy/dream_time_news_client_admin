import axios from "axios";

const createArticle = async (headers, params) => {
  let response = await axios.post("/articles", params, {
    headers: headers,
  });
  return response.data.message;
};

export { createArticle };
