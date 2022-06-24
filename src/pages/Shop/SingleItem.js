import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { shopArray } from "./shopArray";
import { Paper, Button } from "@mui/material";
import { ProductSlider } from "../../components/ProductSlider.js/ProductSlider";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Result = () => {
  return <p>Success! We will contact you soon!</p>;
};

Modal.setAppElement("#root");

export const SingleItem = ({ changeLikeState, likeProductState }) => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u9gv2np",
        "template_15h7was",
        e.target,
        "imLbn0hUbIvWeiUGv"
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
  const { name } = useParams();
  const thisArray = shopArray.find((prod) => prod.name === name);
  const [imageColor] = useState(thisArray.images);
  const [imageFeature] = useState(thisArray.features);
  const isLiked = likeProductState[thisArray.id];
  const customStyles = {
    overlay: { zIndex: 1000 },
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
      >
        <form action="" onSubmit={sendEmail} className="modal-content">
          <center>
            <h1>GET A QUOTE</h1>
          </center>
          <button
            onClick={() => setModalIsOpen(false)}
            className="modal-close-btn"
          >
            X
          </button>
          <input
            type="text"
            name="fullName"
            placeholder="Your name"
            className="modal-input"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your number"
            className="modal-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="modal-input"
            required
          />
          <textarea
            type="text"
            name="message"
            placeholder="What do you like to buy?"
            className="modal-input"
            required
          />
          <button className="quote-btn">Submit</button>
          <div>{result ? <Result /> : null}</div>
        </form>
      </Modal>
      <section className="single-item">
        <Paper
          style={{ padding: "20px", marginBottom: "10px" }}
          className="single-item-paper"
        >
          <div className="item-content-left">
            <ProductSlider images={imageColor} />
          </div>
          <div className="item-content-right">
            <h1 className="description-title">{thisArray.description}</h1>
            <div className="fulldescription">{thisArray.fulldescription}</div>
            <h3 className="description-price">Price: ${thisArray.price}</h3>
            <button className="quote-btn" onClick={() => setModalIsOpen(true)}>
              GET A QUOTE
            </button>
            <Button
              size="large"
              style={{ color: "black" }}
              onClick={() => changeLikeState(thisArray.id)}
            >
              {isLiked ? <FaHeart /> : <FaRegHeart />}
            </Button>
          </div>
        </Paper>

        <div className="features-specs">
          <h1 className="features-specs-title">Specifications</h1>
          <div>
            {Object.values(imageFeature).map((item, id) => {
              return (
                <div className="feature-item" key={id}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <Link to="/shop" className="back-link">
          &larr;Back
        </Link>
      </section>
    </>
  );
};
