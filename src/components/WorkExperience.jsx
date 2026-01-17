
import React from 'react';

const workData = [
    {
        id: 1,
        role: 'Senior Software Engineer',
        company: 'Tech Solutions Inc.',
        duration: '2023 - Present',
        description: 'Leading a team of developers to build scalable web applications using React and Node.js. Improved system performance by 40%.',
        tags: ['React', 'Node.js', 'AWS']
    },
    {
        id: 2,
        role: 'Full Stack Developer',
        company: 'Creative Agency',
        duration: '2021 - 2023',
        description: 'Developed and maintained multiple client websites. Collaborated with designers to implement pixel-perfect user interfaces.',
        tags: ['Vue.js', 'Firebase', 'Sass']
    },
    {
        id: 3,
        role: 'Frontend Developer Intern',
        company: 'StartUp Hub',
        duration: '2020 - 2021',
        description: 'Assisted in the development of the company dashboard. Wrote unit tests and fixed bugs to ensure application stability.',
        tags: ['JavaScript', 'HTML/CSS', 'Jest']
    }
];

const WorkExperience = () => {
    return (
        <section id="work-experience" className="section work-section">
            <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
            <div className="projects-grid"> {/* Reusing grid layout */}
                {workData.map((job) => (
                    <div key={job.id} className="project-card work-card"> {/* Reusing card style + specific class */}
                        <div className="work-header">
                            <h3 className="project-title">{job.role}</h3>
                            <span className="work-duration">{job.duration}</span>
                        </div>
                        <h4 className="work-company">{job.company}</h4>
                        <p className="project-desc">{job.description}</p>
                        <div className="project-tags">
                            {job.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
