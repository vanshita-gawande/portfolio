
// export default Contact;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      {/* Contact Info */}
      <p className="contact-info">
        <FontAwesomeIcon icon={faEnvelope} className="icon" /> vanshitapatil01@gmail.com
      </p>
      <p className="contact-info">
        <FontAwesomeIcon icon={faPhone} className="icon" /> 9699983645
      </p>
    <h4> Have Questions ? Drop Me a Message</h4>
      {/* Contact Form */}
      <form 
        className="contact-form"
        action="https://formsubmit.co/vanshitapatil01@gmail.com"  // Replace with your email
        method="POST"
      >
        {/* Hidden Fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

        {/* Input Fields */}
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>

        <div className="send-btn-container">
        <button type="submit" className="send-btn">Send Message</button>
        </div>
      </form>
      {/* <h4> Connect with Me</h4> */}
      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/vanshita-gawande-055690246/ " target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
        <a href="https://github.com/vanshita-gawande" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a> */}
      </div>

      {/* Resume Download */}
      <div className="resume-download">
        <h3>Download My Resume</h3>
        <a href="/resume.pdf" download="YourName_Resume.pdf" className="download-btn">
          <FontAwesomeIcon icon={faDownload} className="download-icon" /> Download Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
