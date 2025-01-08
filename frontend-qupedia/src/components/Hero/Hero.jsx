import React from 'react'
import { FaRegHandPointRight } from "react-icons/fa";
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className="whole-hero-container">
      <div className="hero-container">
        <h1 className='heading-h1'>Any Problem</h1>
        <h5>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.</h5>
        <div className='book-demo-btn'><img src="/src/components/Hero/pointer.png" alt="" height={25} width={35}/><div className='demo-btn'>Book Demo</div></div>
      </div>
      <div className='hero-contant-video'>
        <div className='vid-contant'>
            <h2>What is <span className="highlight">Qupedia ?</span></h2>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
        </div>
        <iframe className='iframe' width="340" height="180" src="https://www.youtube.com/embed/EGUyA5qcIkM?si=Fn9JIxZ5ocLCU9y4"  controls  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
    </>
  )
}

export default Hero
