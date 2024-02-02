import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import Article from "./Article"
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {

  let image_p = "https://via.placeholder.com/215"
  
  return (
    <div className="App">
      <Header name="Overreacted"/>
      <About image={image_p} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
      <Article title={blogData.title} date={blogData.date} preview={blogData.preview} />
      
      
      
    </div>
  );
}

export default App;
