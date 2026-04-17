
import React from 'react';
import heroIllustration from '../assets/hero-illustration.png';
import { FaGithub, FaLinkedin, FaGoogle, FaGitlab, FaFacebook, FaMedium } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="greeting">
                        Hi all, I'm Debjyoti <span className="wave-emoji">👋</span>
                    </h1>
                    <p className="hero-desc">
                        A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with
                        JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
                    </p>

                    <div className="hero-socials">
                        <a href="https://github.com/HipScout" className="social-icon" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/debjyoti-das-66b370205/" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" className="social-icon" aria-label="Google"><FaGoogle /></a>
                        <a href="#" className="social-icon" aria-label="GitLab"><FaGitlab /></a>
                        <a href="https://www.facebook.com/debjyotid.kvsalua/" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
                    </div>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">Contact Me</a>
                        <a href="https://docs.google.com/document/d/167KT4GRwj4dx_c_bjmVhhDGY0Nw9PNFSQfZA6UQwPqg/edit?pli=1&tab=t.0" className="btn btn-secondary">See My Resume</a>
                    </div>
                </div>

                <div className="hero-image-container">
                    <img src={heroIllustration} alt="Developer Illustration" className="hero-illustration" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
