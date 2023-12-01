import React from 'react'

export default function Project(props) {
    let tags = props.tags ? props.tags.map(tag => (<span className='tag'>{tag}</span>)) : undefined
    return (
        <div className="project">
            <div className="image">
                <img src={props.image} alt='' />
                <div className="hover-content">
                    <p>{props.description}</p>
                    <a href={props.link} target="_blank" rel='noreferrer' className="gh-link">View on Github <i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="content">
                <h2 className="project-name" title={props.title}>{props.title}</h2>
                <div className="tags">
                    {tags}
                </div>
            </div>
        </div>
    )
}
