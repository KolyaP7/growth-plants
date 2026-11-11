import { useState } from 'react';
import HeaderWrapper from '../components/HeaderWrapper.tsx';
import EncyclopediaHeader from '../components/EncyclopediaHeader.tsx';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import '../fonts.css';
import './EncyclopediaPage.bootstrap.css'
// Подключи Bootstrap CSS один раз в точке входа приложения:
// Vite: import 'bootstrap/dist/css/bootstrap.min.css' в main.tsx
// Next.js: import 'bootstrap/dist/css/bootstrap.min.css' в app/layout.tsx

const tabs = [
  { title: 'Systematics', link: '/encyclopedia/taxonomy' },
  { title: 'Morphology', link: '/encyclopedia/morphology' },
  { title: 'Range and ecology', link: '/encyclopedia/range-and-ecology' },
  { title: 'Developmental biology', link: '/encyclopedia/developmental-biology' },
  { title: 'Economic importance', link: '/encyclopedia/economic-importance' },
  { title: 'Conservation and status', link: '/encyclopedia/conservation-and-status' },
  { title: 'Gallery', link: '/encyclopedia/gallery' },
  { title: 'Literature and sources', link: '/encyclopedia/literature-and-sources' },
];

const overviewCards = [
  {
    image: '/encyclopedia-icon-1.png',
    title: 'Knowledge Base',
    text: 'Structured glossary of botanical terms and concepts',
  },
  {
    image: '/encyclopedia-icon-3.png',
    title: 'Plant MindMap',
    text: 'Interactive map of relationships between taxonomic groups and ecological niches',
  },
  {
    image: '/encyclopedia-icon-2.png',
    title: 'Community',
    text: 'Stories, interviews, and experience of botanists, gardeners, and phytotherapists',
  },
];

const categories = [
  {
    image: '/plant_encyclopedia_icons_png/01_plant_encyclopedia.png',
    title: 'The Plant World',
    text: 'Diversity of the plant world, classification, families, and main characteristics of plants.',
    amount: '1240',
  },
  {
    image: '/plant_encyclopedia_icons_png/02_plant_classification.png',
    title: 'Flowers and ornamental plants',
    text: 'Encyclopedia of flowers, ornamental crops, their species, features, and growing conditions.',
    amount: '356',
  },
  {
    image: '/plant_encyclopedia_icons_png/03_botany_glossary.png',
    title: 'Trees and shrubs',
    text: 'Species of trees and shrubs, structure, distribution, properties, and ecological role.',
    amount: '298',
  },
  {
    image: '/plant_encyclopedia_icons_png/04_plant_identifier.png',
    title: 'Growing and care',
    text: 'Practical recommendations on planting, watering, transplanting, fertilizing, and plant care.',
    amount: '982',
  },
  {
    image: '/plant_encyclopedia_icons_png/05_plant_care.png',
    title: 'Botany and research',
    text: 'Scientific information about plant structure, photosynthesis, reproduction, and life cycles.',
    amount: '174',
  },
  {
    image: '/plant_encyclopedia_icons_png/06_plant_habitats.png',
    title: 'Medicinal and useful plants',
    text: 'Properties, uses, composition, and characteristics of medicinal, food, and useful plants.',
    amount: '487',
  },
];

const articles = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: 'Photosynthesis: how plants turn light into life',
  description:
    'How the process of photosynthesis works, why it underlies almost all life on Earth, and what modern research helps us better understand its mechanisms.',
  tags: ['#Photosynthesis', '#Chlorophyll', '#Plants'],
  readTime: '9 min',
  date: 'Oct 30',
  image: '/plantsForPeople3.jpg',
  category: 'Physiology',
}));

const articleFilters = [
  'All',
  'Systematics',
  'Morphology',
  'Physiology',
  'Ecology',
  'Reproduction',
  'Application',
];

function AmountCard({ amount, title }: { amount: number; title: string }) {
  return (
    <div className="col-4">
      <div className="h-100 rounded-3 border bg-white p-3 text-center shadow-sm">
        <div className="fs-3 fw-bold text-success">{amount}+</div>
        <div className="small text-secondary">{title}</div>
      </div>
    </div>
  );
}

