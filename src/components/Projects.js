import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Hotel Management System",
      description:
        "A comprehensive system to manage hotel operations like booking, billing, and customer management.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveDemo: " https://funny-cassata-825720.netlify.app/",
      github: "https://github.com/vanshita-gawande/New-Learning ",
    },
    {
      title: "New FilmyVerse ",
      description:
        "A movie review and streaming platform with a sleekand streaming platform with a sleek interface and user-friendly navigation .",
      technologies: ["React", "Firebase", "TailwindCSS"],
      liveDemo: "https://example.com/newfilmyverse",
      github: "https://github.com/vanshita-gawande",
    },
    
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-description">
        A collection of projects showcasing my skills in full-stack development,
        UI/UX design, and problem-solving.
      </p>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-text">{project.description}</p>
            <p className="project-tech">
              <strong>Tech Stack:</strong> {project.technologies.join(", ")}
            </p>
            <div className="project-links">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
