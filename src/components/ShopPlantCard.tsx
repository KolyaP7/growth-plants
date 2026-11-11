import './ShopPlantCard.css'

interface ShopPlantCardProps {
    title: string,
    price: string,
    potColors: string[],
    imageLink: string;
}

export default function ShopPlantCard({title, price, potColors, imageLink}: ShopPlantCardProps){
    return (
        <div className="shop-plant-card-container">
            <div className="shop-plant-card__image-container">
                <img className="shop-plant-card__image"
                    src={imageLink}>
                </img>
            </div>
            <div className="shop-plant-card__content">
                <div className="shop-plant-card__header">
                    <h3 className="shop-plant-card__title">{title}</h3>
                    <p className="shop-plant-card__price">{price}</p>
                </div>
                <div className="shop-plant-card__footer">
                    <div className="shop-plant-card__pot">
                        <p className="shop-plant-card__pot-title">Pot color</p>
                        <div className="shop-plant-card__pot-colors">
                            {potColors.map((color, index) => (
                            <div key={index}
                                className="shop-plant-card__pot-circle"
                                style={{backgroundColor: color}}>
                            </div>
                            ))}
                        </div>
                    </div>
                    <button className="shop-plant-card__buy-button">Buy</button>
                </div>
            </div>
        </div>
    );
}