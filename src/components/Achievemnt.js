import React from "react";
import "./Achievements.css"; // Create a corresponding CSS file for styling

const Achievements = () => {
  const achievements = [
    {
      title: "First Year College Topper (Group A)",
      description:
        "Awarded for academic excellence in the first year of college (2022).",
      year: "2022",
    },
    {
      title: "Google Cloud Certification",
      description:
        "Completed Google Cloud's Associate Cloud Engineer certification.",
      year: "2023",
    },
    {
      title: "Udemy Full-Stack Developer Course",
      description:
        "Earned certification in MERN stack development from Udemy.",
      year: "2024",
    },
    {
      title: "Best Project Award",
      description:
        "Recognized for the best capstone project: 'Hotel Management System.'",
      year: "2023",
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <h2>Achievements & Certifications</h2>
      <ul className="achievement-list">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            <span className="year">{achievement.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
