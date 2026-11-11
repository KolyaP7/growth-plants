import './AmoutCard.css'

interface AmoutCardProps {
    amount: number,
    title: string
}
export default function AmoutCard({amount, title}: AmoutCardProps){
    return (
        <div className="amount-card-container">
            <h3 className="amount-card__amount">{amount}+</h3>
            <p className="amount-card__text">{title}</p>
        </div>
    );
}