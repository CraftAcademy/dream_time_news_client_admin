import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createArticle } from '../modules/createArticle'
import { Form, Input, TextArea, Button, Message } from 'semantic-ui-react'

const CreateArticleForm = () => {
  const [message, setMessage] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [content, setContent] = useState();

  let headers = useSelector((state) => state.currentUser);

  const saveArticle = async (e) => {
    e.preventDefault();
    setTitle(e.target.title.value);
    setSubtitle(e.target.input_sub_title.value);
    setContent(e.target.input_content.value);

    headers = {
      ...headers,
      "Content-type": "application/json",
      Accept: "application/json",
    };

    let params = {
      article: {
        title: title,
        sub_title: subtitle,
        content: content,
      }
    }

    let response = await createArticle(headers, params)
    setMessage(response)
  };

  return (
    <>
      <Form data-cy="create-article-form" onSubmit={(e) => saveArticle(e)}>
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
        <Button color="green"
          data-cy="create-article-button"
          type="submit"
          value="submit">
          Create Article
        </Button>
        {message &&
          <Message
            color="green"
            size="big"
            data-cy="response-message">{message}
          </Message>
        }
      </Form>
    </>
  );
};

export default CreateArticleForm;
