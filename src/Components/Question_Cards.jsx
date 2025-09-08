// React hooks
import { useState, useCallback, useMemo, memo } from "react";

// Components
import AddCardForm from "./AddCardForm.jsx";
import CardList from "./CardList.jsx";

// Styles
import "./Card.css";

// Dependencies
import { motion } from "framer-motion";

// Utils
import { AddFlashcardbuttonVariants } from "../utils/Animations_Variants.js";
import { announceToScreenReader } from "./ScreenReaderAnnouncements.jsx";

// Initial question data
const questions = [
	{ q: "What language is React based on?", a: "JavaScript" },
	{ q: "What are the building blocks of React apps?", a: "Components" },
	{
		q: "What is the name of the syntax we use to describe a UI in React?",
		a: "JSX",
	},
	{ q: "How to give components memory?", a: "State" },
	{
		q: "What do we call an input element that is completely synchronous with state?",
		a: "State",
	},
	{
		q: "What is lazy loading?",
		a: "Lazy loading defers loading images or resources until they are needed, improving performance.",
	},
	{
		q: "What is event delegation?",
		a: "A technique where a parent element handles events for its children using event bubbling.",
	},
	{ q: "How to pass data from parent to child components?", a: "Props" },
];

const QuestionCards = ({ shouldAnimate = true }) => {
	// State management
	const [cards, setCards] = useState(questions);
	const [activeCardIndex, setActiveCardIndex] = useState([]);
	const [addNewCard, setAddNewCard] = useState(false);

	// Event handlers
	const handleClicks = useCallback(
		(index) => {
			// Toggle card flip state
			setActiveCardIndex((prev) => {
				const newActiveCards = prev.includes(index)
					? prev.filter((i) => i !== index)
					: [...prev, index];

				// Announce to screen readers
				const card = cards[index];
				const isNowActive = newActiveCards.includes(index);
				announceToScreenReader(
					`Card ${index + 1}: ${
						isNowActive ? "Answer revealed" : "Question shown"
					}. ${isNowActive ? card.a : card.q}`
				);

				return newActiveCards;
			});
		},
		[cards]
	);

	const addCard = useCallback((question, answer) => {
		// Add new flashcard
		setCards((prev) => [...prev, { q: question, a: answer }]);
		setAddNewCard(false);
		announceToScreenReader(`New flashcard added: ${question}`);
	}, []);

	const deleteCard = useCallback(
		(index) => {
			// Delete flashcard
			const cardToDelete = cards[index];
			setCards((prev) => prev.filter((_, i) => i !== index));
			announceToScreenReader(`Flashcard deleted: ${cardToDelete.q}`);
		},
		[cards]
	);

	const editCard = useCallback(
		(index) => {
			// Edit flashcard using prompts
			const updatedQuestion = prompt(
				"Edit the question:",
				cards[index].q
			);
			const updatedAnswer = prompt("Edit the answer:", cards[index].a);
			if (updatedQuestion !== null && updatedAnswer !== null) {
				setCards((prev) =>
					prev.map((card, i) =>
						i === index
							? { q: updatedQuestion, a: updatedAnswer }
							: card
					)
				);
				announceToScreenReader(`Flashcard edited: ${updatedQuestion}`);
			}
		},
		[cards]
	);

	const handleAddButtonClick = useCallback(() => {
		setAddNewCard(true);
	}, []);

	const handleCloseForm = useCallback(() => {
		setAddNewCard(false);
	}, []);

	// Memoized props for CardList
	const cardListProps = useMemo(
		() => ({
			cards,
			activeCardIndex,
			onCardClick: handleClicks,
			onEdit: editCard,
			onDelete: deleteCard,
			shouldAnimate: true,
		}),
		[cards, activeCardIndex, handleClicks, editCard, deleteCard]
	);

	return (
		<div className="question-cards p-4">
			{!addNewCard && (
				<motion.button
					type="button"
					className="add-flashcard-btn mx-auto d-block"
					onClick={handleAddButtonClick}
					aria-label="Add new flashcard"
					variants={AddFlashcardbuttonVariants}
					initial={shouldAnimate ? "initial" : false}
					animate={shouldAnimate ? "animate" : false}
					exit="exit"
					key={"AddFlashcardbutton"}
				>
					<span style={{ marginRight: "8px" }}>+</span>
					Add New FlashCard
				</motion.button>
			)}
			{addNewCard && (
				<AddCardForm onAddCard={addCard} onClose={handleCloseForm} />
			)}
			<section aria-label="Flashcard collection">
				<CardList {...cardListProps} shouldAnimate={shouldAnimate} />
			</section>
		</div>
	);
};

// Memoize the QuestionCards component to prevent unnecessary re-renders
export default memo(QuestionCards);
