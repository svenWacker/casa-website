import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaPhone, FaMapMarker, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    subject: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFullNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      fullName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleSubjectlInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      subject: event.target.value,
    }));
  };

  const handleFeedbacklInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      feedback: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    if (values.fullName && values.email && values.subject && values.feedback) {
      setValid(true);
      setSubmitted(true);
    }
  };
  return (
    <React.Fragment>
      <h1 className="main-heading color-heading">Hier findet Ihr uns</h1>
      <div className="contact-wrapper">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5176.656141396443!2d8.0677793!3d49.5538327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x682f70d2122924b0!2sCasa%20Verde!5e0!3m2!1sde!2sde!4v1614000047483!5m2!1sde!2sde"
            width="98%"
            height="600px"
            allowfullscreen=""
            loading="lazy"
            title="google casa verde"
          ></iframe>
        </div>
        <div className="address">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div id="logo-wrapper">
              <h1 className="logo">
                <span className="logo_clr1">C</span>
                <span className="logo_clr2">A</span>
                <span className="logo_clr3">S</span>
                <span className="logo_clr4">A</span>
              </h1>
            </div>
          </Link>
          <h3>Die Bunte Vielfalt</h3>
          <br></br>
          <h4>
            <FaPhone />
            &nbsp; Telefon
          </h4>
          <p>06351 124181</p>
          <h4>
            <FaEnvelope />
            &nbsp; Email
          </h4>
          <p>casa-verde@t-online.de</p>
          <h4>
            <FaMapMarker />
            &nbsp; Address
          </h4>
          <p>
            Hauptstraße 28A
            <br /> 67304 Eisenberg
            <br /> Germany
          </p>
        </div>
        <div>
          <div className="contact">
            <form
              target="_blank"
              action="https://formsubmit.co/dc4185d72bb2395f901272e01e22678b"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="PartOne">
                <span>
                  <label htmlFor="fullName">Vor- und Zuname *</label>
                  <br />
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="Vor- und Zuname"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleFullNameInputChange}
                  />
                  <br />
                  {submitted && !values.fullName && (
                    <span id="full-name-error">
                      Bitte geben Sie Ihren ganzen Namen ein!
                    </span>
                  )}
                </span>
                <span>
                  <label htmlFor="email"> E-Mail *</label> <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Bitte E-Mail eingeben"
                    value={values.email}
                    onChange={handleEmailInputChange}
                  />
                  {submitted && !values.email && (
                    <span id="email-error">
                      Bitte geben Sie eine gültige E-Mail ein
                    </span>
                  )}
                </span>
              </div>

              <div className="PartTwo">
                <label htmlFor="subject">Betreff *</label>
                <br />

                <input
                  type="text"
                  id="subject"
                  placeholder="Betreff"
                  name="subject"
                  required
                  value={values.subject}
                  onChange={handleSubjectlInputChange}
                />
                {submitted && !values.subject && (
                  <span id="subject-error">
                    Bitte geben Sie einen Betreff an
                  </span>
                )}
              </div>

              <div className="PartThree">
                <label htmlFor="feedback">Ihre Nachricht: *</label>
                <br />
                <textarea
                  name="feedback"
                  id="feedback"
                  cols="30"
                  rows="10"
                  required
                  placeholder="Hallo!"
                  value={values.feedback}
                  onChange={handleFeedbacklInputChange}
                ></textarea>
                {submitted && !values.feedback && (
                  <span id="feedback-error">
                    Bitte schreiben Sie Ihre Nachricht!
                  </span>
                )}
              </div>
              <div className="PartFour">
                <button type="submit" value="Submit" target="_blank">
                  Submit
                </button>
              </div>
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you! your message has been received and I will reply to you as soon as possible."
              />
              <input type="hidden" name="_subject" value="Message received" />
            </form>
            {submitted && (
              <div className="SuccessMessage">
                Vielen Dank für Ihre E-Mail, wir melden uns bei Ihnen.
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
