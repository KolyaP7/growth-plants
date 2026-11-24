import { publicationBodies } from "./publicationBodies.ts";

const entries = [
    {
        "slug": "tropical-plants",
        "author": "Saarah Mcbride",
        "imageLink": "/articles-images/1.jpg",
        "avatarLink": "/blog-avatar/08.png",
        "date": "Nov 11, 2026",
        "title": "The World of Tropical Plants: Nature's Living Masterpieces",
        "description": "Discover the extraordinary diversity of tropical plants, from magnificent Monstera leaves to exotic Philodendrons. Learn about their natural habitats, unique characteristics, and the environmental conditions that allow them to thrive in tropical ecosystems."
    },
    {
        "slug": "plant-leaves",
        "author": "James Anderson",
        "imageLink": "/articles-images/6.jpg",
        "avatarLink": "/blog-avatar/05.png",
        "date": "Nov 29, 2024",
        "title": "Understanding Plant Leaves: Structure, Functions and Growth",
        "description": "Leaves are essential organs that make plant life possible. Explore their fascinating structures, understand how photosynthesis works, and discover how different leaf shapes and adaptations help plants survive in diverse environments."
    },
    {
        "slug": "indoor-gardening",
        "author": "Cruz Mcintyre",
        "imageLink": "/articles-images/4.jpg",
        "avatarLink": "/blog-avatar/04.png",
        "date": "Nov 29, 2024",
        "title": "Indoor Gardening: Creating a Healthy Green Space at Home",
        "description": "Bring nature indoors with the right selection of houseplants. Discover how lighting, humidity, watering routines, and proper plant placement can transform your home into a healthy and beautiful green environment."
    },
    {
        "slug": "healthy-plant-growth",
        "author": "Amna",
        "imageLink": "/articles-images/2.jpg",
        "avatarLink": "/blog-avatar/08.png",
        "date": "Nov 29, 2024",
        "title": "The Essential Guide to Healthy Plant Growth",
        "description": "Healthy plants begin with proper care. Learn the fundamentals of watering, soil selection, fertilization, pruning, and light management to help your plants grow stronger and remain healthy throughout the year."
    },
    {
        "slug": "sustainable-travel",
        "author": "Clara Wilson",
        "imageLink": "/blog-thumbnail/05.png",
        "avatarLink": "/blog-avatar/06.png",
        "date": "Nov 29, 2024",
        "title": "Sustainable Travel Tips: Reducing Your Carbon Footprint"
    },
    {
        "slug": "minimalist-interior-design",
        "author": "Sophia Turner",
        "imageLink": "/blog-thumbnail/06.png",
        "avatarLink": "/blog-avatar/14.png",
        "date": "Nov 29, 2024",
        "title": "The Rise of Minimalist Interior Design"
    },
    {
        "slug": "night-photography",
        "author": "James Harper",
        "imageLink": "/blog-thumbnail/07.png",
        "avatarLink": "/blog-avatar/11.png",
        "date": "Nov 29, 2024",
        "title": "Mastering Night Photography: Capturing the Beauty of Darkness"
    },
    {
        "slug": "science-of-sleep",
        "date": "Nov 29, 2024",
        "title": "The Science of Sleep: How Rest Shapes Your Productivity",
        "imageLink": "/blog-thumbnail/08.png",
        "avatarLink": "/blog-avatar/12.png",
        "author": "DanielCruz"
    }
] as const;

function withContent<T extends (typeof entries)[number]>(entry: T) {
    return {
        ...entry,
        body: publicationBodies[entry.slug],
        buttonLink: "/blog/" + entry.slug,
    };
}

const [tropicalPlants, plantLeaves, indoorGardening, healthyPlantGrowth,
    sustainableTravel, minimalistDesign, nightPhotography, scienceOfSleep] = entries;

export const articles = [tropicalPlants, plantLeaves, indoorGardening, healthyPlantGrowth].map(withContent);
export const posts = [sustainableTravel, minimalistDesign, nightPhotography].map(withContent);
export const featuredPost = withContent(scienceOfSleep);
export const blogPublications = [...articles, ...posts, featuredPost];
