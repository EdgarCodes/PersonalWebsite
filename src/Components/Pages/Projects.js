import React, {useEffect} from 'react';

export default function Projects() {
    useEffect(() =>{
        window.scrollTo(0,0);
        document.title = "Edgar G. | Projects";
    }, [])
    return (
        <div>
            Projects!
        </div>
    )
}
