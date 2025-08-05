import React from "react";
import "./Home.css";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  return (
    <section id="home" className="home">
     <div className="home-content">
  {/* Left Side - Text Content */}
  <motion.div 
    className="text-container"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2>
      Welcome to <span className="highlight">My Portfolio</span>
    </h2>
    <p className="intro-text">
      I'm a <strong className="highlight">Full-Stack Developer</strong> specializing in
      <span className="tech-stack"> React, Node.js, MongoDB, and Blockchain</span>.  
      <br /> I build <span className="highlight">high-performance</span>, 
      <span className="highlight"> scalable</span> applications that deliver 
      <span className="highlight"> seamless user experiences</span>.  
    </p>

    {/* Call to Action Button */}
    <a href="#projects" className="cta-button">
      View My Work <FaArrowDown />
    </a>
  </motion.div>

  {/* Right Side - Profile Image */}
  <motion.div 
    className="image-container"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img src="/images/Profile.jpg" alt="Profile" className="profile-img" />
  </motion.div>
</div>

    </section>
  );
}

export default Home;
