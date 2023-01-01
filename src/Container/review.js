import { Button } from "../Components/Button";

const Review = ({ review, onDelete }) => {
    return (
        <div className="review">
            <h3>
                Title: {review.title} <br />
                Rating: {review.rating} <br />
                Description: {review.description}

                <Button color="green" text="Delete" onClick={() => onDelete(review.id)} />
            </h3>
        </div>
    );
};
export default Review;
