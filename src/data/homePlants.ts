export const plantTabs = [
    { id: 'outdoor', title: 'Outdoor Plant' },
    { id: 'indoor', title: 'Indoor Plant' },
    { id: 'pots', title: 'Flower Pot' },
    { id: 'potted', title: 'Potted Plant' },
    { id: 'all', title: 'See All' },
] as const;

type PlantTab = Exclude<(typeof plantTabs)[number]['id'], 'all'>;

interface PlantGuide {
    slug: string;
    title: string;
    description: string;
    imageLink: string;
    details: [heading: string, text: string][];
}

interface PlantCollection extends PlantGuide {
    tab: PlantTab;
    label: string;
}

export const peoplePlants: PlantCollection[] = [
    {
        slug: 'balcony-herbs', tab: 'outdoor', title: 'Balcony Herbs', label: 'Edible garden',
        imageLink: '/plantsForPeople1.jpg',
        description: 'Build a balcony herb garden with basil, thyme and rosemary.',
        details: [
            ['Choose a sunny spot', 'Place pots where they receive several hours of direct light. Start with a few plants, leaving space between the pots so you can reach each plant to water and harvest.'],
            ['Water each pot separately', 'Basil prefers more even moisture. Rosemary and thyme benefit from a gritty mix that dries between waterings. Use pots with drainage holes and empty the saucers after watering.'],
        ],
    },
    {
        slug: 'outdoor-ferns', tab: 'outdoor', title: 'Shade Garden Ferns', label: 'Outdoor foliage',
        imageLink: '/shop-plants/image-9.png',
        description: 'Add fresh foliage to a sheltered patio or shady garden border.',
        details: [
            ['Choose a fern for your climate', 'Check the hardiness of the species before planting outdoors. Many garden ferns grow well in filtered shade, where tree canopies or a wall shield their fronds from midday sun.'],
            ['Keep the root zone evenly moist', 'Mix organic matter into free-draining soil and add a thin layer of mulch around the plant. Leave space around its crown and check the soil during dry spells.'],
        ],
    },
    {
        slug: 'patio-succulents', tab: 'outdoor', title: 'Patio Succulents', label: 'Sunny containers',
        imageLink: '/plantsForPeople3.jpg',
        description: 'Create a sunny container with drought-tolerant stonecrops and houseleeks.',
        details: [
            ['Choose hardy varieties', 'Stonecrops and houseleeks include species that can live outdoors year-round in suitable climates. Check the plant label for cold tolerance and introduce newly acquired plants to direct sun over several days.'],
            ['Give rain somewhere to go', 'Use a container with drainage holes and a gritty potting mix. Allow the mix to dry before watering again, and move containers under cover if rain leaves the soil wet for days.'],
        ],
    },
    {
        slug: 'pet-friendly-plants', tab: 'indoor', title: 'Pet Friendly Plants', label: 'Indoor foliage',
        imageLink: '/shop-plants/image-8.png',
        description: 'Explore peperomias and other houseplants for homes shared with cats or dogs.',
        details: [
            ['Start with the botanical name', 'Identify the species on the label and check it against a veterinary toxicity database for your pet. Shops sometimes use the same common name for unrelated plants.'],
            ['Find a practical spot', 'A bright shelf away from direct afternoon sun suits many peperomias. Choose a stable pot and keep loose soil, fertilizers and plant ties out of reach.'],
        ],
    },
    {
        slug: 'orchids', tab: 'indoor', title: 'Orchids', label: 'Orchidaceae',
        imageLink: '/plantsForPeople2.jpg',
        description: 'Grow moth orchids in bright, filtered light with an airy bark mix.',
        details: [
            ['Let air reach the roots', 'Moth orchids grow well in a container with generous drainage and a loose orchid bark mix. Water the mix thoroughly as it approaches dryness and let it drain. Avoid leaving water in the centre of the leaf rosette.'],
            ['Care for the plant after flowering', 'Keep the orchid in bright, filtered light as it continues to produce leaves and roots. Consider repotting when the bark starts breaking down or the plant outgrows its container.'],
        ],
    },
    {
        slug: 'succulents', tab: 'indoor', title: 'Succulents', label: 'Drought-tolerant plants',
        imageLink: '/plantsForPeople3.jpg',
        description: 'Find compact succulents for bright windows and small spaces.',
        details: [
            ['Find the right light', 'Choose a bright window and adjust the placement to the species. Echeverias often need stronger light, while haworthias tolerate some shade. Introduce direct sunlight gradually.'],
            ['Water deeply and let the mix dry', 'Use a free-draining succulent mix and a pot with a hole. Check that the mix is dry before watering again, especially when growth slows in cooler months.'],
        ],
    },
    {
        slug: 'terracotta-pots', tab: 'pots', title: 'Terracotta Pots', label: 'Unglazed clay',
        imageLink: '/shop-plants/image-8.png',
        description: 'Choose a breathable clay pot for herbs or plants that prefer faster-drying soil.',
        details: [
            ['Match the pot to your plant', 'Unglazed terracotta lets moisture evaporate through the walls. This can suit rosemary and some succulents, particularly when paired with a well-drained potting mix.'],
            ['Protect the surface underneath', 'Choose a pot with a hole and use a saucer to catch runoff. Empty the saucer after watering so the pot can drain freely.'],
        ],
    },
    {
        slug: 'ceramic-planters', tab: 'pots', title: 'Ceramic Planters', label: 'Glazed ceramic',
        imageLink: '/shop-plants/image-9.png',
        description: 'Use a glazed planter as a decorative cover for an indoor nursery pot.',
        details: [
            ['Leave room to lift the inner pot', 'Pick a cover pot slightly wider than the nursery pot so you can remove it easily to water. Glazed ceramic is often heavy, so check that the shelf can support the filled pot.'],
            ['Check for collected water', 'Water the plant in its nursery pot and let it finish draining before placing it back. If you plant directly in ceramic, choose a planter with a drainage hole.'],
        ],
    },
    {
        slug: 'drainage-pots', tab: 'pots', title: 'Drainage Pots', label: 'Nursery containers',
        imageLink: '/shop-plants/image-10.png',
        description: 'Pick a lightweight container that makes drainage and repotting easy.',
        details: [
            ['Size the container to the roots', 'Choose a pot only a little wider than the root ball. A large volume of wet mix around a small plant can stay damp for a long time.'],
            ['Check the base', 'Look for open holes and use a tray or cover pot to catch water. When repotting, keep the base of the stem at its original soil level.'],
        ],
    },
    {
        slug: 'potted-peperomia', tab: 'potted', title: 'Potted Peperomia', label: 'Piperaceae',
        imageLink: '/shop-plants/image-8.png',
        description: 'A compact foliage plant for a bright desk or shelf.',
        details: [
            ['Give it filtered light', 'Place the pot near a bright window with filtered sun. Rotate the container periodically if the shoots start leaning strongly toward the window.'],
            ['Check the mix before watering', 'Allow the upper layer of potting mix to dry, then water and drain the container. The small root system usually does well in a modest pot with an airy mix.'],
        ],
    },
    {
        slug: 'potted-birds-nest-fern', tab: 'potted', title: 'Potted Bird’s Nest Fern', label: 'Aspleniaceae',
        imageLink: '/shop-plants/image-9.png',
        description: 'A fern with arching leaves for a warm spot with soft light.',
        details: [
            ['Choose a sheltered location', 'Keep the fern in indirect light and away from cold drafts or hot radiators. Give the young fronds room to unfurl around the growing centre.'],
            ['Water around the edge', 'Keep the potting mix lightly moist and allow excess water to drain. Pour water onto the mix around the plant so it does not collect in the central crown.'],
        ],
    },
    {
        slug: 'potted-majesty-palm', tab: 'potted', title: 'Potted Majesty Palm', label: 'Arecaceae',
        imageLink: '/shop-plants/image-10.png',
        description: 'A tall indoor palm for a bright room with room to spread.',
        details: [
            ['Give fronds space', 'Place the palm near a bright window and leave space for the leaves to arch. Warmth and steady humidity suit it, especially away from heating vents.'],
            ['Use consistent moisture', 'Water when the surface begins drying and let water pass through the pot. Check the lower fronds occasionally for pests, especially in dry indoor air.'],
        ],
    },
];

