import React from "react";

import Button from "./Button";

const CartItem = ({ element, onDelete }) => {
  return (
    <div className="cart-item">
      <div>
        <img
          className="product__img--200"
          src={element.image}
          alt="computer icon"
        />
      </div>
      <div className="cart-items__item">
        <h1 className="span-primary">{element.name}</h1>
        <div className="product-content">
          <div className="product-content-detail">
            <p className="font-size-medium">
              <b>Estado:</b> {element.status}
            </p>
            <p className="font-size-medium">
              <b>Especie:</b> {element.species}
            </p>
            <p className="font-size-medium">
              <b>Precio:</b> {element.episode.length * 100} Blemflarck
            </p>
            <p className="font-size-medium">
              <b>Cantidad: </b>
              {element.quantity}
            </p>
            <p className="font-size-medium">
              <b>Total: </b>
              {element.quantity * element.episode.length * 100} Blemflarck
            </p>
          </div>
        </div>
      </div>

      <Button
        className="btn btn--secondary font-size-medium"
        onClick={() => onDelete(element.id)}
      >
        Eliminar
      </Button>
    </div>
  );
};

export default CartItem;
