import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import CourseDetails from "./components/CourseDetails";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";

function App() {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: "20px" }}>
        <h1>Blogger App</h1>
        <button onClick={toggleTheme} style={{ marginBottom: "20px" }}>
          Toggle Theme
        </button>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ borderRight: "3px solid green", paddingRight: "20px" }}>
            <CourseDetails />
          </div>
          <div style={{ borderRight: "3px solid green", paddingRight: "20px" }}>
            <BookDetails />
          </div>
          <div>
            <BlogDetails />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
