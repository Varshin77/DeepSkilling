// src/components/CourseDetails.js
import React from "react";

const CourseDetails = () => {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/2021" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <strong>{course.name}</strong>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
