import React, {useEffect} from 'react';

import ProjectCard from "../ProjectCard";

//image
import preview_1 from "../../Images/project-preview-image.png";

export default function Projects() {
    useEffect(() =>{
        window.scrollTo(0,0);
        document.title = "Edgar G. | Projects";
    }, [])
    return (
        <div className = "Projects">
            <div className = "Projects-landing">
                <div className = "landing-overlay"/>
                <h1 className = "Projects-landing-title">Projects</h1>
            </div>

            <div className = "Projects-Card-Container">
                <ProjectCard
                title = "Edgar's Personal Website"
                image = {preview_1}>
                    Personal Website to display my resume for employers and people who are interested in my work. 
                    I also use this website to host my blogs and projects.
                    This site was created using react, next, javascript, scss and hosted using a static website hosting service.
                </ProjectCard>

                <ProjectCard
                title = "Edgar's Personal Website"
                image = {preview_1}>
                    Personal Website to display my resume for employers and people who are interested in my work. 
                    I also use this website to host my blogs and projects.
                    This site was created using react, next, javascript, scss and hosted using a static website hosting service.
                </ProjectCard>
            </div>
        </div>
    )
}
