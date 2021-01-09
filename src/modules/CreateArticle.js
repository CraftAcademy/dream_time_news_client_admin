import axios from "axios";

const CreateArticle = {
  async create(e, dispatch) {
    e.preventDefault();
    let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
      });
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
            file: encodedImage,
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
