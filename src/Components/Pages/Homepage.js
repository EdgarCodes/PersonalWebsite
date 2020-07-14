import React from 'react';

//Components
import TextTyping from "../TextTyping";
import Photo from "../Photo";

//import photos
import graduation_photo from "../../Images/Graduation_Picture.jpg";
import Basic_Logo from "../../Images/Basic_Logo.png";

export default function Homepage() {
    document.title = "Edgar G. | Homepage";
    return (
    <div className = "Homepage">
        <div className = "Homepage-landing">
            <div className = "Homepage-landing-text">
                <div className = "Homepage-landing-intro">{`//Hello, I am...`}</div>
                <TextTyping strings= {["Edgar The Alpha", "Edgar Gonzalez."]}/>
            </div>
            <div className = "Homepage-landing-btn"><i className="fas fa-arrow-down"></i></div>
        </div>
        <div className = "Homepage-info">
            <div className = "Homepage-info-1">
                <div className = "info-1-title">
                    <h1>About</h1>
                    <div className = "divider"/>
                </div>

                <div className = "Homepage-container-1">
                    <p className = "paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                     sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <Photo images = {[{image: graduation_photo, rot: 8}, {image: Basic_Logo, rot: 1}]} />
                </div>
            </div>
        </div>
    </div>
    )
}
