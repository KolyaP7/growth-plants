import { useLocation, useSearchParams } from 'react-router';
import { indoorCollection, newPlants, peoplePlants, plantGuideLink, plantTabs } from '../data/homePlants.ts';
import Header from '../components/Header.tsx';
import SmallHeader from '../components/SmallHeader.tsx';
import ShopTropicalPlantsButton from '../components/ShopTropicalPlantsButton.tsx';
import PlantsForPeopleButton from '../components/PlantsForPeopleButton.tsx';
import PlantsForPeopleCard from '../components/PlantsForPeopleCard.tsx';
import SalePlantsCard from '../components/SalePlantsCard.tsx';
import IndoorCollectionCard from '../components/IndoorCollectionCard.tsx';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import './HomePage.css';
import { useState, useEffect } from 'react';
import type { User } from '../types.tsx';

interface HomePageProps{
    user: User | null;
}



export default function HomePage({user} : HomePageProps){
    const [searchParams, setSearchParams] = useSearchParams();
    const { hash } = useLocation();
    const activeTab = plantTabs.findIndex((tab) => tab.id === searchParams.get('plants'));
    const selectedIndex = Math.max(0, activeTab);
    const selectedTab = plantTabs[selectedIndex].id;
    const visibleCategories = plantTabs.filter(({ id }) => id !== 'all' && (selectedTab === 'all' || id === selectedTab));

    function selectTab(index: number) {
        setSearchParams((previous) => {
            const next = new URLSearchParams(previous);
            next.set('plants', plantTabs[index].id);
            return next;
        }, { replace: true });
    }

    useEffect(() => {
        const section = document.getElementById(hash.slice(1));
        section?.scrollIntoView();
    }, [hash]);

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
        <section className="section hero">
            <div className="header-space"></div>
            <div className="hero__title">
                <h2 className="hero__h2-title">Petal power</h2>
                <h1 className="hero__h1-title">
                    Growth
                </h1>
                <h6 className="hero__h6-title">We`re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our greenhouse to yours!</h6>
            </div>
            <ShopTropicalPlantsButton></ShopTropicalPlantsButton>
            <div className="hero__addition-information">
                <div className="hero__addition-information-selector hero__addition-information-selector-text">
                    <h3 className="hero__addition-information-h3-title">100+ Plants</h3>
                    <p className="hero__addition-information-text">We want our visitors to be inspire to get their hands dirty</p>
                </div>
                <div className="hero__addition-information-selector hero__addition-information-selector-images">
                    <img src="/plant1.png" className="hero__addition-information-image"></img>
                    <img src="/plant1.png" className="hero__addition-information-image"></img>
                    <img src="/plant1.png" className="hero__addition-information-image"></img>
                </div>
            </div>
        </section>
        <section id="plants-for-people" className="section plants-for-people">
            <div className="plants-for-people__header">
                <div className="plants-for-people__information-section">
                    <h2 className="plants-for-people__title">
                        Plants for the People
                    </h2>
                    <p className="plants-for-people__text">
                        We want our Visitors to be inspire to get their hands dirty
                    </p>
                </div>
                <div className="plants-for-people__video-section">
                    <div className="plants-for-people__video-wrapper">
                        <video className="plants-for-people__video"
                        src="/videoHomePage.mp4"
                        controls></video>
                    </div>
                </div>
                <div className="plants-for-people__description-section">
                    <h3 className="plants-for-people__description">
                        Each plant is cared 
                        <img className="plants-for-people__description-image" src="/img1.png"></img>
                        for by our horticultural experts, so they are as happy as healthy as they get.
                    </h3>
                </div>
            </div>
            <div className="plants-for-people__actions" aria-label="Plant categories" role="group">
                <div className="plants-for-people__actions-group">
                    {plantTabs.slice(0, -1).map((tab, index) => (
                        <PlantsForPeopleButton
                            key={tab.id}
                            title={tab.title}
                            index={index}
                            setActiveTab={selectTab}
                            activeTab={selectedIndex}
                        />
                    ))}
                </div>
                <PlantsForPeopleButton
                    title="See All"
                    index={plantTabs.length - 1}
                    setActiveTab={selectTab}
                    activeTab={selectedIndex}
                />
            </div>
            <div className="plants-for-people__cards">
                {visibleCategories.map(({ id }) => (
                    <div className="plants-for-people__cards-group" key={id}>
                        {peoplePlants.filter((plant) => plant.tab === id).map((plant) => (
                            <PlantsForPeopleCard
                                key={plant.slug}
                                title={plant.title}
                                description={plant.description}
                                family={plant.label}
                                imgLink={plant.imageLink}
                                cardLink={plantGuideLink(plant.slug)}
                                selectedTab={selectedTab}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
        <section id="new-plants" className="section new-plants">
            <div className="new-plants__header">
                <h1 className="new-plants__header-title">New Plants</h1>
                <p className="new-plants__header-text">
                    Bring nature insider and shop our big selections of fresh indoor plants
                    including Instagram-worthy houseplants, pet-friendly plants, orchids
                    and one-of-a-kind rare plants.
                </p>
            </div>
            <div className="new-plants__cards">
                {newPlants.map((plant) => (
                    <SalePlantsCard key={plant.slug} {...plant} buttonLink={plantGuideLink(plant.slug)} />
                ))}
            </div>
        </section>
        <section id="indoor-collection" className="section indoor-collection">
            <div className="indoor-collection__header">
                <h1 className="indoor-collection__header-title">
                    Indoor Collection
                </h1>
            </div>
            <div className="indoor-collection__cards">
                {[indoorCollection.slice(0, 2), indoorCollection.slice(2)].map((row) => (
                    <div className="indoor-collection__row" key={row[0].slug}>
                        {row.map((plant) => (
                            <IndoorCollectionCard key={plant.slug} {...plant} buttonLink={plantGuideLink(plant.slug)} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
        <FooterSectionVer2></FooterSectionVer2>
        </>
    )
}