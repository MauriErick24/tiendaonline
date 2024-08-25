import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "../components/Button.jsx";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="product-card">
      <img src={item.image} alt="icon" />

      <h4 className="wrap font-size-medium">{item.name}</h4>
      <p>
        Precio: <span>{item.episode.length * 100} Blemflarck</span>
      </p>
      <p>
        Stock: <span>{item.episode.length}</span>
      </p>
      <Button className="btn btn--primary font-size-medium" onClick={onClick}>
        Ver detalles
      </Button>
    </div>
  );
};

export default ProductCard;
