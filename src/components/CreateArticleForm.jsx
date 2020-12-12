import React, { useState } from "react";

const CreateArticleForm = () => {
  const [message, setMessage] = useState()

  const onCreateHandler = (event) => {
    event.preventDefault()
    setMessage("Your article was created")
  }

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
        <button 
          data-cy="create-article-button" 
          type="submit" 
          value="submit"
          onClick={onCreateHandler}
        >
          Create Article
        </button>
          <p data-cy="response-message">{message && message}</p>
      </form>
    </>
  );
};

export default CreateArticleForm;
