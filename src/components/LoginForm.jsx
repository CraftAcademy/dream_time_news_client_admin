import React from "react";

const LoginForm = ({ onSubmit }) => {

  return (
    <>
      <form data-cy="login-form" onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          data-cy="email"
          placeholder="Your Email"
        />
        <input
          type="password"
          name="password"
          data-cy="password"
          placeholder="Your Password"
        />
        <br />
        <button data-cy="submit-btn">Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
