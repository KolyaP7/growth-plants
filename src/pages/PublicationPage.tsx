import { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import { blogPublications } from '../data/blogPublications.ts';
import { encyclopediaArticles } from '../data/encyclopediaArticles.ts';

export default function PublicationPage({ encyclopedia = false }) {
    const { slug } = useParams();
    const publications = encyclopedia ? encyclopediaArticles : blogPublications;
    const publication = publications.find((entry) => entry.slug === slug);
    const backLink = encyclopedia ? '/encyclopedia/articles' : '/blog';
    const backLabel = encyclopedia ? 'Back to encyclopedia articles' : 'Back to blog';
    const title = publication?.title ?? 'Publication not found';

    useEffect(() => {
        window.scrollTo(0, 0);
        const previousTitle = document.title;
        document.title = title;
        return () => {
            document.title = previousTitle;
        };
    }, [slug, title]);

    return (
        <>
            <main className="container py-5">
                <div className="mx-auto" style={{ maxWidth: '46rem' }}>
                    <Link className="btn btn-outline-success mb-4" to={backLink}>
                        ← {backLabel}
                    </Link>
                    {publication ? (
                        <article>
                            <header className="position-static mb-4">
                                <h1 className="display-5 fw-semibold">{publication.title}</h1>
                                <div className="text-secondary">
                                    {[
                                        'author' in publication ? publication.author : publication.category,
                                        publication.date,
                                    ].filter(Boolean).join(' · ')}
                                </div>
                            </header>
                            <img
                                className="w-100 rounded mb-4 object-fit-cover"
                                style={{ maxHeight: '26rem' }}
                                src={publication.imageLink}
                                alt=""
                            />
                            {'description' in publication && (
                                <div className="lead mb-4">{publication.description}</div>
                            )}
                            {publication.body.map(([heading, paragraph]) => (
                                <section className="mb-4" key={heading}>
                                    <h2 className="h4">{heading}</h2>
                                    <p className="lh-lg">{paragraph}</p>
                                </section>
                            ))}
                        </article>
                    ) : <h1>{title}</h1>}
                </div>
            </main>
            <FooterSectionVer2 />
        </>
    );
}
