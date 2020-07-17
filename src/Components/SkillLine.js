import React from 'react';

export default function SkillLine(props) {

    function TrackedCircles({ isVisible }){
        let circles = [];

        for(let i = 0; i < 10; i++)
        {
            if(props.score > i)
            {
                circles.push(<div key = {i} className = "Skill-line-circle"/>);
            }
            else
            {
                circles.push(<div key = {i} className = "Skill-line-circle" style = {{backgroundColor: "grey"}}/>);
            }
        }

        return(
            <div className = "Skill-line">
            <div className = "Skill-line-text">{props.skill}</div>
                {circles.map(circle => circle)}
            </div>);
    }

    return (
        <TrackedCircles/>
    )
}
