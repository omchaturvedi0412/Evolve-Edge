import React, { useState } from "react";

const ProjectCard = ({ 
    title, 
    author, 
    thumbnail,
    videoSrc, 
    cardTitle, 
    cardDescription 
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = (e) => {
        e.stopPropagation();
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="project-card" onClick={handleCardClick}>
                <img src={thumbnail} alt="Thumbnail" className="thumbnail" />
                <h3>{cardTitle}</h3>
                <p>{cardDescription}</p>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="video-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleCloseModal}>
                            &times;
                        </button>
                        <div className="video-overlay-content">
                            <h2>{title}</h2>
                            <div className="modal-footer">
                                <p>{author}</p>
                            </div>
                        </div>
                        <video 
                            autoPlay
                            loop 
                            muted
                            playsInline
                            controls
                            className="custom-video-player"
                        >
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;