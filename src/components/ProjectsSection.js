import React from 'react';
import '../styles/ProjectsSection.css';

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: "[AI]wise Partners: Revolutionizing Business Intelligence",
            description:
                "Dive into the future of business intelligence with [AI]wise Partners. This cutting-edge solution harnesses the power of artificial intelligence to provide unparalleled insights, helping businesses make data-driven decisions with confidence.",
        },
        {
            id: 2,
            title: "AwareWilderness: CRAFTING MEMORIES",
            description:
                "Empowering travelers to embark on transformative journeys that not only satisfy their wanderlust but also contribute to the conservation and preservation of our planet's precious wilderness.",
        },
        {
            id: 3,
            title: "CARE Platform",
            description:
                "CARE utilizes a comprehensive framework to evaluate and recommend child-friendly apps, videos, and games, ensuring your child’s digital interactions are both enriching and safe.",
        },
    ];

    return (
        <section className="projects-section">
            <h2 className="projects-title">Explore</h2>
            <h3 className="projects-subtitle">OUR FLAGSHIP PROJECTS</h3>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-card-number">{project.id}</div>
                        <h4 className="project-card-title">{project.title}</h4>
                        <p className="project-card-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
