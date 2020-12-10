import React from "react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <>
      <label>WELCOME TO LOGIN_FORM</label>
      <form data-cy="login-form" onSubmit={submitFormHandler}></form>
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
    </>
  );
};

export default LoginForm;
