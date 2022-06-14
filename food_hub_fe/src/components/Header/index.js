import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";

const Header = ({
  back = false,
  onCartClick = () => {},
  onBackClick = () => {},
  cart,
}) => {
  return (
    <div className="header">
      {back ? (
        <Button onClick={onBackClick}>back</Button>
      ) : (
        <p
          style={{
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          FOOD HUB
        </p>
      )}
    </div>
  );
};

export default Header;
