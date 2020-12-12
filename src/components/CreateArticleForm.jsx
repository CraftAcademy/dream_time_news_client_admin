import React from "react";

const CreateArticleForm = () => {
  return (
    <>
      <form data-cy="create-article-form">
        <input
          data-cy="input-title"
          type="text"
          name="input-title"
          placeholder="Title"
        />
        <input
          data-cy="input-author"
          type="text"
          name="input-author"
          placeholder="Author"
        />
        <textarea
          data-cy="input-sub-title"
          type="text"
          name="input-sub-title"
          placeholder="Sub Title"
        />
        <textarea
          data-cy="input-content"
          type="text"
          name="input-content"
          placeholder="Content"
        />
        <button data-cy="create-article-button" type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateArticleForm;
