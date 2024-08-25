import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col">
        <h2>REDES</h2>
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://www.linkedin.com">Linkedin</a>
      </div>
      <div>
        <h2>COMIENZA A VENDER</h2>
        Puedes enviarnos un mensaje{" "}
        <u>
          <a href="/contact">aquí</a>
        </u>
        <br />
        <br />Y podrás ser parte de nuestra red.
      </div>
    </div>
  );
};
export default Footer;
