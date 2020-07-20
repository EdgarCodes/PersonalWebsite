import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className = "ProjectCard">
            <div className= "ProjectCard-ImageContainer">
                <img src = {props.image} alt= "Project Name"/>
            </div>

            <div className = "ProjectCard-info">
                <h1 className = "ProjectCard-Title">{props.title}</h1>
                <p className = "ProjectCard-desc">{props.children}</p>
                <a href= {props.link} className = "ProjectCard-btn" target ="_blank">View on Github</a>
            </div>
        </div>
    )
}
