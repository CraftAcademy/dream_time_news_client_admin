import React from "react";
import Authentication from "./components/Authentication";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import CreateArticleForm from "./components/CreateArticleForm";

const App = () => {
  const auth = useSelector((state) => state.auth);
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <div className="div-main">
      <Header />
      {currentUser ? (
        <>
          <CreateArticleForm />
          {auth && <p data-cy="flash-message">{auth.message}</p>}
        </>
      ) : (
        <Authentication />
      )}
    </div>
  );
};

export default App;
