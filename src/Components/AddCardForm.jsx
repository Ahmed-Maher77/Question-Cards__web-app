import { useState } from "react";

const AddCardForm = ({ onAddCard, onClose }) => {
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");

    const handleSubmit = () => {
        if (newQuestion.trim() && newAnswer.trim()) {
            onAddCard(newQuestion, newAnswer);
            setNewQuestion("");
            setNewAnswer("");
        }
    };

    return (
        <div className="add-card-form rounded text-center mt-3">
            <button className="btn d-block ms-auto" style={{ marginRight: "-12px" }} onClick={onClose} aria-label="Close form">
                ✖
            </button>
            <input
                type="text"
                className="form-control mb-3 p-2"
                placeholder="Enter question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                aria-label="Enter question"
            />
            <input
                type="text"
                className="form-control mb-3 p-2"
                placeholder="Enter answer"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                aria-label="Enter answer"
            />
            <button className="btn btn-primary" onClick={handleSubmit} aria-label="Submit new card">
                Add Card
            </button>
        </div>
    );
};

export default AddCardForm;
