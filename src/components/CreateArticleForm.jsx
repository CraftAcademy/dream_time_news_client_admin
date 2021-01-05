import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateArticle } from "../modules/CreateArticle";
import { Form, Input, TextArea, Button, Message } from "semantic-ui-react";

const CreateArticleForm = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.createArticleMessage);

  return (
    <>
      <Form
        data-cy="create-article-form"
        onSubmit={(e) => CreateArticle.create(e, dispatch)}
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
          <Message color="green" size="big" data-cy="response-message">
            {message}
          </Message>
        )}
      </Form>
    </>
  );
};

export default CreateArticleForm;
