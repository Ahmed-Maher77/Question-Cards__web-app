// React hooks
import { useState, useRef, useEffect, useCallback, memo } from "react";

const AddCardForm = ({ onAddCard, onClose }) => {
	// State management
	const [newQuestion, setNewQuestion] = useState("");
	const [newAnswer, setNewAnswer] = useState("");
	const [errors, setErrors] = useState({});
	const questionRef = useRef(null);

	// Effects
	useEffect(() => {
		// Auto-focus first input when form opens
		if (questionRef.current) {
			questionRef.current.focus();
		}
	}, []);

	// Event handlers
	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault();
			const newErrors = {};

			// Form validation
			if (!newQuestion.trim()) {
				newErrors.question = "Question is required";
			}
			if (!newAnswer.trim()) {
				newErrors.answer = "Answer is required";
			}

			// Submit if valid
			if (Object.keys(newErrors).length === 0) {
				onAddCard(newQuestion, newAnswer);
				setNewQuestion("");
				setNewAnswer("");
				setErrors({});
			} else {
				setErrors(newErrors);
			}
		},
		[newQuestion, newAnswer, onAddCard]
	);

	const handleKeyDown = useCallback(
		(e) => {
			// Close form on Escape key
			if (e.key === "Escape") {
				onClose();
			}
		},
		[onClose]
	);

	const handleClose = useCallback(() => {
		onClose();
	}, [onClose]);

	return (
		<div
			className="add-card-form rounded text-center mt-3"
			role="dialog"
			aria-labelledby="add-card-title"
			aria-describedby="add-card-description"
			onKeyDown={handleKeyDown}
		>
			<h3 id="add-card-title" className="visually-hidden">
				Add New Flashcard
			</h3>
			<p id="add-card-description" className="visually-hidden">
				Fill in the question and answer fields to create a new
				flashcard. Press Escape to close this form.
			</p>

			<button
				className="btn d-block ms-auto"
				style={{ marginRight: "-12px" }}
				onClick={handleClose}
				aria-label="Close add card form"
				type="button"
			>
				✖
			</button>

			<form onSubmit={handleSubmit} noValidate>
				<div className="mb-3">
					<label
						htmlFor="question-input"
						className="form-label visually-hidden"
					>
						Question
					</label>
					<input
						ref={questionRef}
						id="question-input"
						type="text"
						className={`form-control p-2 ${
							errors.question ? "is-invalid" : ""
						}`}
						placeholder="Enter question"
						value={newQuestion}
						onChange={(e) => {
							setNewQuestion(e.target.value);
							if (errors.question) {
								setErrors((prev) => ({
									...prev,
									question: "",
								}));
							}
						}}
						aria-label="Enter question"
						aria-describedby={
							errors.question ? "question-error" : undefined
						}
						aria-invalid={errors.question ? "true" : "false"}
						required
					/>
					{errors.question && (
						<div
							id="question-error"
							className="invalid-feedback"
							role="alert"
						>
							{errors.question}
						</div>
					)}
				</div>

				<div className="mb-3">
					<label
						htmlFor="answer-input"
						className="form-label visually-hidden"
					>
						Answer
					</label>
					<input
						id="answer-input"
						type="text"
						className={`form-control p-2 ${
							errors.answer ? "is-invalid" : ""
						}`}
						placeholder="Enter answer"
						value={newAnswer}
						onChange={(e) => {
							setNewAnswer(e.target.value);
							if (errors.answer) {
								setErrors((prev) => ({ ...prev, answer: "" }));
							}
						}}
						aria-label="Enter answer"
						aria-describedby={
							errors.answer ? "answer-error" : undefined
						}
						aria-invalid={errors.answer ? "true" : "false"}
						required
					/>
					{errors.answer && (
						<div
							id="answer-error"
							className="invalid-feedback"
							role="alert"
						>
							{errors.answer}
						</div>
					)}
				</div>

				<button
					className="btn btn-primary"
					type="submit"
					aria-label="Submit new flashcard"
				>
					Add Card
				</button>
			</form>
		</div>
	);
};

// Memoize the AddCardForm component to prevent unnecessary re-renders
export default memo(AddCardForm);
