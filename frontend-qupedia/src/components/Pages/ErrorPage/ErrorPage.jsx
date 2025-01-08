import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
//   const navigate = useNavigate();

//   const handleGoHome = () => {
//     navigate("/");
//   };

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <button className="home-button" onClick={handleGoHome}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

