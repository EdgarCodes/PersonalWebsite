import React from 'react';
import TrackVisibility from 'react-on-screen';

export default function ParagraphContainer(props) {

    const VisibleParagraph = ({ isVisible }) => {
        return isVisible?
        <div className = "paragraphContainer-text">
            {props.children}
        </div>
        :<div className = "paragraphContainer-offScreen">
            {props.children}
        </div>
    }


    return (
        <div className= "ParagraphContainer">
            <TrackVisibility once partialVisibility offset={100}>
                <VisibleParagraph/>
            </TrackVisibility>
        </div>
    )
}
