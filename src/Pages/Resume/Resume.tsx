import React from "react";
import './Resume.css'
const Resume: React.FC = () => {

    return (
        <div className="project-container py-5">
            <div className="container">
                <h2 className="text-center text-light mb-5">Resume</h2>
            </div>
            <div className="resume-detail d-flex flex-column gap-5 justify-content-center text-light">
                <div className="resume-detail-education">
                    <h2>Education</h2>
                    <div className="resume-detail-education-content">
                        <div className="education-header">
                            <h3>
                                <span className="icon">Sai Gon University</span>
                            </h3>
                            <p className="education-date">October 2020 - March 2025</p>
                        </div>
                        <h4>Software Engineer, Minor in Information Technology</h4>
                        <p>During my studies, I developed:</p>
                        <ul>
                            <li>The ability to work effectively both independently and in a team.</li>
                            <li>Strong time management skills, ensuring tasks are completed on schedule as assigned by lecturers.</li>
                            <li>Critical thinking and problem-solving abilities.</li>
                            <li>Adaptability – quickly learning and applying new technologies.</li>
                            <li>Attention to detail – ensuring high-quality work.</li>
                            <li>Communication skills – effectively conveying ideas in technical discussions.</li>
                        </ul>
                        <p className="education-location">
                            <span className="icon">District 5, Ho Chi Minh City, Vietnam</span>
                        </p>
                    </div>
                </div>
                <div className="resume-detail-experience">
                    <h2>Experience</h2>
                    <div className="resume-detail-experience-content">
                        <div className="education-header">
                                <h3>
                                    <span>DAI DUONG CORP</span>
                                </h3>
                                <p className="education-date">July 2024 - September 2024</p>
                            </div>
                            <h4>Software Engineer, Minor in Information Technology</h4>
                            <p>During my work :</p>
                            <ul>
                                <li>Built a web application leveraging .NET Core for the REST API.</li>
                                <li>Learn new technology and improve current technology in line with company system.</li>
                            </ul>
                            <p className="education-location">
                            <span className="icon">Thu Duc, Ho Chi Minh City, Vietnam</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
