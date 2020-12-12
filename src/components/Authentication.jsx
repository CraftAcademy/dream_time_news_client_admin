import React from 'react';
import auth from '../modules/auth';
import { useDispatch } from 'react-redux';

const Authentication = () => {
  const dispatch = useDispatch()
  const performAuthentication = async (event) => {
    event.preventDefault()
    let email = event.target.email.value
    let password = event.target.password.value
    let authenticationResponse = await auth.signIn(email, password)

    dispatch({ type: "SET_CURRENT_USER", payload: authenticationResponse.data })
  }
  return (
    <>
      <form data-cy='login-form' onSubmit={(event) => performAuthentication(event)}>
        <input type="text" name="email" data-cy="email" />
        <input type="password" name="password" data-cy="password" />
        <input type="submit" data-cy="submit-btn" value="Submit" />
      </form>
    </>
  )
}

export default Authentication;