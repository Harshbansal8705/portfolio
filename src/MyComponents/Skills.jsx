import React from 'react'
import SkillsRow from './SkillsRow'

export default function Skills() {
  return (
    <section className="skills" id="skills">
        <h1>Skills</h1>
        <SkillsRow color={"#26C1F6"} type={"Programming Languages"} skills={["Python", "C", "C++", "HTML", "CSS", "JavaScript"]} />
        <SkillsRow color={"orange"} type={"Frameworks"} skills={["Numpy", "Pandas", "Django", "Flask", "OpenCV", "ReactJs", "NodeJs"]} />
        <SkillsRow color={"#02dac6"} type={"Machine Learning"} skills={["Scikit Learn", "Algorithms"]} />
        <SkillsRow color={"#ed2024"} type={"Tools"} skills={["Git", "Github", "MongoDB"]} />
        <SkillsRow color={"#673ee5"} type={"Soft Skills"} skills={["Leadership", "Event Management", "Speaking", "Time Management"]} />
    </section>
  )
}
