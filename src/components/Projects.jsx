import "./Projects.css";
import ProjectCard from "./ProjectCard";
import project1thumbnail from "../assets/images/project1.png";
import project1Video from "../assets/images/project1.mp4";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Projects() {
    const projectsData = [
        {
            cardTitle: "Shoes Website",
            thumbnail: project1thumbnail,
            cardDescription: "Landing page for a shoes website",
            title: "A shoes website",
            author: "",
            videoSrc: project1Video,
        },
        {
            cardTitle: "Shoes Website",
            thumbnail: project1thumbnail,
            cardDescription: "Landing page for a shoes website",
            title: "A shoes website",
            author: "",
            videoSrc: project1Video,
        },
    ];

    return (
        <>
            <Navbar />
            <div style={{ textAlign: "center", paddingTop: "0px", paddingBottom: "50px" }}>
                <div>
                    <div className="heading">
                        <p>Selected Projects</p>
                    </div>
                </div>
                <div>
                    <p>
                        This showcase features a tiny fraction of the projects we have worked on.
                    </p>
                    <p>
                        We include case studies that cover various areas of our expertise in web design, front-end development,
                        UI/UX and 3D Animations. All the projects showcased below is the amazing result of
                        hard work and dedication of the teams. There are a lot of brilliant minds involved.
                    </p>
                </div>
            </div>
            <section id="projects" className="projects-section">
                <h2>Our Projects</h2>
                <div className="projects-container">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            cardTitle={project.cardTitle}
                            cardDescription={project.cardDescription}
                            thumbnail={project.thumbnail}
                            title={project.title}
                            description={project.description}
                            videoSrc={project.videoSrc}
                            author={project.author}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Projects;