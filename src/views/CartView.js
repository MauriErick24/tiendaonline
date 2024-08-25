import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import CardItem from "../components/CartItem";
import Button from "../components/Button";
import Modal from "../components/Modal";

const Cart = () => {
  const { cart, deleteProduct, emptyCart } = useOutletContext();

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);
  const [isModalBuyOpen, setIsModalBuyOpen] = useState(false);
  const [isModalConfirmationOpen, setIsModalConfirmationOpen] = useState(false);
  const [productSelected, setProductSelected] = useState(0);

  const openModal = (productId) => {
    setProductSelected(productId);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setProductSelected(0);
    setIsModalOpen(false);
  };

  const onDelete = () => {
    deleteProduct(productSelected);
    closeModal();
  };
  const clickReturn = () => {
    navigate("/home");
  };

  const OnEmptyCart = () => {
    emptyCart();
    closeModal();
  };

  const closeAllModalsAndEmptyCart = () => {
    closeModal();
    setIsModalConfirmationOpen(false);
    emptyCart();
  };

  if (cart.length === 0) {
    return (
      <div className="home">
        <h1 className="span--primary">Debes agregar productos al carrito.</h1>
        <Button
          className="btn btn--secondary font-size-medium "
          onClick={clickReturn}
        >
          REGRESAR
        </Button>
      </div>
    );
  } else {
    return (
      <div className="cart-view">
        <div>
          <Modal
            isOpen={isModalAlertOpen}
            onClose={closeModal}
            title="¿VACIAR CARRITO?"
          >
            <p>Todos los productos se quitarán de tu carrito.</p>
            <div className="cart-view-footer">
              <Button className="btn btn--primary" onClick={closeModal}>
                CANCELAR
              </Button>
              <Button className="btn btn--secondary" onClick={OnEmptyCart}>
                VACIAR CARRITO
              </Button>
            </div>
          </Modal>

          <Modal isOpen={isModalOpen} onClose={closeModal} title="¿ELIMINAR?">
            <p>Este producto se quitará de tu carrito.</p>
            <div className="cart-view-footer">
              <Button className="btn btn--primary" onClick={closeModal}>
                CANCELAR
              </Button>
              <Button className="btn btn--secondary" onClick={onDelete}>
                ELIMINAR
              </Button>
            </div>
          </Modal>

          <Modal
            isOpen={isModalBuyOpen}
            onClose={closeModal}
            title="COMPRAR TODOS LOS ELEMENTOS DEL CARRITO"
          >
            <p>Se procederá a comprar todos los elementos.</p>

            <div className="cart-view-footer">
              <Button className="btn btn--secondary" onClick={closeModal}>
                CANCELAR
              </Button>
              <Button
                className="btn btn--primary"
                onClick={() => setIsModalConfirmationOpen(true)}
              >
                COMPRAR
              </Button>
            </div>
          </Modal>

          <Modal
            isOpen={isModalConfirmationOpen}
            onClose={closeModal}
            title="GRACIAS POR SU COMPRA! "
          >
            <div className="cart-view-footer">
              <Button
                className="btn btn--primary"
                onClick={closeAllModalsAndEmptyCart}
              >
                ACEPTAR
              </Button>
            </div>
          </Modal>
        </div>
        <div className="home">
          {cart.map((element, index) => (
            <CardItem key={index} element={element} onDelete={openModal} />
          ))}
        </div>

        <div className="cart-view-footer">
          <Button
            className="btn btn--secondary font-size-medium"
            onClick={() => setIsModalAlertOpen(true)}
          >
            VACIAR CARRITO
          </Button>
          <Button
            className="btn btn--primary font-size-medium"
            onClick={() => {
              setIsModalBuyOpen(true);
            }}
          >
            COMPRAR TODO
          </Button>
        </div>
      </div>
    );
  }
};

export default Cart;
