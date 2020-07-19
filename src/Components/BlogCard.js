import React from 'react';

export default function BlogCard(props) {
    return (
        <div className = "BlogCard">
            <div className = "BlogCard-Title">
                Blog Title
            </div>

            <div className = "BlogCard-descrition">
                Blog Description
            </div>

            <div className= "BlogCard-date">

            </div>

            <div className = "BlogCard-img-container">
                <img src = {props.image} alt= "Blog Title"/>    
            </div>
        </div>
    )
}
