import React, { useEffect } from 'react';
import BlogCard from "../BlogCard";

//Blog preview images
import blog_image_1 from "../../Images/Blog_1_preview.jpg";
import blog_image_2 from "../../Images/Blog_2_preview.jpg";
import blog_image_3 from "../../Images/blog_3_preview.jpg";

export default function Blogs() {
    useEffect(() =>{
        window.scrollTo(0,0);
        document.title = "Edgar G. | Blogs";
    }, [])

    return (
        <div className = "Blogs">
            <div className = "Blogs-landing">
                <div className = "landing-overlay"/>
                <h1 className = "Blogs-landing-title">Blogs</h1>
            </div>

            <div className="Blogs-CardContainer">
                <BlogCard image =  {blog_image_1} 
                date = "July 19th, 2020"
                title = "South Korea | Arrival"
                offset = "-1"
                link = "South-Korea-Arrival">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel eros donec ac.
                </BlogCard>

                <BlogCard image =  {blog_image_2} 
                date = "July 23th, 2020"
                title = "Study Abroad | Japan"
                offset = "-4"
                link = "Study-Abroad-Japan">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel eros donec ac.
                </BlogCard>

                <BlogCard image =  {blog_image_3} 
                date = "July 26th, 2020"
                title = "South Korea | Final Days"
                offset = "0"
                link = "South-Korea-Final-Days">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel eros donec ac.
                </BlogCard>
            </div>
        </div>
    )
}
