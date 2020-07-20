import BlogPage from "../Components/Pages/BlogPage";
import React from 'react';

//import blogs
import {blog as blog_1} from "./SouthKoreaArrival";
import {blog as blog_2} from "./StudyAbroadJapan";


const blogList = [
    blog_1,
    blog_2
]


export default function getBlog(props){
    let blogName = props.match.params.name;
    let currentBlog = blogList.find(blog => blog.name.toLowerCase() === blogName.toLowerCase());
    if(currentBlog === undefined)
    {
        console.log("Blog does not exist");
    }
    console.log(currentBlog);
    return <BlogPage blogData = {currentBlog} />
}