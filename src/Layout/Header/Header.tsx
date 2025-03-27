import React from "react";
import './Header.css';

interface HeaderProps {
    scrollToSection: (section: string) => void;
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, activeSection }) => {
    const sections = ["About Me","Resume", "Technical Skill", "Project", "Github"];

    return (
        <div className="header">
            {sections.map((section) => (
                <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`nav-button ${activeSection === section ? "active" : ""}`}
                >
                    {section}
                </button>
            ))}
        </div>
    );
};

export default Header;