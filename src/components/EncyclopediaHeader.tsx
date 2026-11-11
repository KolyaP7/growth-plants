import { NavLink } from 'react-router';
import { useState } from 'react';
import './EncyclopediaHeader.css';
import EncyclopediaTab from './EncyclopediaTab.tsx';
import LogoSmallCircle from './LogoSmallCircle.tsx';

interface EncyclopediaHeaderProps{
    tabTitles: string[],
    tabLinks: string[]
}
export default function EncyclopediaHeader({tabTitles, tabLinks}: EncyclopediaHeaderProps){
    const [ searchInput, setSearchInput] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="encyclopedia-header">
            <div className="encyclopedia-header__container">
                <div className="encyclopedia-header__logo-container">
                    <div className="encyclopedia-header__image-container">
                        <LogoSmallCircle></LogoSmallCircle>
                    </div>
                    <div className="encyclopedia-header__logo-text">
                        <h3 className="encyclopedia-header__logo-title">Growth encyclopedia</h3>
                        <p className="encyclopedia-header__logo-addition">Encyclopedia of Plants</p>
                    </div>
                </div>
                <div className="encyclopedia-header__navigation">
                    {tabTitles.map((tab, index) => (
                        <EncyclopediaTab
                        title={tab}
                        link={tabLinks[index]}></EncyclopediaTab>
                    ))}
                </div>
                <div className="encyclopedia-header__group">
                    <div className={`encyclopedia-header__search ${isFocused ? "encyclopedia-header__search--focused" : ""}`}>
                        <NavLink to={`#${searchInput}`} className="encyclopedia-header__search-icon">⌕</NavLink>
                        <input onFocus={() => setIsFocused(true)} className="encyclopedia-header__search-input" placeholder="Searching the encyclopedia..."></input>
                    </div>
                    <div className="encyclopedia-header__exit">
                        <NavLink to='/' className="encyclopedia-header__exit-link">Home</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}