export const newPlants = [
    {
        slug: 'peperomia', title: 'Peperomia Plants', price: '122,056$',
        description: 'Compact foliage for bright, filtered light.',
        imageLink: '/shop-plants/image-8.png',
        details: peoplePlants.find((plant) => plant.slug === 'potted-peperomia')!.details,
    },
    {
        slug: 'fiddle-leaf-fig', title: 'Fiddle-Leaf Fig', price: '162,056$',
        description: 'Large, upright leaves for a bright room.',
        imageLink: '/plantsForPeople2.jpg',
        details: [
            ['Light and placement', 'Set the fig near a bright window where it can receive consistent light. Leave room around the plant for its broad leaves and keep it clear of cold drafts.'],
            ['Water according to the soil', 'Let the top layer of the mix dry before watering thoroughly. Use a container with drainage and wipe dust from the leaves with a soft, damp cloth.'],
        ],
    },
    {
        slug: 'calathea-orbifolia', title: 'Calathea Orbifolia', price: '102,056$',
        description: 'Round leaves with silver-green stripes.',
        imageLink: '/closeup-vibrant-green-calathea-leaves-with-natural-light-patterns.jpg',
        details: [
            ['Light and humidity', 'Give the plant bright, indirect light and steady warmth. Keep its broad leaves out of hot direct sun and away from dry air blowing from a vent.'],
            ['Keep moisture steady', 'Use an airy mix and water when the surface begins to dry. Let the pot drain fully. If mineral deposits build up, consider watering with filtered water.'],
        ],
    },
] satisfies (PlantGuide & { price: string })[];

