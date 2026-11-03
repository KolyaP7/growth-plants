import './SalePlantsCard.css'

type SalePlantsCardProps = {
    title: string,
    description: string,
    price: string,
    buttonLink: string,
    imageLink: string

}
export default function SalePlantsCard({title, description, price, buttonLink, imageLink}: SalePlantsCardProps){
    return (
        <div className="sale-plants-card__container">
            <div className="sale-plants-card__image-container">
                <img className="sale-plants-card__image"
                src={imageLink}></img>
            </div>
            <div className="sale-plants-card__header">
                <h3 className="sale-plants-card__title">
                    {title}
                </h3>
                <p className="sale-plants-card__description">
                    {description}
                </p>
            </div>
            <p className="sale-plants-card__price">{price}</p>
            <div className="sale-plants-card__button-link-container">
                <a className="sale-plants-card__button-link"
                href={buttonLink}>→</a>
            </div>
            <div className="sale-plants-card__button-like-container">
                <button className="sale-plants-card__button-like">♡</button>
            </div>
        </div>
    );
}