export default function EncyclopediaPage() {
  const [isFocused, setIsFocused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const visibleArticles = articles.filter((article) => {
    const matchesFilter =
      activeFilter === 'All' || article.category === activeFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <EncyclopediaHeader
        tabTitles={tabs.map((tab) => tab.title)}
        tabLinks={tabs.map((tab) => tab.link)}
      />

      <main className="bg-white text-dark">
        {/* Hero */}
        <section className="bg-light border-bottom py-5">
          <div className="container py-lg-4">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-9 col-xl-8">
                <div className="mb-3">
                  <span className="badge rounded-pill bg-success-subtle text-success border border-success-subtle px-3 py-2 fw-normal">
                    Educational and research center of botany
                  </span>
                </div>

                <h1 className="display-5 fw-bold text-success mb-3">
                  Encyclopedia of plants and flora
                </h1>

                <p className="lead text-secondary mb-4">
                  Depth of the academic approach with accessibility for a wide
                  audience. Explore plant species, agricultural techniques,
                  applications in medicine and design, as well as fundamental
                  concepts of botany.
                </p>

                <form
                  className={`input-group input-group-lg shadow-sm rounded-3 mb-4 ${
                    isFocused ? 'border border-2 border-success' : ''
                  }`}
                  onSubmit={(event) => event.preventDefault()}
                >
                  <span className="input-group-text bg-white border-0 text-secondary">
                    ⌕
                  </span>
                  <input
                    type="search"
                    className="form-control border-0 shadow-none"
                    placeholder="Find articles, terms, tools..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    aria-label="Search encyclopedia"
                  />
                  <button className="btn btn-success px-4" type="submit">
                    Search <span className="ms-2">→</span>
                  </button>
                </form>

                <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mb-5">
                  <a className="btn btn-success btn-lg px-4" href="#categories">
                    Start with basic concepts
                  </a>
                  <a
                    className="btn btn-outline-success btn-lg px-4"
                    href="#categories"
                  >
                    Study plant families
                  </a>
                </div>

                <div className="row g-3">
                  <AmountCard amount={500} title="Articles" />
                  <AmountCard amount={200} title="Terms" />
                  <AmountCard amount={100} title="Tools" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the encyclopedia */}
        <section className="py-5">
          <div className="container py-lg-4">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-12 col-lg-9">
                <span className="badge rounded-pill bg-success-subtle text-success border border-success-subtle px-3 py-2 mb-3 fw-normal">
                  About the project
                </span>
                <h2 className="fw-bold mb-3">What is the Encyclopedia of Plants</h2>
                <p className="text-secondary mb-0">
                  This is an educational and research platform that combines a
                  blog, a knowledge base, and an encyclopedia of botany and
                  plant growing. We structure information about plant species,
                  agricultural techniques, applications in medicine, design,
                  and cooking, and also provide access to in-depth knowledge
                  through interactive materials, a glossary of terms, and
                  visual diagrams of life cycles and morphology.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {overviewCards.map((card) => (
                <div className="col-12 col-md-6 col-lg-4" key={card.title}>
                  <div className="card h-100 border-0 shadow-sm text-center p-3">
                    <div className="card-body">
                      <img
                        src={card.image}
                        alt=""
                        className="img-fluid mb-3"
                        style={{ width: 76, height: 76, objectFit: 'contain' }}
                      />
                      <h3 className="h5 fw-semibold">{card.title}</h3>
                      <p className="text-secondary mb-0">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="bg-light py-5">
          <div className="container">
            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mb-4">
              <div>
                <h2 className="fw-bold mb-1">Explore categories</h2>
                <p className="text-secondary mb-0">
                  Dive into various aspects of botany
                </p>
              </div>
              <a href="/encyclopedia/categories" className="btn btn-outline-success">
                All categories
              </a>
            </div>

            <div className="row g-4">
              {categories.map((category) => (
                <div className="col-12 col-md-6 col-lg-4" key={category.title}>
                  <article className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <img
                        src={category.image}
                        alt=""
                        className="img-fluid mb-3"
                        style={{ width: 72, height: 72, objectFit: 'contain' }}
                      />
                      <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                        <h3 className="h5 fw-semibold mb-0">{category.title}</h3>
                        <span className="badge bg-success-subtle text-success">
                          {category.amount}
                        </span>
                      </div>
                      <p className="text-secondary mb-0">{category.text}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest articles */}
        <section className="py-5">
          <div className="container">
            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mb-4">
              <div>
                <h2 className="fw-bold mb-1">Latest articles</h2>
                <p className="text-secondary mb-0">
                  Current materials and research in the field of botany
                </p>
              </div>
              <a href="/encyclopedia/articles" className="btn btn-outline-success">
                All articles
              </a>
            </div>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {articleFilters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`btn btn-sm rounded-pill ${
                    activeFilter === filter
                      ? 'btn-success'
                      : 'btn-outline-secondary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="row g-4">
              {visibleArticles.map((article) => (
                <div className="col-12 col-md-6 col-lg-4" key={article.id}>
                  <article className="card h-100 border-0 shadow-sm overflow-hidden">
                    <img
                      src={article.image}
                      className="card-img-top"
                      alt="Green plants"
                      style={{ height: 210, objectFit: 'cover' }}
                    />
                    <div className="card-body d-flex flex-column p-4">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span className="badge bg-success-subtle text-success">
                          {article.category}
                        </span>
                        <span className="small text-secondary">
                          {article.date}
                        </span>
                        <span className="small text-secondary">
                          {article.readTime} read
                        </span>
                      </div>

                      <h3 className="h5 fw-semibold">{article.title}</h3>
                      <p className="text-secondary">{article.description}</p>

                      <div className="d-flex flex-wrap gap-2 mt-auto">
                        {article.tags.map((tag) => (
                          <span
                            className="small text-success"
                            key={`${article.id}-${tag}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {visibleArticles.length === 0 && (
              <p className="text-center text-secondary py-5 mb-0">
                No articles found.
              </p>
            )}

            <div className="text-center mt-4">
              <a
                href="/encyclopedia/articles"
                className="btn btn-success btn-lg px-5"
              >
                Show more articles
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSectionVer2 />
    </>
  );
}
