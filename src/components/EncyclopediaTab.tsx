import './EncyclopediaTab.css'
import { NavLink } from 'react-router';

interface EncyclopediaTabProps{
    title: string,
    link: string
}
export default function EncyclopediaTab({title, link}: EncyclopediaTab){
    return (
        <div className="encyclopedia-tab">
            <NavLink to={link} className="encyclopedia-tab__link">{title}</NavLink>
        </div>
    );
}