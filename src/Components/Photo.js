import React, { useState, useEffect } from 'react';
import TrackVisibility from 'react-on-screen';

export default function Photo(props) {

    const TrackedPhoto = ({ isVisible }) => {
        return isVisible?
        <div className = "Photos">
            <div className = "Photos-container">
                    <img src = {props.image} alt="me"/>
            </div>
        </div>:
        <div className = "Photos"/>
    }

    return ( 
        <TrackVisibility once partialVisibility>
            <TrackedPhoto/>
        </TrackVisibility>
    )
}