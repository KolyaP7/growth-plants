import Header from '../components/Header.tsx';
import ShopTropicalPlantsButton from '../components/ShopTropicalPlantsButton.tsx';
import PlantsForPeopleButton from '../components/PlantsForPeopleButton.tsx';
import PlantsForPeopleCard from '../components/PlantsForPeopleCard.tsx';
import SalePlantsCard from '../components/SalePlantsCard.tsx';
import IndoorCollectionCard from '../components/IndoorCollectionCard.tsx';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import './HomePage.css';
import { useState } from 'react';



export default function HomePage(){
    // PLANTS FOR PEOPLE TABS LOGIC
    const [ ActiveTab, SetActiveTab ] = useState(0);
    return (
        <>
        <Header></Header> 
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
                    <img src="../../public/plant1.png" className="hero__addition-information-image"></img>
                    <img src="../../public/plant1.png" className="hero__addition-information-image"></img>
                    <img src="../../public/plant1.png" className="hero__addition-information-image"></img>
                </div>
            </div>
        </section>
        <section className="section plants-for-people">
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
                        src="../../public/videoHomePage.mp4"
                        controls></video>
                    </div>
                </div>
                <div className="plants-for-people__description-section">
                    <h3 className="plants-for-people__description">
                        Each plant is cared 
                        <img className="plants-for-people__description-image" src="../../public/img1.png"></img>
                        for by our horticultural experts, so they are as happy as healthy as they get.
                    </h3>
                </div>
            </div>
            <div className="plants-for-people__actions">
                <PlantsForPeopleButton 
                title="Outdoor Plant"
                index={0}
                setActiveTab={SetActiveTab}
                activeTab={ActiveTab}
                ></PlantsForPeopleButton>
                <PlantsForPeopleButton 
                title="Indoor Plant"
                index={1}
                setActiveTab={SetActiveTab}
                activeTab={ActiveTab}>
                </PlantsForPeopleButton>
                <PlantsForPeopleButton
                title="Flower Pot"
                index={2}
                setActiveTab={SetActiveTab}
                activeTab={ActiveTab}
                >
                </PlantsForPeopleButton>
                <PlantsForPeopleButton 
                title="Potted Plant"
                index={3}
                setActiveTab={SetActiveTab}
                activeTab={ActiveTab}
                >
                </PlantsForPeopleButton>
                <PlantsForPeopleButton 
                title="See All"
                index={4}
                setActiveTab={SetActiveTab}
                activeTab={ActiveTab}
                >
                </PlantsForPeopleButton>
            </div>
            <div className="plants-for-people__cards">
                {ActiveTab === 0 && <div className="plants-for-people__cards-group">
                    <PlantsForPeopleCard 
                    title="Pet Friendly Plants"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis."
                    family="Piperaceae"
                    imgLink="../../public/plantsForPeople1.jpg"
                    cardLink="#pet-family"
                    ></PlantsForPeopleCard>
                    <PlantsForPeopleCard 
                    title="Orchids"
                    description="Orchids are easily everyone’s favorite flowering plant. Find new orchids and orchids success items in this collection."
                    family="Araceae"
                    imgLink="../../public/plantsForPeople2.jpg"
                    cardLink="#orchids"
                    ></PlantsForPeopleCard>
                    <PlantsForPeopleCard 
                    title="Succulents"
                    description="All succulents are cacti, but not all cacti are succulents. Both make low maintenance house plants."
                    family="Moraceae"
                    imgLink="../../public/plantsForPeople3.jpg"
                    cardLink="#succulents"
                    ></PlantsForPeopleCard>
                </div>}
                {ActiveTab === 1 && <div className="plants-for-people__cards-group">
                    <PlantsForPeopleCard 
                    title="Orchids"
                    description="Orchids are easily everyone’s favorite flowering plant. Find new orchids and orchids success items in this collection."
                    family="Araceae"
                    imgLink="../../public/plantsForPeople2.jpg"
                    cardLink="#orchids"
                    ></PlantsForPeopleCard>
                    <PlantsForPeopleCard 
                    title="Pet Friendly Plants"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis."
                    family="Piperaceae"
                    imgLink="../../public/plantsForPeople1.jpg"
                    cardLink="#pet-family"
                    ></PlantsForPeopleCard>
                    <PlantsForPeopleCard 
                    title="Succulents"
                    description="All succulents are cacti, but not all cacti are succulents. Both make low maintenance house plants."
                    family="Moraceae"
                    imgLink="../../public/plantsForPeople3.jpg"
                    cardLink="#succulents"
                    ></PlantsForPeopleCard>
                </div>}
                
            </div>
        </section>
        <section className="section new-plants">
            <div className="new-plants__header">
                <h1 className="new-plants__header-title">New Plants</h1>
                <p className="new-plants__header-text">
                    Bring nature insider and shop our big selections of fresh indoor plants
                    including Instagram-worthy houseplants, pet-friendly plants, orchids
                    and one-of-a-kind rare plants.
                </p>
            </div>
            <div className="new-plants__cards">
                <SalePlantsCard
                title='Peperomia Plants'
                description='Moist but well-drained'
                price='122,056$'
                buttonLink='#Peperomia'
                imageLink='../../public/plantsForPeople1.jpg'></SalePlantsCard>
                <SalePlantsCard
                title='Fiddle-Leaf Fig'
                description='Moist but well-drained'
                price='162,056$'
                buttonLink='#Peperomia'
                imageLink='../../public/plantsForPeople2.jpg'></SalePlantsCard>
                <SalePlantsCard
                title='Calathea Orbifolia'
                description='Moist but well-drained'
                price='102,056$'
                buttonLink='#Peperomia'
                imageLink='../../public/plantsForPeople3.jpg'></SalePlantsCard>
            </div>
        </section>
        <section className="section indoor-collection">
            <div className="indoor-collection__header">
                <h1 className="indoor-collection__header-title">
                    Indoor Collection
                </h1>
            </div>
            <div className="indoor-collection__cards">
                <div className="indoor-collection__row">
                    <IndoorCollectionCard
                    title="Philodendron"
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.'
                    buttonLink='#Philodendron'
                    imageLink='../../public/plantsForPeople1.jpg'
                    className='indoor-collection__card-1'></IndoorCollectionCard>
                    <IndoorCollectionCard
                    title="Calathea"
                    description='Monstera Deliciosa brings a touch of jungle elegance to any space. Its iconic perforated leaves add texture and depth, transforming blank walls into living art. Thriving in indirect light and consistent moisture, it’s a bold choice for modern interiors.'
                    buttonLink='#Philodendron'
                    imageLink='../../public/plantsForPeople3.jpg'
                    className='indoor-collection__card-2'></IndoorCollectionCard>
                </div>
                <div className="indoor-collection__row">
                    <IndoorCollectionCard
                    title="Air Purifying"
                    description='Sansevieria, or Snake Plant, combines sculptural beauty with exceptional resilience. Its upright, sword-like leaves lend a modern edge to decor, while its air-purifying qualities enhance indoor well-being. Perfect for low-maintenance lifestyles, it thrives in varied light conditions.'
                    buttonLink='#Philodendron'
                    imageLink='../../public/plantsForPeople2.jpg'
                    className='indoor-collection__card-3'></IndoorCollectionCard>
                    <IndoorCollectionCard
                    title="Low Light Tolerant"
                    description='Pilea Peperomioides, affectionately known as the Chinese Money Plant, charms with its coin-shaped leaves and easygoing nature. Its unique growth pattern creates a lush, layered look in compact spaces. A favorite among plant enthusiasts for its cheerful appearance and simple care routine.'
                    buttonLink='#Philodendron'
                    imageLink='../../public/plantsForPeople3.jpg'
                    className='indoor-collection__card-4'></IndoorCollectionCard>
                </div>
                
            </div>
        </section>
        <FooterSectionVer2></FooterSectionVer2>
        </>
    )
}