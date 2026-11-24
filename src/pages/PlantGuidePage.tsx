import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import { indoorCollection, newPlants, peoplePlants, plantTabs } from '../data/homePlants.ts';

export default function PlantGuidePage() {
    const { slug } = useParams();
    const { state } = useLocation();
    const collectionPlant = peoplePlants.find((entry) => entry.slug === slug);
    const newPlant = newPlants.find((entry) => entry.slug === slug);
    const plant = collectionPlant ?? newPlant ?? indoorCollection.find((entry) => entry.slug === slug);
    const selectedTab = plantTabs.find((tab) => tab.id === state?.selectedTab)?.id ?? collectionPlant?.tab;
    const backLink = collectionPlant
        ? `/?plants=${selectedTab}#plants-for-people`
        : newPlant ? '/#new-plants' : plant ? '/#indoor-collection' : '/';
    const title = plant?.title ?? 'Plant guide not found';

    useEffect(() => {
        window.scrollTo(0, 0);
        const previousTitle = document.title;
        document.title = title;
        return () => {
            document.title = previousTitle;
        };
    }, [title]);

    return (
        <>
            <main className="container py-5">
                <div className="mx-auto" style={{ maxWidth: '46rem' }}>
                    <Link className="btn btn-outline-success mb-4" to={backLink}>← Back to home</Link>
                    {plant ? (
                        <article>
                            <h1 className="display-5 fw-semibold">{plant.title}</h1>
                            <div className="lead mb-3">{plant.description}</div>
                            {newPlant && <div className="fw-semibold mb-3">{newPlant.price}</div>}
                            <img
                                className="w-100 rounded mb-4 object-fit-cover"
                                style={{ maxHeight: '26rem' }}
                                src={plant.imageLink}
                                alt=""
                            />
                            {plant.details.map(([heading, text]) => (
                                <section key={heading} className="mb-4">
                                    <h2 className="h4">{heading}</h2>
                                    <p className="lh-lg">{text}</p>
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
