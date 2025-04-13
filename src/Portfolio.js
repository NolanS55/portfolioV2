import React from "react";
import "./Portfolio.css";
import purpleWave from "./purpleWave.svg";
import skinnyWave from "./skinnyWave.svg"
import { useState } from 'react';
import image from "./sudoku.png"
import movie from "./movie.png"
import oneScan from "./oneScan.png"
import profile from "./profile.png"
import { TypeAnimation } from 'react-type-animation';

const Portfolio = () => {

    const [company_name, setCompanyName] = useState("TECHCOM");
    const [title, setTitle] = useState("Full Stack Software Engineer Intern");
    const [duration, setDuration] = useState("May - August 2024");
    const [items, setItems] = useState(["Debugged MySQL queries and optimized PHP code to enhance server-side performance, contributing to sprint deliverables in an Agile environment.",
        "Developed and automated database tasks using Cron scripts, streamlining server-side operations, and reported progress in daily stand ups.",
        "Actively participated in Scrum meetings, including sprint planning, stand ups, and retrospectives, to ensure timely delivery of features and bug fixes.",
        "Collaborated with QA teams to create test cases, resolve bugs, and perform quality checks, utilizing Agile principles and the SDLC Waterfall model to ensure smooth project progression.",
        "Updated jQuery and JavaScript functions to improve client-side operations, with continuous feedback loops from sprint reviews to enhance user experience."
    ])
    const [tags, setTags] = useState(["PHP", "JavaScript", "MySQL", "HTML/CSS", "Bash", "SCRUM"])
    const [fadeIn, setFadeIn] = useState(0);
    const [selected, setSelected] = useState("black");
    const [unSelected, setUnselected] = useState("#FFFFFF")
    const [titleSelected, setTitleSelected] = useState("▶ Full Stack Software Engineer Intern")
    const [titleUnselected, setTitleUnselected] = useState("Web Developer")

    const jobChange = (job) => {
        if(job === "t") {      
                setCompanyName("TECHCOM");
                setTitle("Full Stack Software Engineer Intern")
                setDuration("May - August 2024")
                setItems(["Debugged MySQL queries and optimized PHP code to enhance server-side performance, contributing to sprint deliverables in an Agile environment.",
                "Developed and automated database tasks using Cron scripts, streamlining server-side operations, and reported progress in daily stand ups.",
                "Actively participated in Scrum meetings, including sprint planning, stand ups, and retrospectives, to ensure timely delivery of features and bug fixes.",
                "Collaborated with QA teams to create test cases, resolve bugs, and perform quality checks, utilizing Agile principles and the SDLC Waterfall model to ensure smooth project progression.",
                "Updated jQuery and JavaScript functions to improve client-side operations, with continuous feedback loops from sprint reviews to enhance user experience."
            ])
            setTags(["PHP", "JavaScript", "MySQL", "HTML/CSS", "Bash", "SCRUM"])
            setFadeIn(prev => prev + 1);
            setSelected("black")
            setUnselected("white")
            setTitleSelected("▶ Full Stack Software Engineer Intern")
            setTitleUnselected("Web Developer") 
        }
        else {

            setCompanyName("HQ Meats")
            setTitle("Web Developer")
            setDuration("June - September 2022");
            setItems(["Debugd MySQL queries and optimized PHP code to enhance server-side performance, contributing to sprint deliverables in an Agile environment.",
                    "Developed and automated database tasks using Cron scripts, streamlining server-side operations, and reported progress in daily stand ups.",
                    "Actively participated in Scrum meetings, including sprint planning, stand ups, and retrospectives, to ensure timely delivery of features and bug fixes.",
                    "Collaborated with QA teams to create test cases, resolve bugs, and perform quality checks, utilizing Agile principles and the SDLC Waterfall model to ensure smooth project progression.",
                    "Updated jQuery and JavaScript functions to improve client-side operations, with continuous feedback loops from sprint reviews to enhance user experience."
            ])
            setTags(["JavaScript", "HTML/CSS", "SEO Optimization", "WebFlow", "Figma"])
            setFadeIn(prev => prev + 1);
            setSelected("white")
            setUnselected("black")

            setTitleSelected("Full Stack Software Engineer Intern")
            setTitleUnselected("▶ Web Developer") 
        }
    }

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#about" className="nav-link">About Me</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <img src={purpleWave} alt="Purple Wave Background" className="purple-wave-bg" />
        <div className="hero-content">
          <h1 className="hero-title">
          <TypeAnimation
        sequence={[
          'NOLAN SMITH',
        ]}
        wrapper="span"
        speed={40}
        repeat={0}
      />
            </h1>
          <p className="hero-subtitle">
            
            I am a passionate software engineer from Toronto, Canada
          </p>
        </div>
        <div className="hero-curve"></div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="section-title">Work Experience</h2>
        <hr className="experience-line-head"></hr>
        <div className="experience-wrapper">
          <div className="experience-role">
            <p className="experience-title"><span onClick={() => jobChange("t")} style={{ cursor: "pointer", color: selected}}>{titleSelected}</span></p>
            <p className="experience-title"><span onClick={() => jobChange("w")} style={{ cursor: "pointer", color: unSelected}}>{titleUnselected}</span></p>
          </div>
        
          <div key={fadeIn} className="experience-details fade-in">
        <div className="experience-header">
          <h3 className="company-name">{company_name}</h3>
          <p className="duration">{duration}</p>
        </div>

        <h4 className="position">{title}</h4>
        <hr className="experience-line" />
        <div class="tags">
          {tags.map((tag, index) => (

            <span key={index} className={`tag ${tag.toLowerCase()}`}>{tag}</span>
          ))
          }
        </div>
        <ul className="experience-list">
          {items.map((item, index) => (
            <li key={index} className="experience-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
        </div>
      </section>

      {/* Projects Section Placeholder */}
      <div className="purpleWave-img"><img src={skinnyWave} alt="dddd" className="purpleWave-img-back"></img></div>
      <section  className="projects-section">
      
      <div id="projects" className="project-wrapper">
        <h2 className="section-title">Projects</h2>
        <hr></hr>
        <div class="project">
          <div class="project-image" style={{backgroundImage: `url(${image})`}}></div>
            <div class="project-content">
              <h2>WalkMe</h2>
                <div class="tags">
                <span class="tag pink">ExpressJS</span>
                <span class="tag green">NodeJS</span>
                <span class="tag cyan">Java</span>
                <span class="tag orange">Android Studio</span>
            </div>
            <p class="description">
            A mobile fitness application designed to promote healthy habits by encouraging walking through personalized route suggestions and activity tracking. Built with Java for Android, the app connects to a custom Express.js API with MongoDB for user data management. It integrates the FatSecret API for nutrition tracking, allowing users to scan barcodes and log food items, while also connecting to OpenRouteService for AI-generated walking routes based on user location and desired distance. The app tracks calorie intake, walking progress, and provides dynamic route recommendations using OpenStreetMap for map rendering. Developed as a team project over the past month, with version control and collaboration managed through GitHub.
            </p>
            <button class="btn">See More</button>
          </div>
        </div>
        <div class="project">
          <div class="project-image" style={{backgroundImage: `url(${movie})`}}></div>
            <div class="project-content">
              <h2>Movie Genie</h2>
                <div class="tags">
                <span class="tag pink">Python</span>
                <span class="tag green">Flask</span>
                <span class="tag orange">React</span>
                <span class="tag orange">NumPy</span>
                <span class="tag cyan">AI Algorithms</span>
                <span class="tag orange">HTML/CSS</span>
            </div>
            <p class="description">
            An AI-powered web application with a React frontend and Flask backend, developed to deliver intelligent recommendations through collaborative filtering algorithms. The machine learning models were implemented using NumPy, Pandas, and scikit-learn to provide personalized user experiences. RESTful API endpoints were built to handle data processing and serve model predictions, while the responsive and intuitive UI ensured seamless user interaction. The project followed Agile methodologies, with SCRUM, and GitHub used to support effective collaboration and iterative development.
            </p>
            <button class="btn">See More</button>
          </div>
        </div>
        <div class="project">
          <div class="project-image" style={{backgroundImage: `url(${oneScan})`}}></div>
            <div class="project-content">
              <h2>Seneca oneScan</h2>
                <div class="tags">
                <span class="tag pink">AdonisJS</span>
                <span class="tag cyan">MongoDB</span>
                <span class="tag green">OpenCV</span>
                <span class="tag cyan">AI</span>
                <span class="tag orange">HTML/CSS</span>
            </div>
            <p class="description">
            A web application that allows users to register by uploading photos of themselves, then uses AI-powered facial recognition to identify whether a similar-looking student exists in a database of uploaded images. Built with AdonisJS and MongoDB, the platform handles user authentication, image uploads, and real-time facial comparison. The AI system uses facial recognition algorithms to analyze and match submitted photos against stored student images. The project was developed collaboratively and managed using GitHub for version control and team coordination.
            </p>
            <button class="btn">See More</button>
          </div>
        </div>
        <div class="project">
          <div class="project-image" style={{backgroundImage: `url(${image})`}}></div>
            <div class="project-content">
              <h2>Ticket Vortex</h2>
                <div class="tags">
                <span class="tag pink">Python</span>
                <span class="tag green">Flask</span>
                <span class="tag cyan">MongoDB</span>
                <span class="tag orange">HTML/CSS</span>
            </div>
            <p class="description">
            An online marketplace for concert tickets built by a team with a focus on creating a seamless and secure user experience. The platform features RESTful APIs developed using Python and Flask, with a backend architecture designed to support key marketplace operations. The database was structured using MongoDB, with a custom schema designed to efficiently manage users, ticket listings, and transactions. The frontend was built with HTML, CSS, and Bootstrap to provide a responsive and intuitive interface. My contributions included designing and implementing the backend APIs, structuring the MongoDB database, and developing parts of the user interface. The project was managed collaboratively using GitHub, JIRA, and SCRUM for version control and workflow organization.
            </p>
            <button class="btn">See More</button>
          </div>
        </div>
      </div>
      </section>
      <section id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <hr></hr>
        <div className="about">
        <div className="about-image-container">
        <img src={profile} alt="Profile" className="profile-image" />
        </div>
        
        <p className="about-title">Committed and passionate software engineer</p>
        <p className="about-description">
        I'm a passionate and pragmatic software developer with a background in Computer Science and a strong focus on building real-world solutions. I've worked on a wide range of projects—from a Minecraft server control panel and fitness tracking apps to AI-powered tools and full-stack web platforms. I specialize in Python, Java, and JavaScript, and have hands-on experience with Flask, React, MongoDB, and Express.js. Whether it's creating smooth user experiences or tackling backend automation, I bring a blend of creativity and technical depth to everything I build. Right now, I’m all about developing efficient, user-friendly applications that make tech feel seamless and empowering.
        </p>
        </div>
      </section>  

    </div>
  );
};

export default Portfolio;
