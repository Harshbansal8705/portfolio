import React from 'react'

export default function SkillsRow({ type, skills, color }) {
    const tags = skills.map((skill, id) => {
        return <span key={id} className='skill' style={{color: color}}>{skill}</span>
    })
    
    return (
        <div className="skills-row slide-r-in">
            <h3>{type}<span className='semicolon semicolon-1'>:</span></h3>
            <div className="skills"><span className='semicolon semicolon-2'>:</span> {tags}</div>
        </div>
    )
}
