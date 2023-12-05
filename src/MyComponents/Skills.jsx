import React from 'react'
import SkillsRow from './SkillsRow'

export default function Skills() {
  return (
    <section className="skills" id="skills">
        <h1>Skills</h1>
        <SkillsRow type={"Programming Languages"} skills={["Python", "C", "C++", "HTML", "CSS", "JavaScript"]} />
        <SkillsRow type={"Frameworks"} skills={["Numpy", "Pandas", "Django", "Flask", "OpenCV", "ReactJs", "NodeJs"]} />
        <SkillsRow type={"Machine Learning"} skills={["Scikit Learn", "Algorithms"]} />
        <SkillsRow type={"Tools"} skills={["Git", "Github", "MongoDB"]} />
        <SkillsRow type={"Soft Skills"} skills={["Leadership", "Event Management", "Speaking", "Time Management"]} />
    </section>
  )
}
