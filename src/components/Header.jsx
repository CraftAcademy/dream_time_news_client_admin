import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <>
      <h3 data-cy="header-user-email">
        {currentUser
          ? `Logged in as ${currentUser.uid}`
          : "You're not logged in."}
      </h3>
    </>
  );
};

export default Header;
