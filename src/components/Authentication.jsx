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
      <form onSubmit={(event) => performAuthentication(event)}>
        <input type="text" name="email" data-cy="email-input" />
        <input type="password" name="password" data-cy="password-input" />
        <input type="submit" data-cy="submit-credentials" value="Submit credentials" />
      </form>
      </>
  )
}

export default Authentication;