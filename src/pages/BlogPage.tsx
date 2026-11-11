import HeaderWrapper from '../components/HeaderWrapper.tsx';
import Header from '../components/Header.tsx';
import ArcticleCard from '../components/ArticleCard.tsx';
import PostCard from '../components/PostCard.tsx';
import AdditionArticleCard from '../components/AdditionArticleCard.tsx';
import './BlogPage.css';
import Footer from '../components/FooterSection.tsx';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
export default function BlogPage(){
    return (
        <>
        <Header></Header>
        <div className="header-space"></div>
        <section className="section blog-page-title">
            <h1 className="blog-page-title__title">Exploring New Articles</h1>
            <p className="blog-page-title__description">Dive into a world of insights, ideas, and inspiration. Stay updated with the latest trends shaping our present and future. </p>
        </section>
        <section className="section blog-page">
            <div className="blog-page__articles">
                <ArcticleCard
                author="Saarah Mcbride"
                imageLink="../../public/blog-thumbnail/02.png"
                avatarLink="../../public/blog-avatar/08.png"
                date="Nov 29, 2024"
                title="Eco-Friendly Homes: The Future of Real Estate"
                description="The real estate industry is undergoing a significant transformation as eco-friendly homes gain popularity among buyers and developers alike. With increasing awareness of climate change and the need for sustainable living, eco-friendly homes represent not only a lifestyle choice but also a critical step toward reducing environmental impact."
                buttonLink="/"
                ></ArcticleCard>
                <ArcticleCard
                author="Author"
                imageLink="../../public/blog-thumbnail/01.png"
                avatarLink="../../public/blog-avatar/05.png"
                date="Nov 29, 2024"
                title="Digital Declutter: Cutting the Noise in a Hyperconnected World"
                description="In today’s hyperconnected world, the lines between work, leisure, and rest have blurred significantly. Notifications, endless streams of content, and the need to always stay connected often create a digital noise that impacts mental well-being, focus, and productivity. This is where the concept of digital declutter comes into play."
                buttonLink="/"
                ></ArcticleCard>
                <ArcticleCard
                author="Cruz Mcintyre"
                imageLink="../../public/blog-thumbnail/03.png"
                avatarLink="../../public/blog-avatar/04.png"
                date="Nov 29, 2024"
                title="A Foodie’s Guide to Europe: Best Culinary Experiences by Country"
                description="Europe is a treasure trove of culinary delights, offering a diverse array of flavors, techniques, and traditions. For food enthusiasts, the continent provides endless opportunities to indulge in authentic dishes and unforgettable dining experiences."
                buttonLink="/"
                ></ArcticleCard>
                <ArcticleCard
                author="Amna"
                imageLink="../../public/blog-thumbnail/04.png"
                avatarLink="../../public/blog-avatar/08.png"
                date="Nov 29, 2024"
                title="The Art of Black-and-White Photography"
                description="Black-and-white photography is a timeless art form that transcends trends and technology. By stripping away color, this medium emphasizes composition, texture, and emotion, creating images that are both powerful and evocative."
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