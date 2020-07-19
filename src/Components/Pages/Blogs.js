import React from 'react';
import BlogCard from "../BlogCard";

//Blog preview images
import blog_image_1 from "../../Images/Blog_1.webp";

export default function Blogs() {
    return (
        <div className = "Blogs">
            <div className = "Blogs-landing">
                <div className = "Blogs-landing-overlay"/>
                <h1 className = "Blogs-landing-title">Blogs</h1>
            </div>

            <div className="Blogs-CardContainer">
                <BlogCard image =  {blog_image_1}/>
            </div>
        </div>
    )
}
