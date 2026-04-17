
import React from 'react';

const projectsData = [
    {
        id: 1,
        title: 'Fb-Editor',
        description: 'A Chrome extension that adds a rich-text toolbar to Facebook\'s post composer — letting users style their timeline posts with bold, italic, cursive, underline, custom fonts, and more.',
        tags: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension', 'Node.js'],
        link: 'https://github.com/HipScout/Fb-Editor'
    },
    {
        id: 2,
        title: 'Oracle Revenue Management & Billing',
        description: 'Led end-to-end development on ORMB for 4+ years — building and optimizing billing configurations, rate schedules, payment processing workflows, and customer account management modules for large-scale utility and telecom clients.',
        tags: ['Oracle CC&B', 'ORMB', 'PL/SQL', 'Java', 'OUAF', 'Billing & Payments'],
        link: 'https://docs.oracle.com/en/industries/energy-water/revenue-management-billing/'
    },
    {
        id: 3,
        title: 'VDaaS — Virtual Desktop as a Service',
        description: 'Architected and developed a virtual machine provisioning platform using Java and Spring Boot, integrated with VMware vROPs and VCP to deliver optimized Virtual Desktop as a Service (VDaaS) — streamlining resource allocation and enhancing user interaction performance.',
        tags: ['Java', 'Spring Boot', 'VMware vROPs', 'VCP', 'VDaaS', 'REST APIs'],
        link: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <h2 className="section-title">Selected <span className="gradient-text">Work</span></h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
