import './HeaderLinkButton.css';
import { NavLink } from 'react-router';


type HeaderLinkButtonProps = {
    title: String,
    link: String,
    imageLink?: String | null;
}

export default function HeaderLinkButton({title, link, imageLink}: HeaderLinkButtonProps){

    const isAvatarExist = imageLink != null;

    return (
        <>
        {!isAvatarExist ?
            (
                <div className="HeaderLinkButton">
                    <NavLink 
                        className={({ isActive }) => `HeaderLinkButton__link
                        ${isActive ? 'HeaderLinkButton__link--active' : ''}`}
                        to={link}> {title}
                    </NavLink>
                </div>
            ) : 
            (
                <NavLink className="HeaderAccountAvatar__link" to="/account">
                    <img className="HeaderAccountAvatar__avatar" src={imageLink}></img>
                </NavLink>
            )
        }
        
            

        </>
        
    );
}