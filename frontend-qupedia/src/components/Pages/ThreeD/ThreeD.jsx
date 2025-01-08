import React from "react";
import "./ThreeD.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

// Card Component
const CourseCard = ({ course }) => {
  return (
    <div className="course-card3">
      <img src={course.image} alt={course.title}  className="course-image3" />
      <div className="course-content3">
        <h3 className="course-title3">{course.title}</h3>
        <p className="course-description3">{course.description}</p>
        <div className="course-mentor3">
        <div className="mentor-img3"> <img  src="/src/components/Pages/DigitalMark/teacher1 (1).jpg" alt="" height={35} width={35}/> </div> {course.mentor || "Mentor details not available."}
        </div>
        <p className="course-details3">
          Enroll students: {course.students} | Course Fees: ₹{course.fees} | Course Duration: {course.duration} | Course Tag:{" "}
          <span className="course-tag3">{course.tag}</span>
        </p>
        <div className="course-buttons3">
          <button className="btn3 btn-add-to-cart3">Add to Cart</button>
          <button className="btn3 btn-view3">View</button>
        </div>
      </div>
    </div>
  );
};

// App Component
const ThreeD = () => {
  const courses = [
    {
      title: "Core Web Functionality",
      description:
        "The Advanced UI & UX Designing Course in Shikohabad is a 100% practical training that encompasses all the essentials of web responsive design based on the latest international demands and trends.",
      mentor: "Akul",
      students: 755,
      fees: 899,
      duration: "3 Months",
      tag: "Intermediate",
      image: "/src/components/Pages/ThreeD/3d.webp", // Replace with actual image URL
    },
    
  ];

  return (
    <>
    <Navbar/>
    <div className="ThreeD3">
      {/* Hero Section */}
      <div className="hero-section3">
        <h1 className="hero-heading3">
          Elevate Your Expertise, <br /> Excel With <span className="highlight3">Skill UP</span>
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb3">
        <span>HOME &gt; 3D ANIMATION</span>
      </div>

      {/* Category Section */}
      <div className="category-section3">
        <h2>
          All <span className="highlight3">Categories</span>
        </h2>
        <img src="/src/components/Pages/VideoEdit/Path3.png" alt="" height={60} width={190}/>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ThreeD;
