import './EncyclopediaPage.css';
import { useState } from 'react';
import HeaderWrapper from '../components/HeaderWrapper.tsx';
import EncyclopediaHeader from '../components/EncyclopediaHeader.tsx';
import AmoutCard from '../components/AmoutCard.tsx';
import WhatIsEncyclopediaCard from '../components/WhatIsEncyclopediaCard.tsx';
import EncyclopediaCategoryCard from '../components/EncyclopediaCategoryCard.tsx';
import EncyclopediaArticleCard from '../components/EncyclopediaArticleCard.tsx';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import '../fonts.css';

export default function EncyclopediaPage(){
    const [ isFocused, setIsFocused ] = useState(false);
    return (
        <>
            <EncyclopediaHeader
            tabTitles={["Systematics", "Morphology", "Range and ecology", "Developmental biology", "Economic importance", "Conservation and status", "Gallery", "Literature and sources"]}
            tabLinks={["/encyclopedia/taxonomy", "/encyclopedia/morphology", "/encyclopedia/range-and-ecology", "/encyclopedia/developmental-biology", "/encyclopedia/economic-importance", "/encyclopedia/conservation-and-status", "/encyclopedia/gallery", "/encyclopedia/literature-and-sources"]}></EncyclopediaHeader>
            <section className="section encyclopedia-hero">
                <div className="encyclopedia-hero__content">
                    <div className="encyclopedia-hero__title-addition-container">
                        <p className="encyclopedia-hero__title-addition">Educational and research center of botany</p>
                    </div>
                    <h3 className="encyclopedia-hero__title">Encyclopedia of plants and flora</h3>
                    <p className="encyclopedia-hero__description">Depth of the academic approach with accessibility for a wide audience. Explore plant species, agricultural techniques, applications in medicine and design, as well as fundamental concepts of botany.</p>
                    <div className={`encyclopedia-hero__search-container ${isFocused ? "encyclopedia-hero__search-container--focused" : ""}`}>
                        <p className="encyclopedia-hero__search-icon">⌕</p>
                        <input onFocus={() => setIsFocused(true)} className="encyclopedia-hero__search-input" placeholder='Find articles, terms, tools...'></input>
                        <button className="encyclopedia-hero__search-button">
                            <span>Search</span>
                            <span>→</span>
                        </button>
                    </div>
                    <div className="encyclopedia-hero__button-group">
                        <button className="encyclopedia-hero__button encyclopedia-hero__start-button">Start with basic concepts</button>
                        <button className="encyclopedia-hero__button encyclopedia-hero__modal-button">Study plant families</button>
                    </div>
                    <div className="encyclopedia-hero__card-group">
                        <AmoutCard
                        amount={500}
                        title="Articles">
                        </AmoutCard>
                        <AmoutCard
                        amount={200}
                        title="Terms">
                        </AmoutCard>
                        <AmoutCard
                        amount={100}
                        title="Tools">
                        </AmoutCard>
                    </div>

                </div>
            </section>
            <section className="section what-is-encyclopedia">
                <div className="what-is-encyclopedia__content">
                    <div className="what-is-encyclopedia__about-project"><p>About the project</p></div>
                    <h3 className="what-is-encyclopedia__question">What is the Encyclopedia of Plants</h3>
                    <p className="what-is-encyclopedia__answer">
                    This is an educational and research platform that combines a blog, a knowledge base, and an encyclopedia of botany and plant growing. We structure information about plant species, agricultural techniques, applications in medicine, design, and cooking, and also provide access to in-depth knowledge through interactive materials, a glossary of terms, and visual diagrams of life cycles and morphology.</p>
                    <div className="what-is-encyclopedia__card-container">
                        <WhatIsEncyclopediaCard
                        imageLink="../../public/encyclopedia-icon-1.png"
                        title="Knowledge Base"
                        text="Structured glossary of botanical terms and concepts"
                        ></WhatIsEncyclopediaCard>
                        <WhatIsEncyclopediaCard
                        imageLink="../../public/encyclopedia-icon-3.png"
                        text="Interactive map of relationships between taxonomic groups and ecological niches"
                        title="Plant MindMap"
                        ></WhatIsEncyclopediaCard>
                        <WhatIsEncyclopediaCard
                        imageLink="../../public/encyclopedia-icon-2.png"
                        title="Community"
                        text="Stories, interviews, and experience of botanists, gardeners, and phytotherapists"
                        ></WhatIsEncyclopediaCard>
                    </div>
                </div>
            </section>
            <section className="section encyclopedia-category">
                <div className="encyclopedia-category__header">
                    <div className="encyclopedia-category__header-text">
                        <h3 className="encyclopedia-category__header-title">Explore categories</h3>
                        <p className="encyclopedia-category__header-addition-text">Dive into various aspects of botany</p>
                    </div>
                    <button className="encyclopedia-category__header-button">All categories</button>
                </div>
                <div className="encyclopedia-category__cards">
                    <EncyclopediaCategoryCard
                    imageLink='../../public/plant_encyclopedia_icons_png/01_plant_encyclopedia.png'
                    title='The Plant World'
                    text='Diversity of the plant world, classification, families, and main characteristics of plants.'
                    amountArticles='1240'></EncyclopediaCategoryCard>
                    <EncyclopediaCategoryCard
                    imageLink='../../public/plant_encyclopedia_icons_png/02_plant_classification.png'
                    title='Flowers and ornamental plants'
                    text='Encyclopedia of flowers, ornamental crops, their species, features, and growing conditions.'
                    amountArticles='356'></EncyclopediaCategoryCard>
                    <EncyclopediaCategoryCard
                    imageLink='../../public/plant_encyclopedia_icons_png/03_botany_glossary.png'
                    title='Trees and shrubs'
                    text='Species of trees and shrubs, structure, distribution, properties, and ecological role.'
                    amountArticles='298'></EncyclopediaCategoryCard>
                    <EncyclopediaCategoryCard
                    imageLink='../../public/plant_encyclopedia_icons_png/04_plant_identifier.png'
                    title='Growing and care'
                    text='Practical recommendations on planting, watering, transplanting, fertilizing, and plant care.'
                    amountArticles='982'></EncyclopediaCategoryCard>
                    <EncyclopediaCategoryCard
                    imageLink='../../public/plant_encyclopedia_icons_png/05_plant_care.png'
                    title='Botany and research'
                    text='Scientific information about plant structure, photosynthesis, reproduction, and life cycles.'
                    amountArticles='174'></EncyclopediaCategoryCard>
                    <EncyclopediaCategoryCard
                    imageLink='public/plant_encyclopedia_icons_png/06_plant_habitats.png'
                    title='Medicinal and useful plants'
                    text='Properties, uses, composition, and characteristics of medicinal, food, and useful plants.'
                    amountArticles='487'></EncyclopediaCategoryCard>
                </div>
            </section>
            <section className="section encyclopedia-last-articles">
                <div className="encyclopedia-last-articles__header">
                    <div className="encyclopedia-last-articles__header-text">
                        <h3 className="encyclopedia-last-articles__header-title">Latest articles</h3>
                        <p className="encyclopedia-last-articles__header-addition-text">Current materials and research in the field of botany</p>
                    </div>
                    <button className="encyclopedia-last-articles__all-articles-button">All articles</button>
                </div>
                <div className="encyclopedia-last-articles__navigation">
                    <button className="encyclopedia-last-articles__navigation-category">All</button>
                    <button className="encyclopedia-last-articles__navigation-category">Systematics</button>
                    <button className="encyclopedia-last-articles__navigation-category">Morphology</button>
                    <button className="encyclopedia-last-articles__navigation-category">Physiology</button>
                    <button className="encyclopedia-last-articles__navigation-category">Ecology</button>
                    <button className="encyclopedia-last-articles__navigation-category">Reproduction</button>
                    <button className="encyclopedia-last-articles__navigation-category">Application</button>
                </div>
                <div className="encyclopedia-last-articles__articles-content">
                    <div className="encyclopedia-last-articles__articles-cards">
                        <EncyclopediaArticleCard
                        title="Photosynthesis: how plants turn light into life"
                        description='How the process of photosynthesis works, why it underlies almost all life on Earth, and what modern research helps us better understand its mechanisms.'
                        tags={["#Photosynthesis", "#Chlorophyll", "#Plants"]}
                        readTime="9 min"
                        date="Oct 30"
                        imageLink="../../public/plantsForPeople3.jpg"
                        category="Physiology"></EncyclopediaArticleCard>
                        <EncyclopediaArticleCard
                        title="Photosynthesis: how plants turn light into life"
                        description='How the process of photosynthesis works, why it underlies almost all life on Earth, and what modern research helps us better understand its mechanisms.'
                        tags={["#Photosynthesis", "#Chlorophyll", "#Plants"]}
                        readTime="9 min"
                        date="Oct 30"
                        imageLink="../../public/plantsForPeople3.jpg"
                        category="Physiology"></EncyclopediaArticleCard>
                        <EncyclopediaArticleCard
                        title="Photosynthesis: how plants turn light into life"
                        description='How the process of photosynthesis works, why it underlies almost all life on Earth, and what modern research helps us better understand its mechanisms.'
                        tags={["#Photosynthesis", "#Chlorophyll", "#Plants"]}
                        readTime="9 min"
                        date="Oct 30"
                        imageLink="../../public/plantsForPeople3.jpg"
                        category="Physiology"></EncyclopediaArticleCard>
                        <EncyclopediaArticleCard
                        title="Photosynthesis: how plants turn light into life"
                        description='How the process of photosynthesis works, why it underlies almost all life on Earth, and what modern research helps us better understand its mechanisms.'
                        tags={["#Photosynthesis", "#Chlorophyll", "#Plants"]}
                        readTime="9 min"
                        date="Oct 30"
                        imageLink="../../public/plantsForPeople3.jpg"
                        category="Physiology"></EncyclopediaArticleCard>
                        <EncyclopediaArticleCard
                        title="Photosynthesis: how plants turn light into life"
                        description='How the process of photosynthesis works, why it underlies almost all life on Earth, and what modern research helps us better understand its mechanisms.'
                        tags={["#Photosynthesis", "#Chlorophyll", "#Plants"]}
                        readTime="9 min"
                        date="Oct 30"
                        imageLink="../../public/plantsForPeople3.jpg"
                        category="Physiology"></EncyclopediaArticleCard>
                        <EncyclopediaArticleCard
                        title="Photosynthesis: how plants turn light into life"
                        description='How the process of photosynthesis works, why it underlies almost all life on Earth, and what modern research helps us better understand its mechanisms.'
                        tags={["#Photosynthesis", "#Chlorophyll", "#Plants"]}
                        readTime="9 min"
                        date="Oct 30"
                        imageLink="../../public/plantsForPeople3.jpg"
                        category="Physiology"></EncyclopediaArticleCard>
                    </div>
                    <button className="encyclopedia-last-articles__button-more-articles">Show more articles</button>
                </div>
                
            </section>
            <FooterSectionVer2 ></FooterSectionVer2>
        </>
    );
}