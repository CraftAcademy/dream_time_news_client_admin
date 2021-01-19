import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateArticle } from "../modules/CreateArticle";
import {
  Form,
  Input,
  TextArea,
  Button,
  Message,
  Image,
  Container,
  Divider,
} from "semantic-ui-react";

const CreateArticleForm = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const { createArticleMessage, errorMessage } = useSelector((state) => state);

  const setImagePreview = (e) => {
    setImage(e.target.files[0]);
  };

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
        <Form.Field
          data-cy="input-sub-title"
          label="Subtitle"
          control={Input}
          name="input_sub_title"
          placeholder="Sub Title"
        />
        <Form.Field
          data-cy="input-content"
          control={TextArea}
          name="input_content"
          placeholder="Content"
        />
        <Form.Input
          data-cy="file-input"
          name="file_input"
          placeholder="Image"
          type="file"
          onChange={setImagePreview}
        />
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
      <Container>
        <Divider horizontal>Image Preview:</Divider>
        {image && (
          <Image
            size="small"
            centered="true"
            src={URL.createObjectURL(image)}
          />
        )}
      </Container>
    </>
  );
};

export default CreateArticleForm;
