import React, { useState } from "react";
import './Card.css'
const Card: React.FC = () => {
    const [projects] = useState([{
            name : "Japanese Domestics Store",
             //img : ssjdimg,
            url:"https://ssjdui.vercel.app/",
            github:"https://github.com/TriThanh1009/SSJDUI",
            descripstion:["- Develop a website that allows buyers to place orders easily.",
                "- Built a full-stack web application leveraging .NET Core for the REST API and React for the frontend, ensuringseamless communication between client and server.",
                "- Login with email by firebase.",
                "- Integrate VietQR to enable seamless customer payments.",
                "- Build an admin page for store owners to track orders and manage product inventory.",
                "- Deployed by Google Cloud for backend."
            ],
           // technologies : ["Backend: C#, ASP .NET API, EF Core, Restful API","Frontend: React","Database: Sql Cloud","Deployed Tool: Google Cloud"]
        },
        {
            name : "HRM",
            img : "",
            url:"",
            github:"https://github.com/thienlhtst/HRM",
            descripstion:["- Project focused on managing the work hours of all employees in the company and all aspects related to their working days.",
                "- Developed a full-stack web application using .NET serving a REST API with Angular as the frontend.",
                "- Implemented a group chat system, QR code attendance tracking, authentication & authorization, and salary/work hours analysis."],
            //technologies : ["Backend: C#, ASP .NET API, EF Core, Restful API","Frontend: React","Database: Sql Cloud","Deployed Tool: Google Cloud"]
        }
    ])

    return (
        <div className="card-container d-flex flex-row gap-5 justify-content-center align-items-center">
            {projects.map((project)=>(
                <div className="card d-flex gap-3">
                    <div className="card-name-img d-flex flex-column  align-items-center gap-2">
                        <div className="card-name">
                            {project.name}
                        </div>
                        {project.name==="Japanese Domestics Store" &&
                        <div className="card-website">
                            <div >
                                <span onClick={() => window.location.href=project.url}>Website: {project.url}</span>
                            </div> 
                            <div>
                                <span onClick={() => window.location.href=project.github}>Github: {project.github}</span>
                            </div>               
                        </div>
                        }
                        {project.name==="HRM" &&
                        <div>
                            <div className="card-website">
                                <span onClick={() => window.location.href=project.github}>Github: {project.github}</span>
                            </div>               
                        </div>
                        }
                    </div>
                    <div className="card-descriptions">
                        <div className="card-descriptions-title">
                            Description
                        </div>
                        {project.descripstion.map((des)=>(
                            <div className="card-descriptions-content">
                                    {des}
                            </div>
                        ))}
                        
                    </div>
                    
                    
                </div>
            ))}
        </div>
    );
};

export default Card;
