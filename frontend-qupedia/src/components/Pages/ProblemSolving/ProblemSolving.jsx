import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './ProblemSolving.css'

const ProblemSolving = () => {
  return (
    <>
    <Navbar/>
    <div className="problem-soving">
    <div className="hero-sectiondm">
        <h1 className="hero-headingdm">
          Elevate Your Expertise, <br /> Excel With <span className="highlightdm">Skill UP</span>
        </h1>
      </div>
      <div className="pro-hero-ps">
      <h1 className='heading-ps' >Problem solving</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


      </div>
      <div className="form-container-ps">
      <h1 className="form-title-ps">Book Session</h1>
      <form className="form-content-ps">
        <label>Enter Name</label>
        <input className='input-ps' type="text" placeholder="Enter Name" />

        <label>Enter Email</label>
        <input className='input-ps' type="email" placeholder="Enter Email" />

        <label>Enter Mobile No</label>
        <input className='input-ps' type="tel" placeholder="Enter Mobile No" />

        <label>Enter Address</label>
        <input className='input-ps' type="text" placeholder="Enter Address" />

        <label>Select Category</label>
        <select className='session-ps'>
          <option value="">Select Category</option>
          <option value="category1">Viodeo Editing</option>
          <option value="category2">Web Development</option>
          <option value="category3">2D Amination</option>
          <option value="category3">3D Amination</option>
          <option value="category3">Digital Markating</option>
        </select>

        <label>Pay Amount</label>
        <input className='input-ps' type="number" placeholder="Enter Amount" />

        <label>Enter problem solving</label>
        <textarea className='input-ps' placeholder="Enter problem solving"></textarea>

        <button className="pay-button-ps" type="submit">Pay Now</button>
      </form>
    </div>
      </div>





      <Footer/>
    </>
  )
}

export default ProblemSolving
