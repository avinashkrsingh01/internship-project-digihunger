import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <h1>Book Your Demo Session</h1>
        <div className="buttons">
        <button className="book-demo-button">
        <img class="icon" src="/src/components/Contact/demonstration.png" alt="" srcset="" ></img>
          <i className="demo-icon"></i> Book Demo
        </button>
        
        <Link to="problemsolving" className="book-demo-button-sec">
          
        <img class="icon" src="/src/components/Contact/app.png" alt="" srcset=""></img>
          <i className="demo-icon"></i> Problem Solving
        </Link>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <label>First Name</label>
          <input type="text" placeholder="Enter your first name" />
          
          <label>Email-ID</label>
          <input type="email" placeholder="Enter your email" />
          
          <label>Mobile No.</label>
          <input type="tel" placeholder="Enter your mobile number" />
          
          <label>Query</label>
          <textarea placeholder="Enter your query" rows="3"></textarea>
          
          <label>Comment</label>
          <textarea placeholder="Enter your comment" rows="3"></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
