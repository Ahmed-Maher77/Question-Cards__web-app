import PropTypes from "prop-types";
// import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ question, answer, isActive, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={`card rounded ${isActive ? "active" : ""}`}
			role="button"
			
		>
			<div className="front d-flex justify-content-center align-items-center p-3">
				<p className="m-0">{answer}</p>
			</div>
			<div className="back d-flex justify-content-center align-items-center p-3">
				{question}
			</div>
		</div>
	);
};

// Define prop types for the Card component
Card.propTypes = {
	question: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};
export default Card;
