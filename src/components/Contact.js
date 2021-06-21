import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <h1 className="main-heading">Hiewr findet Ihr uns</h1>
      <div className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5176.656141396443!2d8.0677793!3d49.5538327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x682f70d2122924b0!2sCasa%20Verde!5e0!3m2!1sde!2sde!4v1614000047483!5m2!1sde!2sde"
          width="98%"
          height="500px"
          allowfullscreen=""
          loading="lazy"
          title="google casa verde"
        ></iframe>
      </div>
      <div className="address">
        <h1>CASA</h1>
        <h3>Die Bunte Vielfalt</h3>
        <br></br>
        <h4>Telefon</h4>
        <p>06351 124181</p>
        <h4>Email</h4>
        <p>casa-verde@t-online.de</p>
        <h4>Address</h4>
        <p>
          Hauptstraße 28A
          <br /> 67304 Eisenberg
          <br /> Germany
        </p>
      </div>
    </React.Fragment>
  );
};

export default About;