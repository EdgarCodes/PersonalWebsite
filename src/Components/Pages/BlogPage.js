import React, {useEffect} from 'react';
import { animateScroll as scroll } from "react-scroll";

export default function BlogPage(props) {
    const {image,author, date, title, blogContent, imageOffset} = props.blogData;

    useEffect(() =>{
        scroll.scrollTo(0)
    }, [])

    return (
        <div className = "BlogPage">
            <div className = "BlogPage-Intro">
                <div className = "Blogpage-info">
                    <div className = "Blogpage-Title">{title}</div>
                    <div className = "Blog-page-dates">
                        <div className = "Blog-page-date">{date}</div>
                        <div className = "Blog-page-name">{`By ${author}`}</div>
                    </div>
                </div>

                <div className = "Blogpage-Intro-Image" style = 
                {{
                    backgroundImage: `url(${image})`,
                    backgroundPositionY: `${imageOffset}rem`
                }} />
            </div>

            {blogContent}
        </div>
    )
}
