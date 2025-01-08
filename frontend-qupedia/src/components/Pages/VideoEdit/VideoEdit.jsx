import React from "react";
import "./VideoEdit.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

// Card Component
const CourseCard = ({ course }) => {
  return (
    <>
    
    <div className="course-cardv">
      <img src={course.image} alt={course.title}  className="course-imagev" />
      <div className="course-contentv">
        <h3 className="course-titlev">{course.title}</h3>
        <p className="course-descriptionv">{course.description}</p>
        <div className="course-mentorv">
        <div className="mentor-imgv"> <img  src="/src/components/Pages/DigitalMark/teacher1 (1).jpg" alt="" height={35} width={35}/> </div> {course.mentor || "Mentor details not available."}
        </div>
        <p className="course-detailsv">
          Enroll students: {course.students} | Course Fees: ₹{course.fees} | Course Duration: {course.duration} | Course Tag:{" "}
          <span className="course-tagv">{course.tag}</span>
        </p>
        <div className="course-buttonsv">
          <button className="btn2 btn-add-to-cartv">Add to Cart</button>
          <button className="btn2 btn-viewv">View</button>
        </div>
      </div>
    </div>
    </>
  );
};

// App Component
const VideoEditv = () => {
  const courses = [
    {
      title: "Adobe After Effect",
      description:
        "hlo",
      mentor: "Himanshu",
      students: 755,
      fees: 899,
      duration: "3 Months",
      tag: "Intermediate",
      image: "/src/components/Pages/TwoD/videoediting.webp", // Replace with actual image URL
    },
    {
      title: "Core Web Functionality",
      description:
        "hlo",
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
        "This course focus on imparting the concepts of editing and adding specialized effects to videos using composting and video editing applications eg Adobe Premier Pro, Adobe After Effects and Adobe Photoshop etc. It teaches you about the performances of all",
      mentor: "Manju",
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
    <div className="TwoDv">
      {/* Hero Section */}
      <div className="hero-sectionv">
        <h1 className="hero-headingv">
          Elevate Your Expertise, <br /> Excel With <span className="highlightv">Skill UP</span>
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumbv">
        <span>HOME &gt; VIDEO EDITING</span>
      </div>

      {/* Category Section */}
      <div className="category-sectionv">
        <h2>
          All <span className="highlightv">Categories</span>
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

export default VideoEditv;
