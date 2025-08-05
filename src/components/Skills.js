// import React from "react";
// import "./Skills.css";
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from "react-icons/fa";

// const Skills = () => {
//   const skills = [
//     { name: "React", level: 85, icon: <FaReact className="icon" /> },
//     { name: "Node.js", level: 75, icon: <FaNodeJs className="icon" /> },
//     { name: "MongoDB", level: 70, icon: <FaDatabase className="icon" /> },
//     { name: "JavaScript", level: 80, icon: <FaJsSquare className="icon" /> },
//     { name: "HTML", level: 95, icon: <FaHtml5 className="icon" /> },
//     { name: "CSS", level: 90, icon: <FaCss3Alt className="icon" /> },
//   ];

//   return (
//     <section id="skills" className="skills">
//       <h2>My Skills</h2>
//       <div className="skills-list">
//         {skills.map((skill, index) => (
//           <div key={index} className="skill">
//             <p>
//               {skill.icon}
//               {skill.name}
//             </p>
//             <div className="progress-bar">
//               <div className="progress" style={{ width: `${skill.level}%` }}></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

// new 
// import React from "react";
// import "./Skills.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";
// import { faReact, faNodeJs, faJsSquare, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"; // Corrected imports



// const Skills = () => {
//   const skills = [
//     { name: "React", level: 85, icon: <FontAwesomeIcon icon={faReact} className="icon" /> },
//     { name: "Node.js", level: 75, icon: <FontAwesomeIcon icon={faNodeJs} className="icon" /> },
//     { name: "MongoDB", level: 70, icon: <FontAwesomeIcon icon={faDatabase} className="icon" /> },  
//     { name: "JavaScript", level: 80, icon: <FontAwesomeIcon icon={faJsSquare} className="icon" /> },
//     { name: "HTML", level: 95, icon: <FontAwesomeIcon icon={faHtml5} className="icon" /> },
//     { name: "CSS", level: 90, icon: <FontAwesomeIcon icon={faCss3} className="icon" /> },
//   ];

//   return (
//     <section id="skills" className="skills">
//       <h2>My Skills</h2>
//       <div className="skills-list">
//         {skills.map((skill, index) => (
//           <div key={index} className="skill">
//             <p>
//               {skill.icon}
//               {skill.name}
//             </p>
//             <div className="progress-bar">
//               <div className="progress" style={{ width: `${skill.level}%` }}></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNodeJs, faJsSquare, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"; 

const Skills = () => {
  const skills = [
    { name: "React", icon: <FontAwesomeIcon icon={faReact} className="icon" />, color: '#00b0ff' },
    { name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} className="icon" />, color: '#68a063' },
    { name: "MongoDB", icon: <FontAwesomeIcon icon={faDatabase} className="icon" />, color: '#4caf50' },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faJsSquare} className="icon" />, color: '#f7df1e' },
    { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} className="icon" />, color: '#e34f26' },
    { name: "CSS", icon: <FontAwesomeIcon icon={faCss3} className="icon" />, color: '#2965f1' },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div 
              className="icon-wrapper"
              style={{ color: skill.color }} // Apply icon color
            >
              {skill.icon}
            </div>
            <p className="skill-name">
              {skill.name} {/* Display skill name */}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
