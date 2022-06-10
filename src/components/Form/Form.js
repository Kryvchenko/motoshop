import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./Form.css";

const Result = () => {
  return <p>Success! We will contact you soon!</p>;
};

export const Form = (props) => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fojaehh",
        "template_x26njxh",
        e.target,
        "wVG5ej37S9H4jkWYW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <section className="form-section">
      <div className="form">
        <form action="" onSubmit={sendEmail}>
          <center>
            {" "}
            <h1 className="form-title">CONTACT FORM</h1>
          </center>

          <br />
          <input
            type="text"
            name="fullName"
            placeholder="Your name"
            className="form-input"
            required
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            required
          />
          <br />
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            className="form-input"
            required
          />
          <br />
          <textarea
            name="message"
            placeholder="Message"
            required
            maxLength="200"
          ></textarea>
          <br />
          <center>
            <button className="submit-btn">Submit</button>
          </center>
          <div>{result ? <Result /> : null}</div>
        </form>
      </div>
    </section>
  );
};
