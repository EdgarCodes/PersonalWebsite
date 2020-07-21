import React, { useRef, useEffect} from 'react';
import { Link as ScrollLink} from "react-scroll";

//Components
import TextTyping from "../TextTyping";
import Photo from "../Photo";
import ParagraphContainer from "../ParagraphContainer";
import Icon from "../Icon";
import FlatIcon from "../FlatIcon";
import CourseList from "../CourseList";
import SkillGraph from "../SkillGraph";

//Helpers
import {courses, skills, about} from "../../Helpers/LongText";

//import photos
import graduation_photo from "../../Images/Graduation_Picture.jpg";
import nhs_badge from "../../Icons/NHS_Member_Badge-300x300.png";
import gilman_badge from "../../Icons/159503493365.png";

export default function Homepage() {

    const homePageInfo = useRef(null);

    document.title = "Edgar G. | Homepage";

    useEffect(() =>{
        window.scrollTo(0,0);
    }, [])

    return (
    <div className = "Homepage">
        <div className = "Homepage-landing">
            <div className = "Homepage-landing-text">
                <div className = "Homepage-landing-intro">{`//Hello, I am...`}</div>
                <TextTyping strings= {["Edgar, A Developer", "Edgar Gonzalez."]}/>
                <div className = "Homepage-landing-subtext"> A 3rd Year Computer Science Major at WKU</div>
            </div>
            <ScrollLink className = "Homepage-landing-btn"
            to= "Homepage-info"
            smooth={true}
            offset={-50}
            duration={500}
            ><i className="fas fa-arrow-down"></i>
            </ScrollLink>
        </div>

        <div className = "Homepage-info" ref = {homePageInfo}>
            <div className = "Homepage-info-1">
                <div className = "Homepage-container-1">
                    <div className = "Homepage-container-1-info">
                        <div className = "info-1-title">
                            <h1>About Me</h1>
                            <div className = "divider"/>
                        </div>
                        <ParagraphContainer>
                            {about}
                        </ParagraphContainer> 
                    </div>                   

                    <Photo image = {graduation_photo}/>
                </div>

                <div className = "Homepage-info-containers">
                    <Icon desc = "Set to Graduate Fall 2021">
                        <i className="fas fa-graduation-cap"></i>
                    </Icon>

                    <Icon desc = "Fluent in Spanish and English">
                        <i className="fas fa-globe-americas"></i>
                    </Icon>

                    <Icon desc = "Studying Full Stack Development">
                        <i className="fas fa-code"></i>
                    </Icon>

                    <Icon desc = "Strong Interest in Algorithms and Mathematics">
                        <i className="fas fa-infinity"></i>
                    </Icon>
                </div>

            </div>

            <div className = "Homepage-info-1">
                <div className = "info-1-title info-center">
                    <h1>Education</h1>
                    <div className = "divider"/>
                </div>
                
                <div className= "Homepage-info-education">
                    <div className = "Homepage-education-left">
                        <FlatIcon title = "University" desc = "Western Kentucky University" subDesc="3rd Year Sophmore">
                            <i className="fas fa-university"></i>
                        </FlatIcon>
                        <FlatIcon title = "Field of Study" desc = "Bachelor of Science Computer Science" subDesc="Minor in Mathematics">
                            <i className="fas fa-laptop-code"></i>
                        </FlatIcon>
                        <FlatIcon title = "Grade Point Average" desc = "GPA - 3.65" subDesc="">
                            <i className="fas fa-school"></i>
                        </FlatIcon>
                    </div>

                    <div className = "Homepage-education-right">
                        <CourseList courses = {courses}/>
                    </div>
                </div>
            </div>

            <div className = "Homepage-info-1">
                <div className = "info-1-title info-center">
                    <h1>Skills</h1>
                    <div className = "divider"/>
                </div>

                <div className = "Homepage-skills-graph">
                    <SkillGraph skills = {skills}/>
                </div>

                <div className = "Homepage-info-containers skills-container">
                    <Icon desc = "Version Control with Git">
                        <i className="fab fa-git-alt"></i>
                    </Icon>

                    <Icon desc = "Android Studio">
                        <i className="fab fa-android"></i>
                    </Icon>

                    <Icon desc = "Unity Game Engine">
                        <i className="fab fa-unity"></i>
                    </Icon>

                    <Icon desc = "Relational and No-SQL Databases">
                        <i className="fas fa-database"></i>
                    </Icon>

                    <Icon desc = "Linux-based Operating Systems">
                        <i className="fab fa-linux"></i>
                    </Icon>
                </div>
            </div>

            <div className = "Homepage-info-1">
                <div className = "info-1-title info-center">
                    <h1>Accomplishments</h1>
                    <div className = "divider"/>
                </div>

                <div className = "Homepage-badges">
                    <div className = "badge-container">
                        <img src={nhs_badge} alt="Part of the national honors society during highschool" />
                    </div>
                    
                    <div className = "badge-container">
                        <img src={gilman_badge} alt="Gilman Alumni" />
                    </div>
                </div>

                <div className = "Homepage-accom-sub">
                    <div className = "homepage-accomplishment">
                        <FlatIcon title = "Deans List" desc = "2018-2020 WKU" subDesc="">
                            <i className="fas fa-book"></i>
                        </FlatIcon>
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://www.wku.edu/mediarelations/documents/wku-2020-spring-dean-pres-bg.pdf">Go to Page</a>
                    </div>

                    <div className = "homepage-accomplishment">
                        <FlatIcon title = "Gilman Scholarship" desc = "WKU Gilman Alumni 2019 Article" subDesc="">
                            <i className="fas fa-plane"></i>
                        </FlatIcon>
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://www.wku.edu/news/articles/index.php?view=article&articleid=7812">Go to Page</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}
