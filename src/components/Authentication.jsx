import React from "react";
import auth from "../modules/auth";
import { useDispatch } from "react-redux";
import { Button, Icon, Segment, Form } from "semantic-ui-react";

const Authentication = () => {
  const dispatch = useDispatch();
  const performAuthentication = async (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    let authenticationResponse = await auth.signIn(email, password);
    dispatch({
      type: "SET_CURRENT_USER",
      payload: authenticationResponse.data,
    });
  };
  return (
    <Segment placeholder>
      <Form
        className="loginForm"
        data-cy="login-form"
        onSubmit={(event) => performAuthentication(event)}
      >

        <Form.Input
          icon="at"
          type="text"
          label="Email"
          name="email"
          data-cy="email"
          placeholder="Email"
          iconPosition="left"
        />
        <Form.Input
          icon="key"
          type="password"
          label="Password"
          name="password"
          data-cy="password"
          placeholder="password"
          iconPosition="left"
        />

        <Button data-cy="submit-btn" icon labelPosition="left">
          <Icon name="user"></Icon>
          Submit
        </Button>
      </Form>
    </Segment>
  );
};

export default Authentication;
