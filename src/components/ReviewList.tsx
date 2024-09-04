import React from "react";
import './ReviewList.css'; // Import the CSS file

interface Review {
    id: number,
    content: string,
    reviewer: string,
}

interface ReviewListProps {
    reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
    return (
        <div className="review-list">
            <h3 className="review-list-title">Reviews</h3>
            <ul className="review-list-items">
                {reviews.map((review) => (
                    <li key={review.id} className="review-item">
                        <p className="review-content">{review.content}</p>
                        <small className="reviewer">— {review.reviewer}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewList;