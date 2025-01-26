import React from 'react'
import Project from './Project'
import VirtualPaint from "../static/images/VirtualPaint.png"
import Pypi from "../static/images/pypi.jpeg"
import DigitRecognizer from "../static/images/DigitRecognizer.png"
import ECommerce from "../static/images/ECommerce.jpg"
import Canvas from "../static/images/Canvas.png"

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h2 className='invisible-fade-up'>Projects</h2>
            <div className="projects-grid grid-invisible-fade-up">
                <Project
                    image={Canvas}
                    title="Canvas - Whiteboard Collaboration App"
                    tags={["Next.js", "WebSocket", "TypeScript", "TailwindCSS"]}
                    description="Canvas is a real-time whiteboard app built with Next.js, WebSockets, TypeScript, and Tailwind CSS. It allows multiple users to securely log in, draw, erase, change colors, and interact on a shared canvas simultaneously."
                    links={{
                        "visit": "https://canvas.harshbansal.in/",
                        "github": "https://github.com/Harshbansal8705/canvas",
                    }}
                />
                <Project
                    image={ECommerce}
                    title="E-Commerce Website"
                    tags={["React", "Node.js", "Express.js", "MongoDB", "Redux"]}
                    description="This is a comprehensive E-Commerce website created with MERN Stack, integrating user authentication, cart and product management, optimizing the product list with brand and category filters."
                    links={{
                        "visit": "https://ecommerce-steel-eight.vercel.app/",
                        "github": "https://github.com/Harshbansal8705/ECommerce-Website"
                    }}
                />
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
                    tags={["Machine Learning", "Python", "Scikit-learn", "Data Science"]}
                    description="Leveraging XGBoost algorithm, I constructed a digit recognition model that attained an impressive 98% accuracy on the MNIST dataset."
                    links={{
                        "github": "https://github.com/Harshbansal8705/Digit-Recognizer",
                        "kaggle": "https://www.kaggle.com/harshbansalcoder/digit-recognizer"
                    }}
                />
            </div>
        </section>
    )
}
