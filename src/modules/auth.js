import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "http://localhost:3000",
  prefixUrl: "/api",
});

const performAuthentication = async (event, dispatch) => {
  try {
    event.preventDefault();

    let response = await auth.signIn(
      event.target.elements.email.value,
      event.target.elements.password.value
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
