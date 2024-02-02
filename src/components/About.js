import React from "react"
import blogData from "../data/blog";

function About(props) {
    
    return (
        <aside>
            <img src={props.image} alt="blog logo"/>
            <p>{props.about}</p>
        </aside>
        
    );
}

About.defaultProps = {
    image:"https://via.placeholder.com/215",
    about: blogData.about,

    /* defaultProps are used to handle missing props */
};

export default About;