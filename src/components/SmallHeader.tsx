import './SmallHeader.css';
import HeaderLinkButton from './HeaderLinkButton.tsx'
import LogoSmallCircle from './LogoSmallCircle.tsx'
import { NavLink, Link } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import MenuOpenButton from './MenuOpenButton.tsx';
import type { User } from '../types.tsx';

interface SmallHeaderProps{
    user: User | null;
}

export default function SmallHeader({user}: SmallHeaderProps){
    const [ ActiveIndex, SetActiveIndex ] = useState(0);
    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const [isStuck, setIsStuck] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

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
                    
                </div>
                <div className="header__section header__section--right-side">
                    <MenuOpenButton
                    navLinks={[
                        "/",
                        "/encyclopedia",
                        "/blog",
                        "/contacts",
                        "/shop"
                    ]}
                    navTitles={[
                        "Home",
                        "Encyclopedia",
                        "Blog",
                        "Contact",
                        "Shop"
                    ]}>
                    </MenuOpenButton>
                    <div className="header__search">⌕</div>
                    {user == null ?
                        (<HeaderLinkButton
                        title="Log in"
                        link="/login"
                        ></HeaderLinkButton>) :
                        (<HeaderLinkButton
                        title="Account"
                        link="/account"
                        ></HeaderLinkButton>)
                    }
                </div>
            
            </div>
        </header>
        </>

    )
}