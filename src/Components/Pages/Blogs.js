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
                date = "July 22th, 2020"
                title = "South Korea | Arrival"
                offset = "-1"
                link = "South-Korea-Arrival">
                The beginning of my study abroad adventure in South Korea beginning at Yonsei University.
                I share my most memorable parts of moving to a completely new country in Asia and the process I went through to be able to study abroad for free.
                </BlogCard>

                <BlogCard image =  {blog_image_2} 
                date = "July 26th, 2020"
                title = "Japan | The Great Detour"
                offset = "-4"
                link = "Study-Abroad-Japan">
                A detour from my South Korean adventure to dive into Japan for the first time. A long dream of mine to visit the rise of the rising sun
                has finally begun and I will share my experiences and recommendations for Japan!
                </BlogCard>

                <BlogCard image =  {blog_image_3} 
                date = "July 30th, 2020"
                title = "South Korea | Final Days"
                offset = "0"
                link = "South-Korea-Final-Days">
                The unfortunate ending to my journey, finally putting my thoughts together and sharing what I have learned through the past unforgettable months.
                The end of one story, the start of another!
                </BlogCard>
            </div>
        </div>
    )
}
