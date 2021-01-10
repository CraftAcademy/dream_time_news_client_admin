import axios from "axios";
import toBase64 from "./toBase64"

const CreateArticle = {
  async create(e, dispatch) {
    e.preventDefault();
    let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

    try {
      let encodedImage;
      if (e.target.file_input.files[0]) {
        encodedImage = await toBase64(e.target.file_input.files[0]);
      }
      let response = await axios.post(
        "/articles",
        {
          article: {
            title: e.target.title.value,
            sub_title: e.target.input_sub_title.value,
            content: e.target.input_content.value,
            image: encodedImage,
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
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: err.response.data.message,
      });
    }
  },
};

export { CreateArticle };
