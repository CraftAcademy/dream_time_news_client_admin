import JtockAuth from 'j-tockauth';

const auth = new JtockAuth({
  host: "http://localhost:3000",
  prefixUrl: "/api",
});

const performAuthentication = async (e, dispatch) => {
  try {
    e.preventDefault();

    let response = await auth.signIn(
      e.target.elements.email.value,
      e.target.elements.password.value
    );
    dispatch({
      type: "SET_CURRENT_USER",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export { performAuthentication };