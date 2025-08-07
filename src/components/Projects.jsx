import "./Projects.css";
import ProjectCard from "./ProjectCard";
import project1thumbnail from "../assets/images/project1.png";
import MovieWebsiteThumbnail from "../assets/images/MovieWebsiteThumbnail.png";
import AnimationThumbnail from "../assets/images/AnimationThumbnail.png";
import project1Video from "../assets/images/project1.mp4";
import movieWebsiteVideo from "../assets/images/movie_website.mp4";
import BMW from "../assets/images/Bmw.mp4";
import BmwThumbnail from "../assets/images/BmwThumbnail.png";
import Animation from "../assets/images/Animation.mp4"; // ✅ Add this import
import God from "../assets/images/God.mp4"; // ✅ Add this import
import Godthumbnail from "../assets/images/Godthumbnail.png";
import Eyeliner from "../assets/images/Eyeliner.mp4";
import Eyelinerthumbnail from "../assets/images/Eyelinerthumbnail.png";

import LandingPg from "../assets/images/LandingPg.mp4";
import LandingThumbnail from "../assets/images/LandingThumbnail.png";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Projects() {
    const projectsData = [
        {
            cardTitle: "Movie Website",
            thumbnail: MovieWebsiteThumbnail,
            cardDescription: "Landing page for a Movie website",
            title: "A Movie website",
            author: "",
            videoSrc: movieWebsiteVideo, // ✅ Use imported video here
            category: "UI/UX",
        },
        {
            cardTitle: "Animated Website",
            thumbnail: AnimationThumbnail,
            cardDescription: "Landing page for a Animated website",
            title: "A Animated website",
            author: "",
            videoSrc: Animation, // ✅ Use imported video here
            category: "UI/UX",
        },
        {
            cardTitle: "Landing Page",
            thumbnail: LandingThumbnail,
            cardDescription: "Landing page for a website",
            title: "Landing Page",
            author: "",
            videoSrc: LandingPg,
            category: "UI/UX",
        },
        {
            cardTitle: "Car Animation Reel",
            thumbnail: BmwThumbnail,
            cardDescription: "A showcase of Car animation in 3D",
            title: "BMW Promotion",
            author: "",
            videoSrc: BMW,
            category: "3D",
        },
        {
            cardTitle: "Animated God Statue",
            thumbnail: Godthumbnail,
            cardDescription: "A showcase of Animated God Statue in 3D",
            title: "Animated God Statue",
            author: "",
            videoSrc: God,
            category: "3D",
        },
        {
            cardTitle: "Eyeliner Promotion Reel",
            thumbnail: Eyelinerthumbnail,
            cardDescription: "A showcase of a makup product",
            title: "Eyeliner Promotion Reel",
            author: "",
            videoSrc: Eyeliner,
            category: "3D",
        },
        
    ];

    const categories = [ "UI/UX", "3D"];

    return (
        <>
            <Navbar />
            <div style={{ textAlign: "center", paddingTop: "0px", paddingBottom: "50px" }}>
                <div className="heading">
                    <p>Selected Projects</p>
                </div>
                <div>
                    <p>
                        This showcase features a tiny fraction of the projects we have worked on.
                    </p>
                    <p>
                        We include case studies that cover various areas of our expertise in web design, front-end development,
                        UI/UX and 3D Animations. All the projects showcased below are the amazing result of
                        hard work and dedication of the teams. There are a lot of brilliant minds involved.
                    </p>
                </div>
            </div>

            <section id="projects" className="projects-section">
                {categories.map((category) => (
                    <div key={category} className="category-section">
                        <h3 className="category-title">{category}</h3>
                        <div className="projects-container">
                            {projectsData
                                .filter((project) => project.category === category)
                                .map((project, index) => (
                                    <ProjectCard
                                        key={`${category}-${index}`}
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
                    </div>
                ))}
            </section>

            <Footer />
        </>
    );
}

export default Projects;
