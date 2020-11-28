import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <div className="home-container">
        <h1>COMING SOON</h1>
        <p>Until then, please visit our pages:</p>
        <div className="home-icons">
          <a
            href="https://www.facebook.com/istriangoldhunters"
            className="logo"
          >
            <FaFacebookF size="2em" className="logo" fill="rgb(52, 158, 84)" />
          </a>
          <a href="https://www.instagram.com/istriangold/" className="logo">
            <GrInstagram size="2em" className="logo" fill="rgb(52, 158, 84)" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
