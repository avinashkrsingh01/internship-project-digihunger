import React from "react";
import "./MentorCard.css";
import { Link } from "react-router-dom";
import BookSession from "../Pages/BookSession/BookSession";

const mentors = [
  {
    name: "Vijay",
    experience: "3+ Year Ex.",
    description: "Book session for problem solving in Technology.",
    
    imageUrl: "/src/components/MentorCard/teacher1.jpg" // Replace with actual image URL
  },
  {
    name: "Surendra",
    experience: "5+ Year Ex.",
    description: "Book session for problem solving in Technology.",
  
    imageUrl: "/src/components/MentorCard/teacher2.jpg" // Replace with actual image URL
  },
  {
    name: "Sumit",
    experience: "4+ Year Ex.",
    description: "Book session for problem solving in Technology.",
    
    imageUrl: "/src/components/MentorCard/teacher1.jpg" // Replace with actual image URL
  },
  {
    name: "Astha",
    experience: "7+ Year Ex.",
    description: "Book session for problem solving in Technology.",
    imageUrl: "/src/components/MentorCard/teacher2.jpg" // Replace with actual image URL
  }
];

const MentorCard = () => {
  return (
    <div className="mentor-cards-container">
      {mentors.map((mentor, index) => (
        <div className="cards" key={index} style={{ background: mentor.background }}>
          <img src={mentor.imageUrl} alt={mentor.name} className="mentor-image" />
          <h3>{mentor.name} ({mentor.experience})</h3>
          <p>{mentor.description}</p>
          <div className="buttons">
            <Link to="login" className="chat-button1"><img src="/src/components/MentorCard/Group55.png" alt="" height={40} width={135}/></Link>
            <Link to="booksession" className="book-session-button1"><img src="/src/components/MentorCard/Group42.png" alt="" height={40} width={135}/></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorCard;
