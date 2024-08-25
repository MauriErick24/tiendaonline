import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "../styles/Globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

export const Main = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.ok) {
          throw new Error("error de red");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data.results);
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  const addProduct = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const deleteProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const emptyCart = () => {
    setCart([]);
  };

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div>
        <Header cart={cart} />
        <Outlet
          context={{ product, addProduct, deleteProduct, cart, emptyCart }}
        />
        <Footer />
      </div>
    );
  }
};
