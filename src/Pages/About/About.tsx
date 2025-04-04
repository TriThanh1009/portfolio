import React from "react";
import './About.css'

const About: React.FC = () =>{
    return(
        <div className="about-container">
            <div className="d-flex flex-row gap-5">
                <div className="about-image">
                    <img src="/Image/thanh.jpg"></img>
                </div>
                <div className="d-flex flex-column">      
                    <div className="about-term text-color">
                        <h3 className="text-color title">About Me</h3>
                        <p>I'm Thanh, a Web Developer from Saigon University.</p>
                        <p>I have a strong foundation in C#, .NET Core, Angular, and React, with React being my strongest skill, 
                            along with hands-on experience in web application development during my internship. 
                            I am passionate about building optimized software solutions, solving problems efficiently, and continuously learning new technologies.</p>

                        <p>Currently, I am looking for opportunities to work in a professional environment where I can enhance my skills and contribute to real-world projects. </p>
                        
                        <a href="/CV-.Net-Developer.pdf" download="/CV-.Net-Developer.pdf" className="download-btn">
                            <i className="fas fa-download me-2"></i>
                            Download CV
                        </a>
                    </div>
                </div>
                
            </div>
                        
        </div>
    )
}

export default About