import { Link } from 'react-router';
import './ShopTropicalPlantsButton.css';

export default function ShopTropicalPlantsButton() {
    return (
        <div className="shop-tropical-plants">
            <Link className="shop-tropical-plants__button shop-tropical-plants__link" to="/shop">
                Shop Tropical Plants
            </Link>
        </div>
    );
}
