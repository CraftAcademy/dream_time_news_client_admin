import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateArticle } from '../modules/CreateArticle';
import { Form, Input, TextArea, Button, Message } from 'semantic-ui-react';

const CreateArticleForm = () => {
  const dispatch = useDispatch();
  const { createArticleMessage, errorMessage } = useSelector((state) => state);

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
        <Form.Input
          data-cy="file-input"
          name="file-input"
          placeholder="Image"
          type="file"
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
        {createArticleMessage && (
          <Message color="green" size="big" data-cy="response-message">
            {createArticleMessage}
          </Message>
        )}
        {errorMessage && (
          <Message color="red" size="big" data-cy="response-message">
            {errorMessage}
          </Message>
        )}
      </Form>
    </>
  );
};

export default CreateArticleForm;
