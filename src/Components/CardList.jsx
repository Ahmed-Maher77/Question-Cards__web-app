// React hooks
import { memo, useMemo } from "react";

// Dependencies
import { AnimatePresence, motion } from "framer-motion";

// Components
import Card from "./Card.jsx";

// Utils
import {
	cardVariants,
	cardVariantsReduced,
	containerVariants,
} from "../utils/Animations_Variants.js";
import { prefersReducedMotion } from "../utils/performance.js";

const CardList = ({
	cards,
	activeCardIndex,
	onCardClick,
	onEdit,
	onDelete,
	shouldAnimate = true,
}) => {
	// Choose animation variants based on user preference
	const animationVariants = useMemo(() => {
		return prefersReducedMotion() ? cardVariantsReduced : cardVariants;
	}, []);

	return (
		<div className="pt-4 text-center">
			<motion.div
				className="row row-gap-3 justify-content-center"
				role="grid"
				aria-label="Flashcard grid"
				variants={containerVariants}
				initial={shouldAnimate ? "hidden" : false}
				animate={shouldAnimate ? "visible" : false}
			>
				<AnimatePresence mode="popLayout">
					{cards.map((obj, index) => (
						<motion.div
							key={obj.q || index}
							className="position-relative card-container col-12 col-md-6 col-lg-4"
							style={{ minHeight: "200px", maxWidth: "480px" }}
							variants={animationVariants}
							initial={shouldAnimate ? "initial" : false}
							animate={shouldAnimate ? "animate" : false}
							exit="exit"
							layout
							role="gridcell"
						>
							<Card
								question={obj.q}
								answer={obj.a}
								isActive={activeCardIndex.includes(index)}
								onClick={() => onCardClick(index)}
								index={index}
							/>
							<div
								className="card-actions d-flex gap-1 mt-2 position-absolute top-0"
								style={{ right: "20px" }}
								role="toolbar"
								aria-label={`Actions for card ${index + 1}`}
							>
								<button
									className="btn p-0 btn-sm"
									onClick={() => onEdit(index)}
									aria-label={`Edit card ${index + 1}: ${
										obj.q
									}`}
									title="Edit this flashcard"
								>
									<span aria-hidden="true">✏</span>
									<span className="visually-hidden">
										Edit
									</span>
								</button>
								<button
									className="btn p-0 btn-sm"
									onClick={() => onDelete(index)}
									aria-label={`Delete card ${index + 1}: ${
										obj.q
									}`}
									title="Delete this flashcard"
								>
									<span aria-hidden="true">❌</span>
									<span className="visually-hidden">
										Delete
									</span>
								</button>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

// Memoize the CardList component to prevent unnecessary re-renders
export default memo(CardList);
