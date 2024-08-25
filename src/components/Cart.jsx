import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const Cart = ({ items }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/cart");
  };

  return (
    <div className="cart" onClick={onClick}>
      <ShoppingCartIcon fontSize="large" className="btn" />
      {items.length > 0 ? (
        <div className="bubble">{items.length < 10 ? items.length : "9+"}</div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Cart;
