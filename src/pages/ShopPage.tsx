import HeaderWrapper from '../components/HeaderWrapper.tsx';
import Header from '../components/Header.tsx';
import SmallHeader from '../components/SmallHeader.tsx';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import ShopPlantCard from '../components/ShopPlantCard.tsx';
import ShopPlantCard2 from '../components/ShopPlantCard2.tsx';
import { useEffect, useState, useRef } from 'react';
import type { User } from '../types.tsx';

import './ShopPage.css';

interface ShopPageProps{
    user: User | null;
}

export default function ShopPage({user}: ShopPageProps){

    const [query, setQuery] = useState('');
    const highlightTimer = useRef<number | null>(null);

    function handleSearch() {
        const normalized = query.toLowerCase();
        if (!normalized) return;

        // убираем подсветку с прошлых результатов
        document.querySelectorAll('.plant-card--highlight').forEach((el) =>
            el.classList.remove('plant-card--highlight')
        );

        const cards = document.querySelectorAll('.shop-plant-card__title');
        let match: Element[] = [];
        cards.forEach((card, index) => {
            if (card.textContent.toLowerCase() == normalized){
                match.push(card);
            }
        })

        if (match[0]) {
            match.forEach((Element, index) => {
                Element.classList.add('plant-card--highlight');
            })

            // снимаем подсветку через 2.5 секунды
            if (highlightTimer.current) clearTimeout(highlightTimer.current);
            highlightTimer.current = window.setTimeout(
                () => match[0].classList.remove('plant-card--highlight'),
                2500
            );
        } else {
            // ничего не нашли — можно показать подсказку
            alert(`Растение «${query}» не найдено`);
        }
        } 
        const [isSmallDevice, setIsSmallDevice] = useState(
            () => window.matchMedia('(max-width: 1700px)').matches
        );
    
        useEffect(() => {
            const mediaQuery = window.matchMedia('(max-width: 1700px)');
    
        function handleChange(event: MediaQueryListEvent) {
            setIsSmallDevice(event.matches);
        }
    
        mediaQuery.addEventListener('change', handleChange);
    
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
        }, []);
    return (
        <>
        {isSmallDevice ? <SmallHeader user={user}></SmallHeader> : <Header user={user}></Header>}
        <div className="header-space"></div>
        <section className="section featured-plants">
            <div className="featured-plants__header">
                <h2 className="featured-plants__header-title">Featured</h2>
                <p className="featured-plants__header-text">view all</p>
            </div>
            <div className="featured-plants__cards">
                <div className="featured-plants__cards">
                    <ShopPlantCard
                    title="Peperomia Ginny"
                    price="$25"
                    potColors={["#39362E", "#F3A195", "#EFEAE6", "#C38364"]}
                    imageLink="../../public/shop-plants/image-8.png"></ShopPlantCard>
                </div>
                <div className="featured-plants__cards">
                    <ShopPlantCard
                    title="Bird`s Nest Fern"
                    price="$45"
                    potColors={["#39362E", "#F3A195", "#EFEAE6", "#C38364"]}
                    imageLink="../../public/shop-plants/image-9.png"></ShopPlantCard>
                </div>
                <div className="featured-plants__cards">
                    <ShopPlantCard
                    title="Large Majesty Palm"
                    price="$52"
                    potColors={["#39362E", "#F3A195", "#EFEAE6", "#C38364"]}
                    imageLink="../../public/shop-plants/image-10.png"></ShopPlantCard>
                </div>
                <div className="featured-plants__cards">
                    <ShopPlantCard
                    title="Pet friendly Plant"
                    price="$30"
                    potColors={["#39362E", "#F3A195", "#EFEAE6"]}
                    imageLink="../../public/shop-plants/image-11.png"></ShopPlantCard>
                </div>
                <div className="featured-plants__cards">
                    <ShopPlantCard
                    title="Bird`s Nest Fern"
                    price="$45"
                    potColors={["#39362E", "#F3A195", "#EFEAE6"]}
                    imageLink="../../public/shop-plants/image-9.png"></ShopPlantCard>
                </div>
                <div className="featured-plants__cards">
                <ShopPlantCard
                title="Large Majesty Palm"
                price="$52"
                potColors={["#39362E", "#F3A195", "#EFEAE6", "#C38364"]}
                imageLink="../../public/shop-plants/image-10.png"></ShopPlantCard>
                </div>
                <div className="featured-plants__button-to-right-container">
                    <button className="featured-plants__button-to-right">→</button>
                </div>
            </div>
        </section>
        <section className="section search">
            <div className="search-content">
                <div className="search__item search__filter">☰</div>
                <div className="search__item search__search-field">
                    <input className="search__input" type="text" placeholder='Search flowers...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }}></input>
                </div>
                <div className="search__item search__search-button-container">
                    <button className="search__search-button" onClick={handleSearch}>⌕</button>
                </div>
            </div>
        </section>
        <section className="section colorful-new-arrivals">
            <div className="colorful-new-arrivals__header">
                <h2 className="colorful-new-arrivals__header-title">Colorful New Arrivals</h2>
                <p className="colorful-new-arrivals__header-text">view all</p>
            </div>
            <div className="colorful-new-arrivals__cards">
                <ShopPlantCard2
                imageLink="../../public/shop-plants-2/image-14.png"
                title="Blue lily"
                plantLink="/"
                ></ShopPlantCard2>
                <ShopPlantCard2
                imageLink="../../public/shop-plants-2/image-15.png"
                title="Rose"
                plantLink="/"
                ></ShopPlantCard2>
                <ShopPlantCard2
                imageLink="../../public/shop-plants-2/image-16.png"
                title="Tulip"
                plantLink="/"
                ></ShopPlantCard2>
                <ShopPlantCard2
                imageLink="../../public/shop-plants-2/image-17.png"
                title="Orchid"
                plantLink="/"
                ></ShopPlantCard2>
            </div>
        </section>
        <FooterSectionVer2></FooterSectionVer2>
        
        </>
    );
}