import { articles, posts, featuredPost } from '../data/blogPublications.ts';
import SmallHeader from '../components/SmallHeader.tsx';
import Header from '../components/Header.tsx';
import ArticleCard from '../components/ArticleCard.tsx';
import PostCard from '../components/PostCard.tsx';
import AdditionArticleCard from '../components/AdditionArticleCard.tsx';
import './BlogPage.css';
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
                {articles.map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                ))}
            </div>
            <aside className="blog-trending-posts">
                <h3 className="blog-trending-posts__title">Trending Posts</h3>
                {posts.map((post) => <PostCard key={post.slug} {...post} />)}
                <AdditionArticleCard {...featuredPost} />
            </aside>

        </section>
        <FooterSectionVer2></FooterSectionVer2>
        </>
    );
}