import axios from "axios";

const CreateArticle = {
  async create(e, dispatch) {
    e.preventDefault();
    let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    try {
      let response = await axios.post(
        "/articles",
        {
          article: {
            title: e.target.title.value,
            sub_title: e.target.input_sub_title.value,
            content: e.target.input_content.value,
          },
        },
        {
          headers: headers,
        }
      );
      dispatch({
        type: "SET_ARTICLE_MESSAGE",
        payload: response.data.message,
      });
    } catch (err) {
      console.log(err)
    }
  },
};

export { CreateArticle };
