import React, { useRef, useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Layout.css';
import About from "../../Pages/About/About";
import Technical from "../../Pages/Technical/Technical";
import Project from "../../Pages/Project/Project";
import Resume from "../../Pages/Resume/Resume";

const Layout: React.FC = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const resumeRef = useRef<HTMLDivElement>(null);
    const technicalRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>("");

    // State to track visibility of each section for fade-in/fade-out
    const [visibleSections, setVisibleSections] = useState({
        about: false,
        resume:false,
        technical: false,
        project: false,
    });

    // Track the last scroll position to determine scroll direction
    const [lastScrollY, setLastScrollY] = useState(0);

    // Scroll to section function
    const scrollToSection = (section: string) => {
        setActiveSection(section);
        switch (section) {
            case "About Me":
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "Resume":
                resumeRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "Technical Skill":
                technicalRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "Project":
                projectRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "Github":
                window.open("https://github.com/TriThanh1009", "_blank");
                break;
            default:
                break;
        }
    };

    
    useEffect(() => {
        const observerOptions = {
            root: null, 
            rootMargin: "0px",
            threshold: 0.5, 
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const sectionName = entry.target.getAttribute("data-section");
                if (!sectionName) return;

                // Determine scroll direction
                const currentScrollY = window.scrollY;
                const isScrollingUp = currentScrollY < lastScrollY;

                // Update visibility for fade-in/fade-out
                if (entry.isIntersecting) {
                    setVisibleSections((prev) => ({
                        ...prev,
                        [sectionName]: true,
                    }));

                    // Update active section for button highlighting
                    const sectionToButtonMap: { [key: string]: string } = {
                        about: "About Me",
                        resume:"Resume",
                        technical: "Technical Skill",
                        project: "Project",
                    };
                    const buttonName = sectionToButtonMap[sectionName];
                    if (buttonName) {
                        setActiveSection(buttonName);
                    }
                } else if (isScrollingUp) {
                    setVisibleSections((prev) => ({
                        ...prev,
                        [sectionName]: false,
                    }));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe each section
        if (aboutRef.current) {
            aboutRef.current.setAttribute("data-section", "about");
            observer.observe(aboutRef.current);
        }
        if (resumeRef.current) {
            resumeRef.current.setAttribute("data-section", "resume");
            observer.observe(resumeRef.current);
        }
        if (technicalRef.current) {
            technicalRef.current.setAttribute("data-section", "technical");
            observer.observe(technicalRef.current);
        }
        if (projectRef.current) {
            projectRef.current.setAttribute("data-section", "project");
            observer.observe(projectRef.current);
        }
        

        // Update last scroll position on scroll
        const handleScroll = () => {
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup observer and event listener on component unmount
        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
            if (resumeRef.current) observer.unobserve(resumeRef.current);
            if (technicalRef.current) observer.unobserve(technicalRef.current);
            if (projectRef.current) observer.unobserve(projectRef.current);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className="store-layout d-flex flex-column">
            <div className="store-header">
                <Header scrollToSection={scrollToSection} activeSection={activeSection} />
            </div>
            <div className="content flex-grow-1 d-flex flex-column">
                <div className="layout-img">
                    <img
                        src="../../../public/Image/thanhdui.jpg" 
                        alt="Background"
                        className="layout-img-background"
                    />
                    <div className="layout-img-text">
                        <h1>Hello, I'm <span>Nguyen Tri Thanh</span></h1>
                        <p>I'm .NET Developer</p>
                    </div>
                </div>
                <div
                    ref={aboutRef}
                    className={`section ${visibleSections.about ? "visible" : ""}`}
                >
                    <About />
                </div>
                <div
                    ref={resumeRef}
                        className={`section ${visibleSections.resume ? "visible" : ""}`}
                    >
                        <Resume />
                </div>
                <div
                    ref={technicalRef}
                    className={`section ${visibleSections.technical ? "visible" : ""}`}
                >
                    <Technical />
                </div>
                <div
                    ref={projectRef}
                    className={`section ${visibleSections.project ? "visible" : ""}`}
                >
                    <Project />
                </div>
            </div>
            <div className="store-footer">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;