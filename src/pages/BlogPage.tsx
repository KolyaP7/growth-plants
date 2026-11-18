import HeaderWrapper from '../components/HeaderWrapper.tsx';
import SmallHeader from '../components/SmallHeader.tsx';
import Header from '../components/Header.tsx';
import ArcticleCard from '../components/ArticleCard.tsx';
import PostCard from '../components/PostCard.tsx';
import AdditionArticleCard from '../components/AdditionArticleCard.tsx';
import './BlogPage.css';
import Footer from '../components/FooterSection.tsx';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import { useEffect, useState } from 'react';
import type { User } from '../types.tsx';

interface BlogPageProps{
    user: User | null;
}

export default function BlogPage({user}: BlogPageProps){
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
        <section className="section blog-page-title">
            <h1 className="blog-page-title__title">Exploring New Articles</h1>
            <p className="blog-page-title__description">Dive into a world of insights, ideas, and inspiration. Stay updated with the latest trends shaping our present and future. </p>
        </section>
        <section className="section blog-page">
            <div className="blog-page__articles">
                <ArcticleCard
                author="Saarah Mcbride"
                imageLink="../../public/articles-images/1.jpg"
                avatarLink="../../public/blog-avatar/08.png"
                date="Nov 11, 2026"
                title="The World of Tropical Plants: Nature's Living Masterpieces"
                description="Discover the extraordinary diversity of tropical plants, from magnificent Monstera leaves to exotic Philodendrons. Learn about their natural habitats, unique characteristics, and the environmental conditions that allow them to thrive in tropical ecosystems."
                buttonLink="/"
                ></ArcticleCard>
                <ArcticleCard
                author="James Anderson"
                imageLink="../../public/articles-images/6.jpg"
                avatarLink="../../public/blog-avatar/05.png"
                date="Nov 29, 2024"
                title="Understanding Plant Leaves: Structure, Functions and Growth"
                description="Leaves are essential organs that make plant life possible. Explore their fascinating structures, understand how photosynthesis works, and discover how different leaf shapes and adaptations help plants survive in diverse environments."
                buttonLink="/"
                ></ArcticleCard>
                <ArcticleCard
                author="Cruz Mcintyre"
                imageLink="../../public/articles-images/4.jpg"
                avatarLink="../../public/blog-avatar/04.png"
                date="Nov 29, 2024"
                title="Indoor Gardening: Creating a Healthy Green Space at Home"
                description="Bring nature indoors with the right selection of houseplants. Discover how lighting, humidity, watering routines, and proper plant placement can transform your home into a healthy and beautiful green environment."
                buttonLink="/"
                ></ArcticleCard>
                <ArcticleCard
                author="Amna"
                imageLink="../../public/articles-images/2.jpg"
                avatarLink="../../public/blog-avatar/08.png"
                date="Nov 29, 2024"
                title="The Essential Guide to Healthy Plant Growth"
                description="Healthy plants begin with proper care. Learn the fundamentals of watering, soil selection, fertilization, pruning, and light management to help your plants grow stronger and remain healthy throughout the year."
                buttonLink="/"
                ></ArcticleCard>
            </div>
            <aside className="blog-trending-posts">
                <h3 className="blog-trending-posts__title">Trending Posts</h3>
                <PostCard
                author="Clara Wilson"
                imageLink="../../public/blog-thumbnail/05.png"
                avatarLink="../../public/blog-avatar/06.png"
                date="Nov 29, 2024"
                title="Sustainable Travel Tips: Reducing Your Carbon Footprint"
                buttonLink="/"
                ></PostCard>
                <PostCard
                author="Sophia Turner"
                imageLink="../../public/blog-thumbnail/06.png"
                avatarLink="../../public/blog-avatar/14.png"
                date="Nov 29, 2024"
                title="The Rise of Minimalist Interior Design"
                buttonLink="/"
                ></PostCard>
                <PostCard
                author="James Harper"
                imageLink="../../public/blog-thumbnail/07.png"
                avatarLink="../../public/blog-avatar/11.png"
                date="Nov 29, 2024"
                title="Mastering Night Photography: Capturing the Beauty of Darkness"
                buttonLink="/"
                ></PostCard>
                <AdditionArticleCard
                date="Nov 29, 2024"
                title="The Science of Sleep: How Rest Shapes Your Productivity"
                imageLink="../../public/blog-thumbnail/08.png"
                buttonLink="/"
                avatarLink="../../public/blog-avatar/12.png"
                author="DanielCruz"
                ></AdditionArticleCard>
            </aside>

        </section>
        <FooterSectionVer2></FooterSectionVer2>
        </>
    );
}