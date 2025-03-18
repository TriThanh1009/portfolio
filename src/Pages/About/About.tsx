import React from "react";
import './About.css'

const About: React.FC = () =>{
    return(
        <div className="about-container">
            <div className="d-flex flex-row gap-5">
                <div className="about-image">
                    <img src="../../../src/assets/thanh.jpg"></img>
                </div>
                <div className="about-infor">
                    <p>Nguyễn Trí Thanh, born in 2002, graduated from the University of Saigon. </p>
                    <p>As a developer, I am eager to enhance my skills, acquire new knowledge, and apply them to real-world projects. </p>
                        
                
                </div>
            </div>
                        
        </div>
    )
}

export default About