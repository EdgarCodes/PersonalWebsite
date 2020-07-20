import React from 'react';
import project_image from "../Images/project-preview-image.png";

export default function ProjectCard(props) {
    return (
        <div className = "ProjectCard">
            <div className= "ProjectCard-ImageContainer">
                <img src = {props.image} alt= "Project Name"/>
            </div>

            <div className = "ProjectCard-info">
                <h1 className = "ProjectCard-Title">{props.title}</h1>
                <p className = "ProjectCard-desc">{props.children}</p>
                <a href= "#" className = "ProjectCard-btn">View on Github</a>
            </div>
        </div>
    )
}