export const indoorCollection: PlantGuide[] = [
    {
        slug: 'philodendron', title: 'Philodendron',
        description: 'Climbing or upright foliage for bright, indirect light.',
        imageLink: '/plantsForPeople1.jpg',
        details: [
            ['Choose a form for your space', 'Trailing philodendrons can grow on a shelf or climb a support. Upright forms work as individual floor or tabletop plants. Leave room for mature leaves to expand.'],
            ['Care for the roots', 'Use a loose potting mix and water when the top layer has dried. For a climbing plant, add a stable support before the stems grow too long to guide easily.'],
        ],
    },
    {
        slug: 'calathea', title: 'Calathea',
        description: 'Patterned tropical leaves for a warm, softly lit space.',
        imageLink: '/closeup-vibrant-green-calathea-leaves-with-natural-light-patterns.jpg',
        details: [
            ['Pick a sheltered spot', 'Place calatheas in bright filtered light, away from midday sun, radiators and cold drafts. They are especially suited to a room with steady warmth and humidity.'],
            ['Check moisture regularly', 'Keep the mix lightly moist while the plant is growing and empty the saucer after watering. If the leaves curl, check soil moisture and the surrounding air before changing the routine.'],
        ],
    },
    {
        slug: 'air-purifying', title: 'Air Purifying',
        description: 'Explore hardy foliage plants such as the upright snake plant.',
        imageLink: '/plantsForPeople2.jpg',
        details: [
            ['Choose for the room', 'Snake plants have upright leaves and fit in narrow spaces. They grow best in bright indirect light and can tolerate a less bright location, where they generally grow more slowly.'],
            ['Set expectations for indoor air', 'Houseplants contribute greenery to a room. Ventilation and controlling pollutant sources are the practical ways to improve indoor air quality. Water snake plants after the potting mix dries.'],
        ],
    },
    {
        slug: 'low-light-tolerant', title: 'Low Light Tolerant',
        description: 'Find foliage plants for rooms with modest natural light.',
        imageLink: '/plantsForPeople3.jpg',
        details: [
            ['Start with a suitable plant', 'ZZ plants, cast-iron plants and some snake plants tolerate dimmer rooms. Choose a location with some daylight. For corners with very little natural light, consider a dedicated grow light.'],
            ['Adjust watering to growth', 'Pots often dry more slowly in lower light. Check the mix before watering and watch new growth to judge whether the plant would benefit from a brighter spot.'],
        ],
    },
];

export function plantGuideLink(slug: string) {
    return '/plant-guides/' + slug;
}
