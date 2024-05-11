import React from 'react'

export default function Project(props) {
    let tags = props.tags ? props.tags.map(tag => (<span className='tag'>{tag}</span>)) : undefined
    let links = Object.entries(props.links).map(entry => (<a href={entry[1]} target='_blank' rel='noreferrer' className={`${entry[0]}-link`}>{entry[0]} <i className='bx bx-link-external'></i></a>))
    return (
        <div className="project">
            <div className="image">
                <img src={props.image} alt='' />
                <div className="hover-content">
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="content">
                <div className="up">
                    <h3 className="project-name" title={props.title}>{props.title}</h3>
                    <div className="tags">
                        {tags}
                    </div>
                </div>
                <div className="down">
                    <div className="links">
                        {links}
                    </div>
                </div>
            </div>
        </div>
    )
}
