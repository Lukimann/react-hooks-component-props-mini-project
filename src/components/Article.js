import React from "react"
import blogData from "../data/blog";

function Article(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>{props.preview}</p>
        </article>
    )
}

Article.defaultProps = {
   title: blogData.title,
   date: "January 1, 1970",
   preview: blogData.preview,
};
export default Article;