import HeaderLinkButton from './HeaderLinkButton.tsx'
import LogoSmallCircle from './LogoSmallCircle.tsx'
import './Header.css'
import { NavLink, Link } from 'react-router'
import { useEffect, useRef, useState } from 'react'

export default function Header(){
    const [ ActiveIndex, SetActiveIndex ] = useState(0);
    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const [isStuck, setIsStuck] = useState(false);

    useEffect(() => {
        const sentinel = sentinelRef.current;

        if (!sentinel) {
            return;
        }

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry) return;

            // Sentinel ушёл из viewport — header прилип.
            setIsStuck(!entry.isIntersecting);
        },
        {
            threshold: 0,
            rootMargin: "-12px 0px 0px 0px",
        }
        );

        observer.observe(sentinel);

        // Важно: отключаем observer при удалении компонента.
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
        <div ref={sentinelRef} className="header-sentinel" aria-hidden="true" />
        <header>
            <div className={`header ${isStuck ? 'header--stuck' : ''}`}>
                <div className="header__section header__section--left-side">
                    <div className="header__logo">
                        <LogoSmallCircle></LogoSmallCircle>
                    </div>
                    <HeaderLinkButton
                    title="Home"
                    link="/"
                    ></HeaderLinkButton>
                    <HeaderLinkButton
                    title="Contact"
                    link="/contacts"
                    ></HeaderLinkButton>
                    <HeaderLinkButton
                    title="Blog" 
                    link="/blog">
                    </HeaderLinkButton>
                </div>
                <div className="header__section header__section--right-side">
                    <div className="header__search">S</div>
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