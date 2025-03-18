import React, { useState } from "react";
import './Technical.css';

const Technical: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const [technical] = useState([
        {
            title: "Backend",
            images : ['/Image/backendlogo/csharplogo.jpg',
                    '/Image/backendlogo/nodejslogo.jpg',
                    '/Image/backendlogo/sqlserverlogo.jpg'],
            skills: [
                {
                    Framework: ['ASP.NET', 'ASP.NET Core API', 'ASP.NET MVC', '.NET Framework'],
                    ORM: ['Entity Framework', 'Linq'],
                    Database: ['Stored Procedures', 'Functions', 'Transaction', 'Trigger', 'Query Statement'],
                },
            ],
        },
        {
            title: "Frontend",
            images : ['/Image/frontendlogo/htmllogo.jpg',
                    '/Image/frontendlogo/csslogo.jpg',
                    '/Image/frontendlogo/tslogo.jpg',
                    '/Image/frontendlogo/jslogo.jpg'],
            skills: [
                {
                    Framework: ['React', 'React.js', 'Angular'],
                    Libraries: ['Tailwind CSS', 'Bootstrap 5'],
                    UIUX: ['Material UI'],
                    StateManagement: ['Redux Toolkit', 'Hook', 'NgRx', 'BehaviorSubject', 'RxJS'],
                },
            ],
        },
        {
            title: "Other",
            images : ['/Image/otherlogo/vscodelogo.jpg',
                '/Image/otherlogo/vslogo.jpg',
                '/Image/otherlogo/gitlogo.jpg',
                '/Image/otherlogo/dockerlogo.jpg'],
            skills: [
                {
                    Tools: ['Git', 'Docker', 'VS Code', 'Visual Studio'],
                    SoftSkills: ['Problem-Solving Skills', 'Teamwork & Collaboration', 'Adaptability & Learning', 'Time Management'],
                },
            ],
        },
    ]);

    return (
        <div className="technical-container py-5">
            <div className="container">
                <h2 className="text-center text-light mb-5">Technical Skills</h2>
                <div className="d-flex flex-column gap-2">
                    {technical.map((tech) => (
                        <div key={tech.title}>
                            <button
                                className={`btn w-100 text-start fs-4 ${activeCategory === tech.title ? "btn btn-secondary" : "btn-dark"}`}
                                onClick={() => setActiveCategory(activeCategory === tech.title ? null : tech.title)} > {tech.title}
                            </button>
                            {activeCategory === tech.title && (
                                <div className="mt-2 p-3 bg-secondary rounded text-white">
                                     {tech.images && (
                                        <div className="skill-logo d-flex justify-content-center gap-3 mb-3">
                                            {tech.images.map((imgSrc, index) => (
                                                <img 
                                                    key={index}
                                                    src={imgSrc}
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {tech.skills.map((skillCategory, index) => (
                                        <div key={index}>
                                            {Object.entries(skillCategory).map(([subCategory, skills]) => (
                                                <div key={subCategory} className="mb-2">
                                                    <h5 className="fw-bold">{subCategory}:</h5>
                                                    <div className="p-3 bg-dark rounded">
                                                        <div className="d-flex flex-wrap gap-3">
                                                            {(skills as string[]).map((skill, skillIndex) => (
                                                                <span key={skillIndex} className="badge bg-light text-dark fs-5 px-3 py-2">
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technical;
