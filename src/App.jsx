import React from "react";
import { useSelector } from 'react-redux';
import Authentication from './components/Authentication';

const App = () => {
  const auth = useSelector(state => state.auth)
  return (
    <>
      <Authentication />
      {auth &&
        <p data-cy="flash-message">
          {auth.message}
        </p>
      }
    </>
  )
}

export default App;
  // const [authenticated, setAuthenticated] = useState(false);
  // const [loginForm, setloginForm] = useState(false);
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   const credentials = localStorage.getItem("credentials");
  //   if (credentials) {
  //     setAuthenticated(true);
  //   }
  // }, []);

  // const auth = async (email, password) => {
  //   let credentials = { email, password };
  //   try {
  //     let response = await axios.post(
  //       "http://localhost:3000/api/auth/sign_in",
  //       credentials
  //     );
  //     if (response.status === 200) {
  //       return response;
  //     }
  //   } catch (error) {
  //     return undefined;
  //   }
  // };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const email = event.target.email.value.trim();
  //   const password = event.target.password.value.trim();

  //   const response = await auth(email, password);
  //   if (response) {
  //     const credentials = {
  //       uid: response.headers.uid,
  //       client: response.headers.client,
  //       "access-token": response.headers["access-token"],
  //       expiry: response.headers.expiry,
  //     };
  //     localStorage.setItem("credentials", JSON.stringify(credentials));
  //     setAuthenticated(true);
  //     setloginForm(false);
  //   } else {
  //     setMessage("Unsuccessful");
  //   }
  // };

  // const onShowLoginForm = () => {
  //   setloginForm(true);
  // };

  // const onLogout = () => {
  //   localStorage.removeItem("credentials");
  //   setAuthenticated(false);
  // };

  // const render = () => {
  //   if (authenticated) {
  //     return (
  //       <>
  //         <p>You have logged in successfully</p>
  //         <button data-cy="logout-btn" onClick={onLogout}>
  //           Logout
  //         </button>
  //       </>
  //     );
  //   }

  //   if (loginForm) {
  //     return (
  //       <>
  //         <p>{message}</p>
  //         <LoginForm onSubmit={onSubmit} />
  //         <button
  //           data-cy="back-btn"
  //           onClick={() => {
  //             setloginForm(false);
  //           }}
  //         >
  //           Back
  //         </button>
  //       </>
  //     );
  //   }

  //   return (
  //     <div>
  //       <button data-cy="login-btn" onClick={onShowLoginForm}>
  //         Login
  //       </button>
  //     </div>
  //   );
  // };

  // return render();
// };

// export default App;
