import React from 'react'
import Image from '../static/images/example.webp'

export default function Project() {
    return (
        <div className="project">
            <div className="image">
                <img src={Image} alt='' />
                <div className="hover-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque cupiditate velit commodi tempore ex sit consequatur architecto mollitia modi neque.</p>
                    <a href="https://github.com/harshbansal8705/" target="_blank" rel='noreferrer' className="gh-link">View on Github <i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="content">
                <h2 className="project-name">Project 1</h2>
                <div className="tags">
                    <span className='tag'>CSS</span>
                    <span className='tag'>Express</span>
                    <span className='tag'>MongoDB</span>
                    <span className='tag'>HTML</span>
                    <span className='tag'>JavaScript</span>
                    <span className='tag'>Node</span>
                    <span className='tag'>Python</span>
                    <span className='tag'>Django</span>
                    <span className='tag'>React</span>
                </div>
            </div>
        </div>
    )
}
