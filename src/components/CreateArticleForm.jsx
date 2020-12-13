import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {Form, Input, TextArea, Button, Message } from 'semantic-ui-react'

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
    setMessage("Your article was created");
    headers = {
      ...headers,
      "Content-type": "application/json",
      Accept: "application/json",
    };
    try {
      await axios.post(
        "/articles",
        {
          article: {
            title: title,
            sub_title: subtitle,
            content: content,
          },
        },
        {
          headers: headers,
        }
      );
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
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
