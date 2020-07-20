import React from 'react';

//images
import blog_image_1 from "./Blog_Images/Blog_1.jpg";
import blog_image_2 from "./Blog_Images/Blog_2.jpg";

const CurrentBlog = () =>{
    return(
    <div className = "BlogPage-Content">    
        <h1 className = "Blogpage-subtitle">Before I Left</h1>
        <p className = "Blogpage-Paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Et malesuada fames ac turpis egestas integer eget. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nibh praesent tristique magna sit amet purus. Sapien eget mi proin sed libero enim sed faucibus turpis. Nunc faucibus a pellentesque sit amet porttitor eget. Id porta nibh venenatis cras sed. Dui sapien eget mi proin sed libero. Magna fermentum iaculis eu non. Vitae tempus quam pellentesque nec nam aliquam. Neque volutpat ac tincidunt vitae semper quis lectus. A arcu cursus vitae congue.
            Non consectetur a erat nam at lectus urna duis convallis.
            <br/>
            <br/>
            Ut tellus elementum sagittis vitae. Aenean et tortor at risus viverra. Elit at imperdiet dui accumsan sit amet. Sed viverra tellus in hac. Euismod elementum nisi quis eleifend quam. Tristique nulla aliquet enim tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Massa placerat duis ultricies lacus sed. Nisi porta lorem mollis aliquam. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Sem integer vitae justo eget magna fermentum iaculis. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Nisl tincidunt eget nullam non nisi est. Accumsan in nisl nisi scelerisque. Sed id semper risus in hendrerit gravida rutrum quisque. Adipiscing elit ut aliquam purus sit amet luctus venenatis.
            Purus sit amet luctus venenatis lectus magna fringilla. Lectus quam id leo in vitae turpis massa sed elementum.
        </p>

        <div className = "Blogpage-image-container-content">
            <img src = {blog_image_1} alt = "Me in japan"/>
        </div>
        
        <h1 className = "Blogpage-subtitle">Arrival</h1>
        <p className = "Blogpage-Paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Et malesuada fames ac turpis egestas integer eget. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nibh praesent tristique magna sit amet purus. Sapien eget mi proin sed libero enim sed faucibus turpis. Nunc faucibus a pellentesque sit amet porttitor eget. Id porta nibh venenatis cras sed. Dui sapien eget mi proin sed libero. Magna fermentum iaculis eu non. Vitae tempus quam pellentesque nec nam aliquam. Neque volutpat ac tincidunt vitae semper quis lectus. A arcu cursus vitae congue.
            Non consectetur a erat nam at lectus urna duis convallis.
            <br/>
            <br/>
            Ut tellus elementum sagittis vitae. Aenean et tortor at risus viverra. Elit at imperdiet dui accumsan sit amet. Sed viverra tellus in hac. Euismod elementum nisi quis eleifend quam. Tristique nulla aliquet enim tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Massa placerat duis ultricies lacus sed. Nisi porta lorem mollis aliquam. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Sem integer vitae justo eget magna fermentum iaculis. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Nisl tincidunt eget nullam non nisi est. Accumsan in nisl nisi scelerisque. Sed id semper risus in hendrerit gravida rutrum quisque. Adipiscing elit ut aliquam purus sit amet luctus venenatis.
            Purus sit amet luctus venenatis lectus magna fringilla. Lectus quam id leo in vitae turpis massa sed elementum.
        </p>
    </div>);
}

export const blog = {
    name: "study-abroad-japan",
    title: "Study Abroad - Japan",
    date: "July 28th, 2020",
    author: "Edgar Gonzalez",
    image: blog_image_2,
    blogContent: <CurrentBlog/>
}