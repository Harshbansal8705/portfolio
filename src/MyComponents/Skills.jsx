import React from 'react'
import SkillsRow from './SkillsRow'

export default function Skills() {
  return (
    <section className="skills" id="skills">
        <h2>Skills</h2>
        <SkillsRow type={"Languages"} skills={["Python", "C", "C++", "JavaScript", "TypeScript"]} />
        <SkillsRow type={"Frameworks"} skills={[ "ReactJs", "NodeJs", "NextJs", "Django", "Flask", "OpenCV", "Numpy", "Pandas", "Sklearn", "Tensorflow"]} />
        <SkillsRow type={"Tools"} skills={["Git", "Github", "MongoDB", "PostgreSQL", "Docker", "AWS"]} />
        <SkillsRow type={"Soft Skills"} skills={["Leadership", "Event Management", "Speaking", "Time Management"]} />
        <SkillsRow type={"Others"} skills={["Redux", "Web Socket"]} />
    </section>
  )
}
