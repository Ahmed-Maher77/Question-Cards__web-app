// React hooks
import { useCallback, memo } from "react";

// Dependencies
import PropTypes from "prop-types";

const Card = ({ question, answer, isActive, onClick, index }) => {
	// Handle keyboard navigation
	const handleKeyDown = useCallback(
		(event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				onClick();
			}
		},
		[onClick]
	);

	return (
		<div
			onClick={onClick}
			onKeyDown={handleKeyDown}
			className={`card rounded ${isActive ? "active" : ""}`}
			role="button"
			tabIndex={0}
			aria-label={`Flashcard ${index + 1}: ${
				isActive ? "Answer" : "Question"
			}`}
			aria-describedby={`card-${index}-description`}
			aria-pressed={isActive}
		>
			<div className="front d-flex justify-content-center align-items-center p-3">
				<p className="m-0" id={`card-${index}-description`}>
					{isActive ? answer : question}
				</p>
			</div>
			<div
				className="back d-flex justify-content-center align-items-center p-3"
				aria-hidden="true"
			>
				{question}
			</div>
		</div>
	);
};

// Define prop types for the Card component
Card.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
};

// Memoize the Card component to prevent unnecessary re-renders
export default memo(Card);
