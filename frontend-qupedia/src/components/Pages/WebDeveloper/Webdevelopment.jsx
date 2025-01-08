import React from "react";
import "./Webdevelopment.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

// Card Component
const CourseCard = ({ course }) => {
  return (
    <>
    
    <div className="course-cardw">
      <img src={course.image} alt={course.title}  className="course-imagew" />
      <div className="course-contentw">
        <h3 className="course-titlew">{course.title}</h3>
        <p className="course-descriptionw">{course.description}</p>
        <div className="course-mentorw">
        <div className="mentor-imgw"> <img  src="/src/components/Pages/DigitalMark/teacher1 (1).jpg" alt="" height={35} width={35}/> </div> {course.mentor || "Mentor details not available."}
        </div>
        <p className="course-detailsw">
          Enroll students: {course.students} | Course Fees: ₹{course.fees} | Course Duration: {course.duration} | Course Tag:{" "}
          <span className="course-tagw">{course.tag}</span>
        </p>
        <div className="course-buttonsw">
          <button className="btn2 btn-add-to-cartw">Add to Cart</button>
          <button className="btn2 btn-vieww">View</button>
        </div>
      </div>
    </div>
    </>
  );
};

// App Component
const Webdevelopment = () => {
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
      image: "/src/components/Pages/WebDeveloper/webdesignanddevelopement.webp", // Replace with actual image URL
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
      image: "/src/components/Pages/WebDeveloper/webdesignanddevelopement.webp", // Replace with actual image URL
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
      image: "/src/components/Pages/WebDeveloper/webdesignanddevelopement.webp", // Replace with actual image URL
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="Webdevelopmentw">
      {/* Hero Section */}
      <div className="hero-sectionw">
        <h1 className="hero-headingw">
          Elevate Your Expertise, <br /> Excel With <span className="highlightw">Skill UP</span>
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumbw">
        <span>HOME &gt; WEB DEVELOPMENT</span>
      </div>

      {/* Category Section */}
      <div className="category-sectionw">
        <h2>
          All <span className="highlightw">Categories</span>
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

export default Webdevelopment;
