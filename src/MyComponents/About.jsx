import React from 'react'
import Image from '../static/images/natural_programming.jpg'

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="invisible-fade-up">About Me</h2>
      <div className="about-content">
        <img src={Image} alt="" className="invisible-slide-up" />
        <p className="about invisible-fade-left">
          Forget the textbooks, I'm more interested in coding, the next big thing. I'm juggling building web apps that would make Spiderman jealous and exploring the world of Machine Learning and AI. I believe that the future belongs to the innovators, the ones who aren't afraid to break the rules and build something truly remarkable.<br />  So, join me on this journey through the digital landscape, where the only limit is our imagination (and maybe the occasional server meltdown, Oops...).
        </p>
      </div>
    </section>
  )
}
