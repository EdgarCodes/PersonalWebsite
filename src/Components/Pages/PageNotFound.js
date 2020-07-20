import React, {useEffect} from 'react';

export default function PageNotFound() {
    useEffect(() =>{
        window.scrollTo(0,0);
        document.title = "Edgar G. | Not Found";
    }, [])

    const containerStyles = 
    {
        backgroundColor: "rgb(238, 238, 238)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh"
    }

    const iconStyles = 
    {
        fontSize: "300px",
        color: "#f5973e"
    }

    return (
        <div style = {containerStyles}>
            <div style = {iconStyles}>
                <i className="fas fa-ban"></i>
            </div>
            <h1>404 PAGE NOT FOUND</h1>
        </div>
    )
}
