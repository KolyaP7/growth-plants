import ArcticleCard from './ArticleCard';
import './ArticleCard.css';
import { NavLink } from 'react-router';

interface ArticleCardProps {
    author: string,
    imageLink: string,
    avatarLink: string,
    date: string,
    title: string,
    description: string,
    buttonLink: string
}

export default function ArticleCard({ author, imageLink, avatarLink, date, title, description, buttonLink }: ArticleCardProps) {
    return (
        <div className="article-card">
            <div className="article-card__image-container">
                <img className="article-card__image" src={imageLink} alt={title} />
            </div>
            <div className="article-card__header">
                <div className="article-card__avatar-container">
                    <img className="article-card__avatar-image" src={avatarLink} alt="A">
                    </img>
                </div>
                <h6 className="article-card__author">{author}</h6>
                <p className="article-card__date">{date}</p>
            </div>
            <div className="article-card__title-container">
                <h3 className="article-card__title">{title}</h3>
            </div>
            <div className="article-card__description-container">
                <p className="article-card__description">{description}</p>
            </div>
            <div className="article-card__button-link">
                <NavLink 
                to={buttonLink}
                className="article-card__link">
                    Read more {'>'}
                </NavLink>
            </div>
        </div>
    );
}