import './AdditionArticleCard.css';
import { NavLink } from 'react-router';

interface AdditionArticleCardProps {
    date: string,
    title: string,
    imageLink: string,
    buttonLink: string,
    avatarLink: string,
    author: string;
}
export default function AdditionArticleCard({ date, title, imageLink, buttonLink, avatarLink, author }: AdditionArticleCardProps) {
    return (
        <div className="addition-article-card">
            <div className="addition-article-card__content">
                <p className="addition-article-card__date">{date}</p>
                <NavLink to={buttonLink} className="addition-article-card__title">
                    {title}
                </NavLink>
                <div className="addition-article-card__author-container">
                    <div className="addition-article-card__avatar-container">
                        <img className="addition-article-card__avatar-image" src={avatarLink} alt="Avatar" />
                    </div>
                    <h6 className='addition-article-card__author'> {author}</h6>
                </div>
            </div>
            <div className="addition-article-card__image-container">
                <img className="addition-article-card__image" src={imageLink} alt={title} />
            </div>
            <div className="addition-article-card__overlay"></div>
        </div>
    );
}