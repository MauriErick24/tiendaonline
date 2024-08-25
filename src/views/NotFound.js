import React from "react";

import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import BuildIcon from "../assets/build.svg";

export const NotFound = () => {
  const navigate = useNavigate();

  const clickReturn = () => {
    navigate("/");
  };

  return (
    <div className="not-found">
      <div className="landing__content__icons">
        <img src={BuildIcon} alt="Build icon" />
      </div>

      <h1>Ups! Página en mantenimiento.</h1>
      <h3>Te recomendamos regresar mas tarde</h3>
      <div className="landing__content__button">
        <Button className="btn" onClick={clickReturn}>
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};
