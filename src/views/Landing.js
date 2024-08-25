import React from "react";

import cartIcon from "../assets/cart.svg";
import rocketIcon from "../assets/rocket.svg";
import computerIcon from "../assets/computer.svg";
import cellphoneIcon from "../assets/cellphone.svg";

import "../styles/Globals.css";

import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const clickStart = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="landing">
        <h1 className="landing__title">
          TIENDAS<span className="span--primary">ONLINE</span>
        </h1>
        <div className="landing__content">
          <h1 className="landing__slogan">
            <p className="landing__p">REALIZA TUS COMPRAS CON LAS </p>
            <br />
            <span className="span--white">ENTREGAS</span>
            <p className="landing__p">MÁS</p>
            <span className="span--white">RÁPIDAS</span>
          </h1>
          <div className="landing__content__icons">
            <img src={cartIcon} alt="Cart icon" />
            <img src={rocketIcon} alt="Cart icon" />
            <img src={computerIcon} alt="Computer icon" />
            <img src={cellphoneIcon} alt="Cellphone icon" />
          </div>
          <div className="landing__content__button">
            <Button className="btn" onClick={clickStart}>
              EMPEZAR A COMPRAR !
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
