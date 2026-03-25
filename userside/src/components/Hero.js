import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <h1>MAC - Make A Challenge</h1>
      <p>
        Kerala’s Premier Sports Management Platform. Register clubs, players,
        and compete in tournaments across Kerala.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary">Register Club</button>
        <button className="btn-secondary">Explore Tournaments</button>
      </div>
    </div>
  );
};

export default Hero;