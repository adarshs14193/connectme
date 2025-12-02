import React from "react";
import "./project.css";
import projectData from "../data/ongoingProjects";
import clients from "../data/clientsData";
import projects from "../data/projectsData";

export default function OngoingProjects() {
    

    return (
        <div className="projects-section">
            <h2 className="projects-title">Ongoing Projects</h2>

            <div className="projects-grid">
                {projectData.map((proj) => (
                    <div className="project-card" key={proj.id}>
                        <img src={proj.image} className="project-img" alt="" />

                        <div className="project-info">
                            <span className="project-line">
                                <h3 className="project-name">{proj.title}</h3>
                                <p className="project-location">{proj.location}</p>
                            </span>
                            <p className="project-desc">{proj.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="clients-section">
                <h2 className="clients-title">Our Clients</h2>
                <p className="clients-subtitle">
                    We deliver 100% satisfactory results. Our proud clientele is a prime example
                </p>

                <div className="clients-grid">
                    {clients.map((logo, index) => (
                        <div key={index} className="client-item">
                            <img src={logo} className="client-logo" alt="client-logo" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="projects-section">
                <h2 className="projects-title">Our Projects</h2>

                <div className="projects-grid">
                    {projects.map((proj) => (
                        <div className="project-card" key={proj.id}>
                            <img src={proj.image} className="project-img" />

                            <div className="project-info">
                                <span className="project-line1">
                                <h3 className="project-title1">{proj.title}</h3>
                                <p className="project-location1">{proj.location}</p></span>
                                <p className="project-desc1">{proj.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
