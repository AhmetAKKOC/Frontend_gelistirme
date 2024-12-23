import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Page4({
  inputValue1,
  inputValue2,
  inputValue3,
  emailValue,
  setEmailValue,
}) {
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="App">
      <div id="gradient-image"></div>
      <div id="gradient-imagealt"></div>

      <div className="logo-container">Leg1t</div>

      <div className="input-summary">
        <div>
          <p className="p-input">{inputValue1}</p>
          <p className="input-label">Matemask Accounts</p>
        </div>
        <div>
          <p className="p-input">{inputValue2}</p>
          <p className="input-label">Twitter Accounts</p>
        </div>
        <div>
          <p className="p-input">{inputValue3}</p>
          <p className="input-label">Telegram Accounts</p>
        </div>
      </div>

      <p>BUT STILL</p>
      <h1 className="heading">UNIQUE</h1>
      <p className="page4text">Join the Waitlist. Earn points for Airdrop.</p>

      <input
        type="email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="Enter an Email"
        className="page4-input"
      />

      <Link to={isValidEmail(emailValue) ? "/page_5" : "#"}>
        <button className="next-button5" disabled={!isValidEmail(emailValue)}>
          Join
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

      <div className="black-background-text">
        <p className="backthetext">UNIQUE</p>
      </div>
    </div>
  );
}

export default Page4;
