import React from 'react'
import Project from './Project'
import VirtualPaint from "../static/images/VirtualPaint.png"
import Pypi from "../static/images/pypi.jpeg"
import DigitRecognizer from "../static/images/DigitRecognizer.png"

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
                    links={{
                        "github": "https://github.com/Harshbansal8705/Virtual-Paint-App-2"
                    }}
                />
                <Project
                    image={Pypi}
                    title="Hand Tracking Module"
                    tags={["Python", "OpenCV", "pip", "Mediapipe"]}
                    description="This is a pip package to simplify the use of mediapipe library to detect hands using simple functions."
                    links={{
                        "github": "https://github.com/Harshbansal8705/HandTrackingModule"
                    }}
                />
                <Project
                    image={DigitRecognizer}
                    title="Digit Recognizer"
                    tags={["Machine Learning", "Python", "Scikit Learn", "Data Science"]}
                    description="Leveraging XGBoost algorithm, I constructed a digit recognition model that attained an impressive 98% accuracy on the MNIST dataset."
                    links={{
                        "github": "https://github.com/Harshbansal8705/Digit-Recognize",
                        "kaggle": "https://www.kaggle.com/harshbansalcoder/digit-recognizer"
                    }}
                />
            </div>
        </section>
    )
}
