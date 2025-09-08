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
									className="btn p-0 btn-sm edit-card-btn"
									style={{
										minWidth: "25px",
										minHeight: "30px",
									}}
									onClick={() => onEdit(index)}
									aria-label={`Edit card ${index + 1}: ${
										obj.q
									}`}
									title="Edit this flashcard"
								>
									<svg
										aria-hidden="true"
										width="19"
										height="19"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
										<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
									</svg>
									<span className="visually-hidden">
										Edit
									</span>
								</button>
								<button
									className="btn p-0 btn-sm delete-card-btn"
									style={{
										minWidth: "25px",
										minHeight: "30px",
									}}
									onClick={() => onDelete(index)}
									aria-label={`Delete card ${index + 1}: ${
										obj.q
									}`}
									title="Delete this flashcard"
								>
									<svg
										aria-hidden="true"
										width="19"
										height="19"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<polyline points="3,6 5,6 21,6" />
										<path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2" />
										<line x1="10" y1="11" x2="10" y2="17" />
										<line x1="14" y1="11" x2="14" y2="17" />
									</svg>
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
