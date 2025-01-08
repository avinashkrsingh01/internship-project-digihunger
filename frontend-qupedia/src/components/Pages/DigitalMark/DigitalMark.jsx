import React from "react";
import "./DigitalMark.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

// Card Component
const CourseCard = ({ course }) => {
  return (
    <>
    
    <div className="course-carddm">
      <img src={course.image} alt={course.title}  className="course-imagedm" />
      <div className="course-contentdm">
        <h3 className="course-titledm">{course.title}</h3>
        <p className="course-descriptiondm">{course.description}</p>
        <div className="course-mentordm">
        <div className="mentor-imgdm"> <img  src="/src/components/Pages/DigitalMark/teacher1 (1).jpg" alt="" height={35} width={35}/> </div> {course.mentor || "Mentor details not available."}
        </div>
        <p className="course-detailsdm">
          Enroll students: {course.students} | Course Fees: ₹{course.fees} | Course Duration: {course.duration} | Course Tag:{" "}
          <span className="course-tagdm">{course.tag}</span>
        </p>
        <div className="course-buttonsdm">
          <button className="btn2 btn-add-to-cartdm">Add to Cart</button>
          <button className="btn2 btn-viewdm">View</button>
        </div>
      </div>
    </div>
    </>
  );
};

// App Component
const DigitalMark = () => {
  const courses = [
    {
      title: "Social Media Optimization",
      description:
        "This Course in digital marketing aims to train their students on how to manage a website for research, online marketing for shopping and entertainment using content, bounce rate analysis, popularity of the site, architecture and response time to improve t",
      mentor: "Akul",
      students: 755,
      fees: 899,
      duration: "3 Months",
      tag: "Intermediate",
      image: "/src/components/Pages/DigitalMark/digitalmarketing.webp", // Replace with actual image URL
    },
    {
      title: "Social Media Optimization",
      description:
        "This Course in digital marketing aims to train their students on how to manage a website for research, online marketing for shopping and entertainment using content, bounce rate analysis, popularity of the site, architecture and response time to improve t",
      mentor: "Akul",
      students: 755,
      fees: 899,
      duration: "3 Months",
      tag: "Intermediate",
      image: "/src/components/Pages/DigitalMark/digitalmarketing.webp", // Replace with actual image URL
    },

  ];

  return (
    <>
    <Navbar/>
    <div className="digitalmark">
      {/* Hero Section */}
      <div className="hero-sectiondm">
        <h1 className="hero-headingdm">
          Elevate Your Expertise, <br /> Excel With <span className="highlightdm">Skill UP</span>
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumbdm">
        <span>HOME &gt; DIGITAL MARKATING</span>
      </div>

      {/* Category Section */}
      <div className="category-sectiondm">
        <h2>
          All <span className="highlightdm">Categories</span>
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

export default DigitalMark;
