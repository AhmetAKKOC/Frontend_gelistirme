import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

function Page1({ inputValue1, setInputValue1 }) {
  const isInteger = (value) => Number.isInteger(Number(value)) && value !== "";
  return (
    <div className="App">
      <div className="logo-container">Leg1t</div>

      <h1 className="text-4xl">
        Who are <span className="font-bold">you</span>
        <span className="font-extrabold text-primary">?</span>
      </h1>
      <div id="gradient-image"></div>
      <div id="gradient-imagealt"></div>

      <div className="counter">
        <span className="other">
          <motion.div
            className="question-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            1
          </motion.div>
        </span>
        /3
      </div>

      <div className="image-container">
        <motion.img
          src="/logo.png"
          className="image"
          alt="Logo"
          initial={{ x: 30, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src="/logo.png"
          className="image"
          alt="Logo"
          initial={{ x: -30, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.img
        src="/logo.png"
        className="image2"
        alt="Logo"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="question-container">
        how many
        <p style={{ margin: "0px 4px", display: "inline-block" }}>
          <span
            className="absolute"
            style={{ opacity: 1, transform: "none", whiteSpace: "nowrap" }}
          >
            <motion.div
              className="question-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Metamask{" "}
            </motion.div>
          </span>
        </p>
        accounts do you have
        <span className="question-symbol">?</span>
      </div>

      <input
        className="page1-input"
        type="number"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
        placeholder="Enter a number"
      />

      <Link to={isInteger(inputValue1) ? "/page_2" : "#"}>
        <button className="next-button" disabled={!isInteger(inputValue1)}>
          Next
        </button>
      </Link>
      <div className="footer-links">
        <span className="reality">176057</span>
        <span className="footer-link">
          <br />
          <br />
          <br />
          Matemask<span className="space">_</span>Accounts
        </span>
        <span className="footer-divider">|</span>
        <span className="reality">100089</span>
        <span className="footer-link">
          <br />
          <br />
          <br />
          Twitter<span className="space">_</span>Accounts
        </span>
        <span className="footer-divider">|</span>
        <span className="reality">100147</span>
        <span className="footer-link">
          <br />
          <br />
          <br />
          Telegram<span className="space">_</span>Accounts
        </span>
        <span className="footer-divider">|</span>
        <span className="reality2">23</span>
        <span className="footer-link">
          <br />
          <br />
          <br />
          Unique<span className="space">_</span>Users
        </span>
      </div>
    </div>
  );
}

export default Page1;
