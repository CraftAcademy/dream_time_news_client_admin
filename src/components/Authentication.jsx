import React from "react";
import { useDispatch } from "react-redux";
import { Button, Icon, Segment, Form } from "semantic-ui-react";
import axios from "axios"

const Authentication = () => {
  const dispatch = useDispatch();
  const performAuthentication = async (event) => {
    event.preventDefault();
    let credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    let response = await axios.post("/auth/sign_in", credentials);
    let userData = {
      uid: response.headers["uid"],
      client: response.headers["client"],
      access_token: response.headers["access-token"],
      token_type: "Bearer",
      expiry: response.headers["expiry"],
    };
    dispatch({
      type: "SET_CURRENT_USER",
      payload: userData
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
