import './IndoorCollectionCard.css';
import { useState } from 'react';

type IndoorCollectionCardProps = {
    title: string,
    description: string,
    buttonLink: string,
    imageLink: string,
    className: string
}
export default function IndoorCollectionCard({title, description, buttonLink, imageLink}: IndoorCollectionCardProps){
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className={`indoor-collection__card-container`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <div className="indoor-collection__card-link-container">
                <a className="indoor-collection__card-link"
                href={buttonLink}>
                    →
                </a>
            </div>
            <div className={`indoor-collection__card-title-container
                ${isHovered ? '' : 'indoor-collection__card-title-container--active'}`}>
                <h3 className="indoor-collection__card-title">
                    {title}
                </h3>
            </div>
            <div className={`indoor-collection__card-main
                ${isHovered ? 'indoor-collection__card-main--active' : ''}`}>
                <h3 className="indoor-collection__card-title indoor-collection__card-title--active">
                    {title}
                </h3>
                <p className="indoor-collection__card-description">
                    {description}
                </p>
            </div>
            <div className="indoor-collection__card-image-container">
                <img className="indoor-collection__card-image"
                src={imageLink}></img>
            </div>
        </div>
    );
}