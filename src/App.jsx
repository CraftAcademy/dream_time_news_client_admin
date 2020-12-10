import React from "react";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <h1> Dream Time News</h1>
      <button data-cy="login-btn">Login</button>
      <LoginForm
        toggleAuthenticatedState={() => this.toggleAuthenticatedState()}
      />
    </>
  );
}
export default App;

// const App = () => {
//   return (
//     <>
//       <h1> Dream Time News</h1>
//       <button data-cy="login-btn">Login</button>
//       <LoginForm
//         toggleAuthenticatedState={() =>
//           this.toggleAuthenticatedState()
//         }
//         />
//     </>
//   );
// };

// export default App;
