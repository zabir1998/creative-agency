import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer" className="row footer-home">
        <div className="col-md-3 offset-md-1">
          <h1 style={{ fontWeight: 700, color: "#2D2D2D" }}>
            Let us handle your <br /> project, professionally
          </h1>
          <p style={{ marginTop: 20 }}>
            <small>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </small>
          </p>
        </div>
        <div className="col-md-8">
          <ContactForm></ContactForm>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#fbd062", paddingBottom: 20 }}
        className="text-center"
      >
        <footer>copyright Orange Labs 2020</footer>
      </div>
    </>
  );
};

export default Footer;
