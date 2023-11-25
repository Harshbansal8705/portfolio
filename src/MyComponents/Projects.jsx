import React from 'react'
import Project from './Project'

export default function Projects() {
    return (
        <section className="projects">
            <h1 className='invisible-fade-up'>Projects</h1>
            <div className="projects-grid grid-invisible-fade-up">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    )
}
