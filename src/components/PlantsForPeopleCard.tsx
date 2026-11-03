import './PlantsForPeopleCard.css'
import { useState } from 'react';

type PlantsForPeopleCardProps = {
    title: string,
    description: string,
    family: string,
    imgLink: string,
    cardLink: string
}

export default function PlantsForPeopleCard({title, description, family, imgLink, cardLink}: PlantsForPeopleCardProps){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`plants-for-people__card-container ${isHovered ? 'plants-for-people__card-container--active' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <div className="plants-for-people__card-header">
                <h3 className="plants-for-people__card-title">{title}</h3>
                <div className={`plants-for-people__card-button ${isHovered ? 'plants-for-people__card-button--active' : ''}`}>
                    <a className="plants-for-people__card-link"
                        href={cardLink}>
                        →
                    </a>
                </div>
            </div>
            <div className="plants-for-people__card-description-container">
                <p className="plants-for-people__card-description">
                    {description}
                </p>
            </div>
            
            <div className="plants-for-people__card-footer">
                <div className="plants-for-people__card-decoration-line"></div>
                <div className="plants-for-people__card-family-container">
                    <div className="plants-for-people__card-family-image-container">
                        <img className={`plants-for-people__card-family-image
                            ${isHovered ? 'plants-for-people__card-family-image--active' : ''}`} src="../../public/plant1.png"></img>
                    </div>
                    <p className="plants-for-people__card-family-text">{family}</p>
                </div>
            </div>
    
            <img className={`plants-for-people__card-background-image ${isHovered ? 'plants-for-people__card-background-image--active' : ''}`} src={imgLink}></img>
        </div>
    );
}