import React from "react";
import './Project.css'
import Card from "../Card/Card";
const Project: React.FC = () => {

    

    return (
        <div className="project-container py-5">
            <div className="container">
                <h2 className="text-center text-light mb-5">Personal Project</h2>
                <Card></Card>
            </div>
        </div>
    );
};

export default Project;
