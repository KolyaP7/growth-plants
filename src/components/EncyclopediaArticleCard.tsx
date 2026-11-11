import './EncyclopediaArticleCard.css'

interface EncyclopediaArticleCardProps{
    title: string,
    description: string,
    tags: string[],
    readTime: string,
    date: string,
    imageLink: string,
    category: string
}
export default function EncyclopediaArticleCard({title, description, tags, readTime, date, imageLink, category}: EncyclopediaArticleCardProps){
    return (
        <div className="encyclopedia-article-card">
            <div className="encyclopedia-article-card__category">
                {category}
            </div>
            <div className="encyclopedia-article-card__image-container">
                <img src={imageLink} className="encyclopedia-article-card__image"></img>
            </div>
            <div className="encyclopedia-article-card__body">
                <div className="encyclopedia-article-card__text">
                    <h3 className="encyclopedia-article-card__title">{title}</h3>
                    <p className="encyclopedia-article-card__description">{description}</p>
                </div>
                <div className="encyclopedia-article-card__tags">
                    {tags.map((tag, index) => (
                        <p key={index} className="encyclopedia-article-card__tag">{tag}</p>
                    ))}
                </div>
            </div>
            <div className="encyclopedia-article-card__footer">
                <p className="encyclopedia-article-card__text">{readTime}</p>
                <p className="encyclopedia-article-card__text">{date}</p>
            </div>
        </div>
    );
}