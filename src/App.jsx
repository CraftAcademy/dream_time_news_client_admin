import React from "react";
import Authentication from "./components/Authentication";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import CreateArticleForm from "./components/CreateArticleForm";

const App = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="div-main">
      <Header />
      <Authentication />
      {auth && <p data-cy="flash-message">{auth.message}</p>}
      <CreateArticleForm />
    </div>
  );
};

export default App;
