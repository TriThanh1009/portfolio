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
                    <div>
                        <h3 className="text-color">Information</h3>
                        <p className="text-color">Nguyễn Trí Thanh, born in 2002, graduated from the University of Saigon. </p>                             
                    </div>
                    
                    <div className="about-term text-color">
                        <h3 className="text-color">Term</h3>
                        <p>As a developer, I am eager to enhance my skills, acquire new knowledge, and apply them to real-world projects. </p>
                    </div>
                    
                </div>
                
            </div>
                        
        </div>
    )
}

export default About