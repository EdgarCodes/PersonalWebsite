import React from 'react';

export default function FlatIcon(props) {
    return (
        <div className = "FlatIcon">
            <div className = "FlatIcon-Background">
                <div className = "FlatIcon-symbol">
                    {props.children}
                </div>    
                <div className = "FlatIcon-text">{props.title}</div>
            </div>
            <div className = "FlatIcon-desc">
                {props.desc}
            </div>
            <div className = "FlatIcon-Subdesc">
                {props.subDesc}
            </div>
        </div>
    )
}
