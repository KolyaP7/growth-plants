import './EncyclopediaCategoryCard.css'

interface EncyclopediaCategoryCardProps {
    imageLink: string,
    title: string,
    text: string,
    amountArticles: string
}

export default function EncyclopediaCategoryCard({imageLink, title, text, amountArticles}: EncyclopediaCategoryCardProps){
    return (
        <div className="encyclopedia-category-card">
            <div className="encyclopedia-category-card__image-container">
                <img src={imageLink} className="encyclopedia-category-card__image"></img>
            </div>
            <h3 className="encyclopedia-category-card__title">{title}</h3>
            <p className="encyclopedia-category-card__text">{text}</p>
            <p className="encyclopedia-category-card__amount-articles-text">{amountArticles}</p>
        </div>
    );
}