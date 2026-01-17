
import React from 'react';

const projectsData = [
    {
        id: 1,
        title: 'Project Alpha',
        description: 'A futuristic dashboard for monitoring space debris.',
        tags: ['React', 'D3.js', 'Node.js'],
        link: '#'
    },
    {
        id: 2,
        title: 'Nebula UI',
        description: 'A React component library inspired by deep space aesthetics.',
        tags: ['React', 'CSS Modules', 'Storybook'],
        link: '#'
    },
    {
        id: 3,
        title: 'Orbit',
        description: 'Real-time collaborative task management tool.',
        tags: ['Next.js', 'Socket.io', 'Tailwind'],
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
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                        <a href={project.link} className="project-link">View Project →</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
