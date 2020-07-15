import React from 'react';
import TrackVisibility from 'react-on-screen';

export default function Icon(props) {

    const TrackedIcon = ({ isVisible }) => {
        return isVisible?
        <div className = "Icon">
            <div className = "Icon-Background">
                <div className = "Icon-symbol">
                    {props.children}
                </div>    
            </div>

            <div className = "Icon-desc">
                {props.desc}
            </div>
        </div>:
        <div className = "Icon-offScreen"/>
    }

    return (
        <TrackVisibility once partialVisibility>
            <TrackedIcon/>
        </TrackVisibility>
    )
}
