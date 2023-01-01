
import { useState } from "react";
import { AddReview, Header, Reviews } from "./Container";


function App() {
    const [reviews, setReviews] = useState([]);

    const [showReview, setShowReview] = useState(false)

    //Add review
    const addReview = (review) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newReview = { id, ...review };
        setReviews([...reviews, newReview]);
    };

    //Delete review
    const deleteReview = (id) => {
        setReviews(reviews.filter((review) => review.id !== id));
    };

    //Reset form
    const resetHandler = () => {
        setReviews([])
    }

    //Toggle between form and review
    const showReviewHandler = () => {
        setShowReview(!showReview)
    }


    return (
        <div className="container">
            <Header show={showReviewHandler} shower={showReview} />

            {showReview ?
                reviews.length > 0 ? (
                    <Reviews reviews={reviews} onDelete={deleteReview} />
                ) : (
                    "No reviews to show"
                )
                : <AddReview onAdd={addReview} onReset={resetHandler} />
            }
        </div>
    );
}

export default App;
