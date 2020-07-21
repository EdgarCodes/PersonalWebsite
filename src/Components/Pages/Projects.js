import React, {useEffect} from 'react';

import ProjectCard from "../ProjectCard";

//images
import preview_1 from "../../Images/project-preview-image.jpg";
import preview_2 from "../../Images/project-pokedex-preview.jpg";
import preview_3 from "../../Images/project-schedule-preview.jpg";

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
                link = "https://github.com/MidnightMinty/PersonalWebsite"
                image = {preview_1}>
                    Personal Website to display my resume for employers and people who are interested in my work. 
                    I also use this website to host my blogs and projects.
                    This site was created using react, next, javascript, scss and hosted using a static website hosting service.
                </ProjectCard>

                <ProjectCard
                title = "Pokedex Entries"
                link = "https://github.com/MidnightMinty/Pokedex"
                image = {preview_2}>
                    A website based of off the popular game "Pokemon", It uses the PokeAPI to grab the information of a certain pokemon.
                    There are 800+ different pokemon displayed in the website. The website was built using React.
                </ProjectCard>

                <ProjectCard
                title = "College Schedule Website"
                link = "https://github.com/MidnightMinty/Schedule-Web-App"
                image = {preview_3}>
                    A website that keeps track of classes during the week. The user is able to add, delete, and modify the classes in the schedule.
                    This app was created using React; the website was mostly used for practice of React's state and modification of that state using React Hooks.
                </ProjectCard>
            </div>
        </div>
    )
}
