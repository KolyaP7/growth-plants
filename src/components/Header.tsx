import HeaderLinkButton from './HeaderLinkButton.tsx'
import LogoSmallCircle from './LogoSmallCircle.tsx'
import './Header.css'
import { NavLink, Link } from 'react-router'
import { useEffect, useRef, useState } from 'react'

import type { User } from '../types.tsx';

interface HeaderProps{
    user: User | null;

}

export default function Header({user}: HeaderProps){
    const [ ActiveIndex, SetActiveIndex ] = useState(0);
    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const [isStuck, setIsStuck] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    const [ IsSearchFull, SetIsSearchFull ] = useState(false);

    const [ IsSearchFocused, SetIsSearchFocused ] = useState(false);

    const handleSearchInput = () => {
        SetIsSearchFocused(prev => !prev);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div ref={sentinelRef} className="header-sentinel" aria-hidden="true" />
        <header>
            <div className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
                <div className="header__section header__section--left-side">
                    <div className="header__logo">
                        <LogoSmallCircle></LogoSmallCircle>
                    </div>
                    <h3 className="header__title">Growth <br></br> <span className="header__description">World of plants</span>
                    </h3>
                    <HeaderLinkButton
                    title="Home"
                    link="/"
                    ></HeaderLinkButton>
                    <HeaderLinkButton
                    title="Encyclopedia"
                    link="/encyclopedia">
                    </HeaderLinkButton>
                    <HeaderLinkButton
                    title="Blog"
                    link="/blog">
                    </HeaderLinkButton>
                    <HeaderLinkButton
                    title="Contact"
                    link="/contacts"
                    ></HeaderLinkButton>
                    
                </div>
                <div className="header__section header__section--right-side">
                    <div onClick={() => (SetIsSearchFull(prev => !prev))} className="header__search-container"></div>
                        <div className={`header__search-full 
                            ${IsSearchFocused ? 'header__search-full--focused' : ""} 
                            ${IsSearchFull ? 'header__search-full--full' : ""}`}>
                            <div className={`header__search ${IsSearchFull ? 'header__search--full' : ""}`}>⌕ <input onInput={handleSearchInput} className={`header__input ${IsSearchFull ? "header__input--full" : ""}`} type='text' placeholder="search"></input></div>
                        </div>
                        
                        
                        
                    <HeaderLinkButton
                    title="Shop"
                    link="/shop"
                    ></HeaderLinkButton>
                    {user == null ?
                    (<HeaderLinkButton
                    title="Log in"
                    link="/login"
                    ></HeaderLinkButton>) :
                    (<HeaderLinkButton
                    title="Account"
                    link="/account"
                    imageLink={user.imageLink}
                    ></HeaderLinkButton>)
                    }
                    
                </div>
            
            </div>
        </header>
        </>

    )
}