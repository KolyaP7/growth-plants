import HeaderLinkButton from './HeaderLinkButton.tsx'
import LogoSmallCircle from './LogoSmallCircle.tsx'
import './Header.css'
import { NavLink, Link } from 'react-router'
import { useEffect, useRef, useState } from 'react'

export default function Header(){
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
                    <div className="header__search">⌕</div>
                    <HeaderLinkButton 
                    title="Shop" 
                    link="/shop"
                    ></HeaderLinkButton>
                    <HeaderLinkButton 
                    title="Log in" 
                    link="/login"
                    ></HeaderLinkButton>
                </div>
                

            </div>
        </header>
        </>

    )
}