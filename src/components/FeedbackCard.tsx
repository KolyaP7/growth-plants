import './FeedbackCard.css';

interface feedbackCardProps {
    authorName: string,
    authorAvatarLink: string,
    region: string,
    feedback: string,
    date: string
}

export default function FeedbackCard({authorName, authorAvatarLink, region, feedback, date} : feedbackCardProps){
    return (
        <div className="feedback-card-container">
            <div className="feedback-card__author">
                <div className="feedback-card__avatar-container">
                    <img className="feedback-card__avatar-image" src={authorAvatarLink}></img>
                </div>
                <div className="feedback-card__author-information">
                    <h6 className="feedback-card__author-name">{authorName}</h6>
                    <p className="feedback-card__author-region">{region}</p>
                </div>
            </div>
            <p className="feedback-card__text">{feedback}</p>
            <p className="feedback-card__date">{date}</p>
        </div>
    );
}