import React from "react";
import { useAuth } from "../../store/hooks";
import { Button } from "react-bootstrap";
import "./style.css";

const WelcomeScreen = ({ history }) => {
  const { signInUser } = useAuth();

  const onSubmitHandler = () => {
    signInUser();
    history.push("/menu");
  };
  return (
    <div>
      <h2
        style={{
          padding: "20px",
          margin: "0px",
          textAlign: "center",
          marginTop: "10%",
        }}
      >
        Welcome to Food Hub
      </h2>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>Kindly enter your details to get your personalized menu</p>

        <Button onClick={onSubmitHandler} className="submitBtn">
          Sign-in with Google
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
