import "./WhatIsEncyclopediaCard.css";

interface WhatIsEncyclopediaCardProps {
    imageLink: string,
    title: string,
    text: string;
}
export default function WhatIsEncyclopediaCard({imageLink, title, text}: WhatIsEncyclopediaCardProps){
    return (
        <div className="what-is-encyclopedia-card">
            <div className="what-is-encyclopedia-card__image-container">
                <img src={imageLink} className="what-is-encyclopedia-card__image"></img>
            </div>
            <h3 className="what-is-encyclopedia-card__title">{title}</h3>
            <p className="what-is-encyclopedia-card__text">{text}</p>
        </div>
    );
}