import React from 'react';

//Components
import TextTyping from "../TextTyping";

export default function Homepage() {
    return (
    <div className = "Homepage">
        <div className = "Homepage-landing">
            <div className = "Homepage-landing-text">
                <div className = "Homepage-landing-intro">{`//Hello, I am...`}</div>
                <TextTyping strings= {["Edgar The Alpha", "Edgar Gonzalez."]}/>
            </div>
        </div>
        <div className = "Homepage-info">
            Homepage-info
        </div>
    </div>
    )
}
