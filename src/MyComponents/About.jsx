import React from 'react'
import Image from '../static/images/natural_programming.jpg'

export default function About() {
  return (
    <section className="about" id="about">
      <h1 className="invisible-fade-up">About Me</h1>
      <div className="about-content">
        <img src={Image} alt="" className="invisible-fade-up" />
        <p className="about invisible-fade-left">
          An engineering student at IIT Kharagpur, I'm currently pursuing a bachelor's degree while wearing multiple hats as a full stack web developer, a machine learning enthusiast, and a passionate advocate for startups and entrepreneurship. I'm dedicated to bridging the gap between technology and innovation, crafting the digital future with a blend of web development and AI, and nurturing a strong interest in the world of startups.
        </p>
      </div>
    </section>
  )
}
