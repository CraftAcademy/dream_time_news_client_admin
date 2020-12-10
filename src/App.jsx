import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setAuthenticated(false);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    let credentials = {
      email: event.target.email.value.trim(),
      password: event.target.password.value.trim(),
    } 
  };
  

  const renderForm = () => {
    if (!open) {
      return <></>;
    }
    if (authenticated) {
      return <></>;
    }
    return <LoginForm onSubmit={onSubmit} />;
  };

  return (
    <>
      <button
        data-cy="login-btn"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Login
      </button>
      {renderForm()}
    </>
  );
}

// {open ? <LoginForm onSubmit={onSubmit} /> : <></>}

export default App;
