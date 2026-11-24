import { publicationBodies } from './publicationBodies.ts';

const entries = [
    {
        slug: 'photosynthesis',
        title: 'Photosynthesis: how plants turn light into life',
        description: 'Follow the steps that turn light energy and carbon dioxide into the building blocks of plant growth.',
        tags: ['#Photosynthesis', '#Chlorophyll', '#Plants'],
        date: 'Oct 30',
        imageLink: '/plantsForPeople3.jpg',
        category: 'Physiology',
    },
    {
        slug: 'plant-families',
        title: 'How botanists identify plant families',
        description: 'Use flowers, fruits and leaves to recognise shared features and trace plant relationships.',
        tags: ['#Classification', '#PlantFamilies'],
        imageLink: '/articles-images/3.jpg',
        category: 'Systematics',
    },
    {
        slug: 'roots-and-stems',
        title: 'Roots and stems: the structure behind plant growth',
        description: 'Explore how two connected organs anchor plants, support leaves and store reserves.',
        tags: ['#Roots', '#Stems'],
        imageLink: '/plantsForPeople1.jpg',
        category: 'Morphology',
    },
    {
        slug: 'forest-layers',
        title: 'Forest layers and the plants that live in them',
        description: 'See how light, moisture and canopy gaps shape the habitats within a forest.',
        tags: ['#Forests', '#Habitats'],
        imageLink: '/tropical-green-leaves-background.jpg',
        category: 'Ecology',
    },
    {
        slug: 'pollination-and-seeds',
        title: 'From pollination to seed germination',
        description: 'Follow the life cycle from transported pollen to the first stages of a new plant.',
        tags: ['#Pollination', '#Seeds'],
        imageLink: '/articles-images/5.jpg',
        category: 'Reproduction',
    },
    {
        slug: 'plants-for-fibres',
        title: 'How plants become textile fibres',
        description: 'Compare how cotton and flax are harvested, processed and spun into yarn.',
        tags: ['#Cotton', '#Flax', '#Textiles'],
        imageLink: '/plantsForPeople2.jpg',
        category: 'Application',
    },
] satisfies {
    slug: keyof typeof publicationBodies;
    title: string;
    description: string;
    tags: string[];
    date?: string;
    imageLink: string;
    category: string;
}[];

export const encyclopediaArticles = entries.map((article) => ({
    ...article,
    body: publicationBodies[article.slug],
    buttonLink: '/encyclopedia/articles/' + article.slug,
}));
