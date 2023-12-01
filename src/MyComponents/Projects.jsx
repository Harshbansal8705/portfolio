import React from 'react'
import Project from './Project'
import VirtualPaint from "../static/images/WindowIcon2.png"
import Pypi from "../static/images/pypi.jpeg"

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h1 className='invisible-fade-up'>Projects</h1>
            <div className="projects-grid grid-invisible-fade-up">
                <Project
                    image={VirtualPaint}
                    title="Virtual Paint App"
                    tags={["Python", "Computer Vision", "OpenCV", "Mediapipe"]}
                    description="Using your webcam, the Virtual Paint App allows you to paint using your fingers."
                    link="https://github.com/Harshbansal8705/Virtual-Paint-App-2"
                />
                <Project
                    image={Pypi}
                    title="Hand Tracking Module"
                    tags={["Python", "OpenCV", "pip", "Mediapipe"]}
                    description="This is a pip package to simplify the use of mediapipe library to detect hands using simple functions."
                    link="https://github.com/Harshbansal8705/HandTrackingModule"
                />
            </div>
        </section>
    )
}
