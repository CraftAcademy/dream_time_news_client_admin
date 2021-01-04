import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, TextArea, Button, Message } from "semantic-ui-react";
import axios from 'axios';
// import ArticlesService from "../modules/ArticlesService";

const CreateArticleForm = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.createArticleMessage);

  const createArticle = async (event) => {
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
  }

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
    </>
  );
};

export default CreateArticleForm;
