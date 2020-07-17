import React from 'react';

import SkillLine from "./SkillLine";

export default function SkillGraph(props) {

    return (
        <div className = "SkillGraph">
            {props.skills.map((skill, i) => 
                <SkillLine skill = {skill.name} score= {skill.score} key = {i}/>
            )}
        </div>
    )
}
