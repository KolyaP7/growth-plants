import './HeaderLinkButton.css';
import { NavLink } from 'react-router';


type HeaderLinkButtonProps = {
    title: string,
    link: string
}

export default function HeaderLinkButton({title, link}: HeaderLinkButtonProps){


    return (
        <div className="HeaderLinkButton">
            <NavLink 
                className={({ isActive }) => `HeaderLinkButton__link
                ${isActive ? 'HeaderLinkButton__link--active' : ''}`}
                to={link}> {title}
            </NavLink>
        </div>
    );
}