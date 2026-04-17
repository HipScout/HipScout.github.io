import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaAws, FaNpm, FaLaptopCode } from 'react-icons/fa';
import { SiSpring, SiOracle } from 'react-icons/si';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'Java', icon: <FaJava color="#007396" /> },
  { name: 'Spring', icon: <SiSpring color="#6DB33F" /> },
  { name: 'Oracle', icon: <SiOracle color="#F80000" /> },
  { name: 'NPM', icon: <FaNpm color="#CB3837" /> },
  { name: 'AWS', icon: <FaAws color="#FF9900" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="skills-container">
                <div className="skills-left" aria-hidden="true">
                    <div className="skills-illustration">
                        <FaLaptopCode className="laptop-icon" />
                    </div>
                </div>
                <div className="skills-right">
                    <h1 className="skills-heading">What I do</h1>
                    <p className="skills-subheading">
                        CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                    </p>
                    <div className="skills-icons">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-icon">{skill.icon}</div>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    <ul className="skills-list">
                        <li><span className="bolt">⚡</span> Building highly responsive website front end using React.js</li>
                        <li><span className="bolt">⚡</span> Developing interactive back end Node.js and Spring Boot applications</li>
                        <li><span className="bolt">⚡</span> Architecting scalable and robust Oracle Billing infrastructures (ORMB)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
