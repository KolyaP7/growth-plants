import { Link } from 'react-router';
import './PlantsForPeopleCard.css'
import { useState } from 'react';

type PlantsForPeopleCardProps = {
    title: string,
    description: string,
    family: string,
    imgLink: string,
    cardLink: string,
    selectedTab: string
}

export default function PlantsForPeopleCard({title, description, family, imgLink, cardLink, selectedTab}: PlantsForPeopleCardProps){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="plants-for-people__card-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <div className="plants-for-people__card-header">
                <h3 className="plants-for-people__card-title">{title}</h3>
                <div className={`plants-for-people__card-button ${isHovered ? 'plants-for-people__card-button--active' : ''}`}>
                    <Link className="plants-for-people__card-link"
                        to={cardLink} state={{ selectedTab }} aria-label={`Read about ${title}`}>
                        →
                    </Link>
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
                            ${isHovered ? 'plants-for-people__card-family-image--active' : ''}`} src="/plant1.png" alt=""></img>
                    </div>
                    <p className="plants-for-people__card-family-text">{family}</p>
                </div>
            </div>
    
            <img className={`plants-for-people__card-background-image ${isHovered ? 'plants-for-people__card-background-image--active' : ''}`} src={imgLink} alt=""></img>
        </div>
    );
}