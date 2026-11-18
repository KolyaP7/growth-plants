import FeedbackCard from './FeedbackCard.tsx';

// Bootstrap CSS и bootstrap.bundle.min.js подключаются один раз в main.tsx.
// Компонент использует существующий FeedbackCard и его стили.

const feedbackItems = [
  {
    authorName: 'ChiChi',
    authorAvatarLink: '/blog-avatar/06.png',
    region: 'South Africa',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et',
    date: '14.01.2026',
  },
  {
    authorName: 'ChiChi',
    authorAvatarLink: '/blog-avatar/07.png',
    region: 'South Africa',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et',
    date: '14.01.2026',
  },
  {
    authorName: 'ChiChi',
    authorAvatarLink: '/blog-avatar/08.png',
    region: 'South Africa',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et',
    date: '14.01.2026',
  },
];

export default function FeedbackCarousel() {
  return (
    <section className="contacts-page-feedback py-5" aria-label="Customer feedback">
      <div className="container">
        <div
          id="contactsFeedbackCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
          data-bs-touch="true"
          data-bs-pause="hover"
        >
          <div className="carousel-inner">
            {feedbackItems.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={`${item.authorAvatarLink}-${index}`}
              >
                <div className="row justify-content-center px-5 pb-4">
                  <div className="col-12 col-md-10 col-lg-8 d-flex justify-content-center">
                    <FeedbackCard
                      authorName={item.authorName}
                      authorAvatarLink={item.authorAvatarLink}
                      region={item.region}
                      feedback={item.feedback}
                      date={item.date}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#contactsFeedbackCarousel"
            data-bs-slide="prev"
            aria-label="Previous feedback"
            style={{ width: '8%' }}
          >
            <span className="bg-success rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#contactsFeedbackCarousel"
            data-bs-slide="next"
            aria-label="Next feedback"
            style={{ width: '8%' }}
          >
            <span className="bg-success rounded-circle p-2 d-inline-flex align-items-center justify-content-center">
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </span>
          </button>

          <div className="carousel-indicators position-relative mx-0 mb-0 mt-2">
            {feedbackItems.map((item, index) => (
              <button
                key={`indicator-${item.authorAvatarLink}`}
                type="button"
                data-bs-target="#contactsFeedbackCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active bg-success' : 'bg-success'}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Feedback ${index + 1}`}
                style={{ width: 24, height: 5, borderRadius: 4 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
