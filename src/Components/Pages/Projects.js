import React, {useEffect} from 'react';

export default function Projects() {
    useEffect(() =>{
        window.scrollTo(0,0);
        document.title = "Edgar G. | Projects";
    }, [])
    return (
        <div className = "Projects">
            <div className = "Projects-landing">
                <div className = "landing-overlay"/>
                <h1 className = "Projects-landing-title">Projects</h1>
            </div>
        </div>
    )
}
