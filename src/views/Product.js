import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

import Button from "../components/Button";
import Spinner from "../components/Spinner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Alert from "../components/Alert";

const Product = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { addProduct } = useOutletContext();

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error de red");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  const showSuccessAlert = () => {
    setAlert({
      message: "El producto se ha agregado al carrito",
      type: "success",
    });
    setTimeout(() => setAlert({ message: "", type: "" }), 3000);
  };

  const addToCart = () => {
    addProduct(product);
    showSuccessAlert();
  };

  const clickReturn = () => {
    navigate("/home");
  };

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="product">
        <div>
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert({ message: "", type: "" })}
          />
        </div>
        <ArrowBackIcon className="btn" fontSize="large" onClick={clickReturn} />
        <h1 className="span-primary">{product.name}</h1>
        <div className="product-content">
          <img
            className="product__img"
            src={product.image}
            alt="computer icon"
          />
          <div className="product-content-detail">
            <p className="font-size-medium">
              <b>Estado:</b> {product.status}
            </p>
            <p className="font-size-medium">
              <b>Especie:</b> {product.species}
            </p>
            <p className="font-size-medium">
              <b>Precio:</b> {product.episode.length * 100} Blemflarck
            </p>
            <p className="font-size-medium">
              <b>Stock: </b>
              {product.episode.length}
            </p>
            <Button
              className="btn btn--primary font-size-medium"
              onClick={addToCart}
            >
              AGREGAR AL CARRITO
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Product;
