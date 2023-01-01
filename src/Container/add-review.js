import { useState } from "react";
import { CustomTextBox } from "../Components/TextBox";


const AddReview = ({ onAdd, onReset }) => {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Please enter data");
            return;
        }
        onAdd({ title, rating, description });
        setTitle("");
        setRating("");
        setDescription("")
    };

    const resetClick = () => {
        setTitle("");
        setRating("");
        setDescription("")
        onReset()
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <CustomTextBox type="text" placeHolder="Name" value={title} valueChange={(e) => setTitle(e.target.value)} title="Title" required={true} />

                <CustomTextBox type="number" placeHolder="Rating.." value={rating} valueChange={(e) => setRating(e.target.value)} title="Rating" required={true} />

                <label> Description</label>
                <textarea
                    className="description"
                    type="text"
                    placeholder="Description.."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}

                />

            </div>
            <CustomTextBox type="submit" value="Save review" className="btn btn-block" />

            <CustomTextBox type="button" value="Reset form" className="btn btn-block" onClick={resetClick} />

        </form>
    );
};

export default AddReview;
