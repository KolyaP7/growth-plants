import './MenuOpenButton.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';

interface MenuOpenButtonProps{
    navLinks: string[],
    navTitles: string[]
}
export default function MenuOpenButton({navLinks, navTitles}: MenuOpenButtonProps){
    const [ IsMenuOpen, SetIsMenuOpen ] = useState(false);
    useEffect(() => {
    document.body.classList.toggle('no-scroll', IsMenuOpen);

    return () => {
        document.body.classList.remove('no-scroll');
    };
  }, [IsMenuOpen]);
    return (
        <>
        <div onClick={() => (SetIsMenuOpen(prev => !prev))}
        className="menu-open-button">
            <img className="menu-open-button_icon" src='../../public/menu-icon.png'></img>
        </div>
        <div className={`menu-open ${IsMenuOpen ? "menu-open--active" : ""}`}>
            <div className="menu-open-content">
                <div onClick={() => (SetIsMenuOpen(prev => !prev))}
                className="menu-open__close-button">
                    <img className="menu-open__close-button-image" src="../../public/menu-icon.png"></img>
                </div>
                {navLinks.map((link, index) => (
                    <NavLink className="menu-open__link" to={link}>{navTitles[index]}</NavLink>
                ))}
            </div>
        </div>
        </>
    );
}

