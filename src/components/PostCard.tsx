import './PostCard.css';
import { NavLink } from 'react-router';

interface PostCardProps {
    date: string;
    title: string;
    imageLink: string;
    buttonLink: string;
    avatarLink: string;
    author: string;
}
export default function PostCard({ date, title, imageLink, buttonLink, avatarLink, author }: PostCardProps) {
    return (
        <div className="post-card">
            <div className="post-card__image-container">
                <img className="post-card__image" src={imageLink} alt={title} />
            </div>
            <div className="post-card__content">
                <p className="post-card__date">{date}</p>
                <NavLink 
                to={buttonLink}
                className="post-card__title">{title}</NavLink>
                <div className="post-card__author-container">
                    <div className="post-card__avatar-container">
                        <img className="post-card__avatar-image" src={avatarLink} alt="Avatar" />
                    </div>
                    <h6 className='post-card__author'>{author}</h6>
                </div>

                
            </div>
        </div>
    );
}