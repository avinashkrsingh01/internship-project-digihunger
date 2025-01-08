import React from 'react'
import Sidenav from '../../Side-Nav/Sidenav';
import Hero from '../../Hero/Hero';
import Onetoone from '../../One-to-one/Onetoone';
import Doubtpage from '../../DoubtSolPage/Doubtpage';
import TeacherInspire from '../../TeacherInspire/TeacherInspire';
import MentorCard from '../../MentorCard/MentorCard';
import Contact from '../../Contact/Contact';
import Advantage from '../../Advantage/Advantage';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';


const Home = () => {
  return (
    <div>
       <Navbar/>
       <div className="home-container">
        <Sidenav/>
        <Hero/>
      </div>
      <Onetoone/>
      <Doubtpage/>
      <TeacherInspire/>
      <MentorCard/>
        <Contact/>
        <Advantage/>
        <Footer/>
    </div>
  )
}

export default Home
