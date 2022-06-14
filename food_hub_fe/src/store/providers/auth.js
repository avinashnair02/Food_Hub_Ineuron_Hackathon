import { AuthContext } from "../context";
import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import { FIREBASE_CONFIG } from "../../config";

const AuthProvider = ({ children }) => {
  const provider = React.useRef(new firebase.auth.GoogleAuthProvider()).current;
  const [user, setUser] = React.useState(null);
  const app = React.useRef(firebase.initializeApp(FIREBASE_CONFIG)).current;
  const db = React.useRef(firebase.firestore()).current;
  var real_db = React.useRef(firebase.database()).current;

  React.useEffect(() => {
    initilize();
  }, []);

  const signInAdmin = async ({ email, password }) => {
    try {
      //CREATE USER
      //   const userCredential = await firebase
      //     .auth()
      //     .createUserWithEmailAndPassword(email, password);

      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      // Signed in
      var user = userCredential.user;
      console.log("####USER ", userCredential);
      return user;
    } catch (err) {
      console.log("###ERR", err);
    }
  };

  const signInUser = async () => {
    try {
      const result = await firebase.auth().signInWithPopup(provider);

      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    } catch (err) {
      console.log("###ERR ", err);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log("###ERR ", err.message);
    }
  };

  const initilize = () => {
    console.log("###INIT FIREBASE");

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{ db, real_db, app, user, signInAdmin, signOut, signInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
