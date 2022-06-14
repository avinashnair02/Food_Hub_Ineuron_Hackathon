import React from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
  const { db, app, real_db, user, signInAdmin, signInUser, signOut } =
    React.useContext(AuthContext);

  return { db, app, real_db, user, signOut, signInAdmin, signInUser };
};
