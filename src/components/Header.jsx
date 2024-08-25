import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Globals.css";

import Cart from "./Cart";

const Header = ({ cart }) => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/home");
  };

  return (
    <div className="header">
      <div className="btn store-name" onClick={onClickHome}>
        TIENDAS
        <span className="span--primary">ONLINE</span>
      </div>

      <div>
        <Cart items={cart} />
      </div>
    </div>
  );
};

export default Header;
