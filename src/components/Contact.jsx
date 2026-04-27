import React from 'react';
import contactImage from '../assets/contact-me.jpg';
import { FaGithub, FaLinkedin, FaFacebook, FaGoogle } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="contact-container">
                <div className="contact-left">
                    <h1 className="contact-heading">Reach Out to me!</h1>
                    <p className="contact-subheading">
                        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
                    </p>
                    <p className="contact-bio">
                        Full Stack Software Developer | Traveller
                    </p>
                    <div className="contact-socials">
                        <a href="https://github.com/HipScout" className="social-icon" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/debjyoti-das-66b370205/" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://www.facebook.com/debjyotid.kvsalua/" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
                        <a href="mailto:debjyotid.2706@gmail.com" className="social-icon" aria-label="Email"><FaGoogle /></a>
                    </div>
                    <div className="contact-action">
                        <a href="mailto:debjyotid.2706@gmail.com" className="btn btn-primary">Contact Me</a>
                    </div>
                </div>
                <div className="contact-right">
                    <img src={contactImage} alt="Debjyoti Das" className="contact-image" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
