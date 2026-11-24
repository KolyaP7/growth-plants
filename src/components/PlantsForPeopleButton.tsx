import './PlantsForPeopleButton.css';


interface PlantsForPeopleButtonProps {
    title: string,
    index: number,
    activeTab: number,
    setActiveTab: (index: number) => void;
}

export default function PlantsForPeopleButton({title, index, setActiveTab, activeTab}: PlantsForPeopleButtonProps){

    const isActive = activeTab === index;

    return (
        <div className="plants-for-people__button-container">
            <button
                className={`plants-for-people__button 
                    ${isActive ? 'plants-for-people__button--active' : ''}`}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTab(index)}>
                {title}
            </button>
        </div>
    );
}