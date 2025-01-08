import React from "react";
import "./BookSession.css";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const BookSession = () => {
  return (
    <>
    <Navbar/>
        <div className="shopping-card-co">
        <h1>Shopping Cart</h1>
        </div>
    <div className="checkout-container-bs">
      {/* Left Section */}
      <div className="checkout-left-bs">

        <div className="course-item-bs">
          <img
            src="https://via.placeholder.com/50" // Placeholder for course image
            alt="Course"
            className="course-image-bs"
          />
          <h3 className="course-title-bs">Social Media Optimization</h3>
          <button className="remove-btn-bs">Remove</button>
          <span className="course-price-bs">₹ 589</span>
      <div className="total-price-bs">
          <strong>Total: ₹ 589</strong>
        </div>
        </div>
        
      </div>

      {/* Right Section */}
      <div className="checkout-right-bs">
        <form className="checkout-form-bs">
          <label>
            Enter Name
            <br />
            <input className="" type="text" placeholder="Enter Name" />
          </label>
          <label>
            Enter Email
            <br />
            <input type="email" placeholder="Enter Email" />
          </label>
          <label>
            Enter Password
            <input type="password" placeholder="Enter Password" />
          </label>
          <label>
            Select Time
            <select>
              <option>Select Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </label>
          <button className="pay-now-btn-bs">Pay Now</button>
        <div className="promotions-bs">
          <label>
            Promotions
            <input type="text" placeholder="Enter Coupon Code" />
          </label>
          <button className="apply-btn-bs">Apply</button>
        </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BookSession;
