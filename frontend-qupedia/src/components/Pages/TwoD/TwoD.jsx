import React from "react";
import "./TwoD.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

// Card Component
const CourseCard = ({ course }) => {
  return (
    <>
    
    <div className="course-card2">
      <img src={course.image} alt={course.title}  className="course-image2" />
      <div className="course-content2">
        <h3 className="course-title2">{course.title}</h3>
        <p className="course-description2">{course.description}</p>
        <div className="course-mentor2">
        <div className="mentor-img2"> <img  src="/src/components/Pages/DigitalMark/teacher1 (1).jpg" alt="" height={35} width={35}/> </div> {course.mentor || "Mentor details not available."}
        </div>
        <p className="course-details2">
          Enroll students: {course.students} | Course Fees: ₹{course.fees} | Course Duration: {course.duration} | Course Tag:{" "}
          <span className="course-tag2">{course.tag}</span>
        </p>
        <div className="course-buttons2">
          <button className="btn2 btn-add-to-cart2">Add to Cart</button>
          <button className="btn2 btn-view2">View</button>
        </div>
      </div>
    </div>
    </>
  );
};

// App Component
const TwoD = () => {
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
      image: "/src/components/Pages/TwoD/videoediting.webp", // Replace with actual image URL
    },
    {
      title: "Core Web Functionality",
      description:
        "The Advanced UI & UX Designing Course in Shikohabad is a 100% practical training that encompasses all the essentials of web responsive design based on the latest international demands and trends.",
      mentor: "Akul",
      students: 755,
      fees: 899,
      duration: "3 Months",
      tag: "Intermediate",
      image: "/src/components/Pages/TwoD/videoediting.webp", // Replace with actual image URL
    },
    {
      title: "Core Web Functionality",
      description:
        "The Advanced UI & UX Designing Course in Shikohabad is a 100% practical training that encompasses all the essentials of web responsive design based on the latest international demands and trends.",
      mentor: "Akul",
      students: 755,
      fees: 899,
      duration: "3 Months",
      tag: "Intermediate",
      image: "/src/components/Pages/TwoD/2danimation.webp", // Replace with actual image URL
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="TwoD2">
      {/* Hero Section */}
      <div className="hero-section2">
        <h1 className="hero-heading2">
          Elevate Your Expertise, <br /> Excel With <span className="highlight2">Skill UP</span>
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb2">
        <span>HOME &gt; 2D ANIMATIONS</span>
      </div>

      {/* Category Section */}
      <div className="category-section2">
        <h2>
          All <span className="highlight2">Categories</span>
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

export default TwoD;
