import React, { useRef} from 'react';
import { Link as ScrollLink} from "react-scroll";

//Components
import TextTyping from "../TextTyping";
import Photo from "../Photo";
import ParagraphContainer from "../ParagraphContainer";
import Icon from "../Icon";
import FlatIcon from "../FlatIcon";
import CourseList from "../CourseList";

//Helpers
import {courses} from "../../Helpers/LongText";

//import photos
import graduation_photo from "../../Images/Graduation_Picture.jpg";

export default function Homepage() {

    const homePageInfo = useRef(null);

    document.title = "Edgar G. | Homepage";

    return (
    <div className = "Homepage">
        <div className = "Homepage-landing">
            <div className = "Homepage-landing-text">
                <div className = "Homepage-landing-intro">{`//Hello, I am...`}</div>
                <TextTyping strings= {["Edgar The Alpha", "Edgar Gonzalez."]}/>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br/><br/>
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            </div>

            <div className = "Homepage-info-1">
                <div className = "info-1-title info-center">
                    <h1>Blog: South Korea</h1>
                    <div className = "divider"/>
                </div>
            </div>

        </div>
    </div>
    )
}
