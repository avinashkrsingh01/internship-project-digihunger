import React from "react";
import "./Doubtpage.css"; // Import CSS for styling

const Doubtpage = () => {
  return (
    <div className="platform-container">
      <div className="text-section">
        <h1 className="dought-heading">
          We are the top <span className="highlight">doubt solving</span><br /> platform
        </h1>
        <p>
          we are dedicated to transforming education through innovative learning solutions tailored to your needs.
          As a premier learning platform, we offer a comprehensive range of high-quality courses and resources
          designed to empower learners at every stage of their journey.
        </p>
        <button className="learn-more-button">
          <span className="icon"><img src="/src/components/DoubtSolPage/app (1).png" alt="" /></span> Learn More
        </button>
      </div>
      <div className="images-section">
        <img
          className="image largest"
          src="/src/components/DoubtSolPage/about-1.png" // Replace with actual image URL
          alt="Student 1"
        />
        <img
          className="image large"
          src="src/components/DoubtSolPage/about-2 (1).png" // Replace with actual image URL
          alt="Student 2"
        />
        <img
          className="image small"
          src="/src/components/DoubtSolPage/thirdImg.png" // Replace with actual image URL
          alt="Student 3"
        />
      </div>
    </div>
  );
};

export default Doubtpage;
