import React from "react";
import "../styles/Globals.css";

const Alert = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button className="alert-close" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Alert;
