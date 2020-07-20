import React, {useEffect} from 'react';

export default function BlogPage(props) {
    const {image,author, date, title, blogContent} = props.blogData;

    useEffect(() =>{
        window.scrollTo(0,0);
        document.title = title;
    }, [title])

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
                
                <div className = "Blogpage-image-container">
                    <img src = {image} alt= {title} />
                </div>
            </div>

            {blogContent}
        </div>
    )
}
