import axios from "axios";

const ArticlesService = {
  async create(event, dispatch) {
    event.preventDefault();
    let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    try {
     let response = await axios.post(
        "/articles",
        {
          article: {
            title: event.target.title.value,
            sub_title: event.target.input_sub_title.value,
            content: event.target.input_content.value,
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

export default ArticlesService;
