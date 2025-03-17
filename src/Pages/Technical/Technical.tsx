import React, { useState } from "react";
import './Technical.css'

const Technical: React.FC = () =>{
    const [technical] = useState([{
            title : "Backend",
            skill : [{
                Framework: ['ASP.NET', 'ASP.NET Core API', 'ASP.NET MVC', '.NET Framework'],
                ORM: ['Entity Framework', 'ADO.NET', 'Linq'],
                Database: ['Stored Procedures', 'Functions', 'Transaction', 'Trigger', 'Query Statement'],
            },]
        },
        {
            title : "Frontend",
            skill:[{
                Framework: ['React', 'React.js', 'Angular'],
                Libraries: ['Tailwind CSS', 'Bootstrap 5'],
                UIUX: ['Material UI', 'Ant Design', 'Syncfusion'],
                StateManagement: ['Redux Toolkit', 'Hook', 'NgRx', 'BehaviorSubject', 'RxJS'],
            },]
        },
        {
            title : "Other",
            skill: [{
                DeveloperTools: ['Git', 'Docker', 'Digital Ocean', 'VS Code', 'Visual Studio'],
                SoftSkills: ['Problem-Solving Skills', 'Teamwork & Collaboration', 'Adaptability & Learning', 'Time Management'],
            },]
        }
    ])
    return(
        <div>
            <div className="technical-container d-flex flex-row justify-content-center align-items-center gap-5">
                {technical.map((tech)=>(
                <div className="technical">
                    <div className="technical-title">
                        <span>{tech.title}</span>
                    </div>
                    <div>
                        {tech.skill.map((item,index)=>(
                            //<span key={index}>{item}</span>
                            <div></div>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Technical