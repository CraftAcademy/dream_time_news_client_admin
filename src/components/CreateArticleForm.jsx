import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, TextArea, Button, Message, Image } from "semantic-ui-react";
import axios from "axios";
// import ArticlesService from "../modules/ArticlesService";

const CreateArticleForm = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const message = useSelector((state) => state.createArticleMessage);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
    });

  const createArticle = async (event) => {
    event.preventDefault();
    let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    try {
      let encodedImage;
      if (image) {
        encodedImage = await toBase64(image);
      }
      let response = await axios.post(
        "/articles",
        {
          article: {
            title: event.target.title.value,
            sub_title: event.target.input_sub_title.value,
            content: event.target.input_content.value,
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
      console.log(err);
    }
  };

  const setImagePreview = (event) => {
    debugger
    setImage(event.target.files[0]);
  };

  return (
    <>
      <Form
        data-cy="create-article-form"
        onSubmit={(event) => createArticle(event)}
      >
        <Form.Field
          data-cy="input-title"
          label="Title"
          control={Input}
          name="title"
          placeholder="Title"
        />
        <br />
        <Form.Field
          data-cy="input-sub-title"
          label="Subtitle"
          control={Input}
          name="input_sub_title"
          placeholder="Sub Title"
        />
        <br />
        <Form.Field
          data-cy="input-content"
          control={TextArea}
          name="input_content"
          placeholder="Content"
        />
        <br />
        <Form.Input
          data-cy="input-image"
          name="image"
          placeholder="Image"
          type="file"
          onChange={setImagePreview}
        />
        <br />
        <Button
          color="green"
          data-cy="create-article-button"
          type="submit"
          value="submit"
        >
          Create Article
        </Button>
        {message && (
          <Message size="big" data-cy="response-message">
            {message}
          </Message>
        )}
      </Form>
      {image && <Image src={URL.createObjectURL(image)} />}
    </>
  );
};

export default CreateArticleForm;
