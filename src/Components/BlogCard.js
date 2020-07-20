import React from 'react';
import {Link} from "react-router-dom";

export default function BlogCard(props) {
    return (
        <div className = "BlogCard">
            <div className = "BlogCard-img-container" style = 
            {{
                backgroundImage: `url(${props.image})`,
                backgroundPositionY: `${props.offset}rem`
            }} />
            
            <div className= "BlogCard-data">
                <div className = "BlogCard-date">{props.date}</div>
            </div>

            <div className = "BlogCard-Title">
                {props.title}
            </div>

            <div className = "BlogCard-descrition">
                {props.children}
            </div>

            <Link to= {`/blog/${props.link}`} 
            className = "BlogCard-btn">
            Read More<i className="fas fa-chevron-right icon-btn"></i></Link>
        </div>
    )
}
