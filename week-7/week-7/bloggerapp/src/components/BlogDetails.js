import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

const BlogDetails = () => {
  const theme = useContext(ThemeContext);

  const blogs = [
    { title: "React Learning", author: "Stephen Biz", content: "Welcome to learning React!" },
    { title: "Installation", author: "Schwezdenier", content: "You can install React from npm." }
  ];

  const buttonStyle =
    theme === "light"
      ? { backgroundColor: "#eee", color: "#000", padding: "5px 10px", border: "1px solid #ccc" }
      : { backgroundColor: "#333", color: "#fff", padding: "5px 10px", border: "1px solid #444" };

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <strong>{blog.title}</strong>
          <p><em>{blog.author}</em></p>
          <p>{blog.content}</p>
          <button style={buttonStyle}>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
