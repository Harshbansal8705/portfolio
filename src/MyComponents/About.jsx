import React from 'react'
import Image from '../static/images/natural_programming.jpg'

export default function About() {
  return (
    <section className="about invisible-fade-up">
      <h1>About Me</h1>
      <div className="about-content" style={{
        display: "flex"
      }}>
        <img src={Image} alt="" style={{
          width: "40%"
        }} />
        <p className='about'>
          An engineering enthusiast at IIT Kharagpur, I'm currently pursuing a bachelor's degree while wearing multiple hats as a full stack web developer, a machine learning enthusiast, and a passionate advocate for startups and entrepreneurship. I'm dedicated to bridging the gap between technology and innovation, crafting the digital future with a blend of web development and AI, and nurturing a strong interest in the world of startups.
        </p>
      </div>
    </section>
  )
}
