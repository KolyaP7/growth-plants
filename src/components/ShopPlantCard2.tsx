import './ShopPlantCard2.css'
import { NavLink } from 'react-router';
import { useState } from 'react';

interface ShopPlantCardProps {
    imageLink: string,
    title: string,
    plantLink: string;
}
export default function ShopPlantCard({imageLink, title, plantLink}: ShopPlantCardProps){
    const [ isHovered, setIsHovered ] = useState(false);
    return (
        <div className={`shop-plants-card-arrivals ${isHovered ? "shop-plants-card-arrivals--hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <div className={`shop-plants-card__overlay ${isHovered ? "shop-plants-card__overlay--hovered" : ""}`}></div>

            <div className="shop-plants-card__image-container">
                <img className="shop-plants-card__image"
                    src={imageLink}></img>
            </div>
            <div className={`shop-plants-card__text-container ${isHovered ? "shop-plants-card__text-container--hovered" : ""}`}>
                <h2 className="shop-plants-card__title">{title}</h2>
                <NavLink to={plantLink} className="shop-plants-card__link">more information →</NavLink>
            </div>
        </div>
    );
}