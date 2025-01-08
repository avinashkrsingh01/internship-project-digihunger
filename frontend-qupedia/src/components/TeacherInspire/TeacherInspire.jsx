import React from "react";
import "./TeacherInspire.css";

const TeacherInspire = () => {
  const cards = [
    {
      icon: "/src/components/TeacherInspire/book-apple-icon.png",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      icon: "/src/components/TeacherInspire/graduation-cap-icon.png",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      icon: "/src/components/TeacherInspire/glass-time.png",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>All teachers</h1>
        <h2>
          Greatest <span className="highlight">teachers</span> inspire
        </h2>
      </header>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.icon} alt={`Icon ${index + 1}`} />
            <div>{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherInspire;
