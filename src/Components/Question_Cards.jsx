import { useState, useCallback } from "react";
import AddCardForm from "./AddCardForm.jsx";
import CardList from "./CardList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import {motion} from "framer-motion";
import { AddFlashcardbuttonVariants } from "../utils/Animations_Variants.js";

// Question data
const questions = [
    { q: "What language is React based on?", a: "JavaScript" },
    { q: "What are the building blocks of React apps?", a: "Components" },
    { q: "What is the name of the syntax we use to describe a UI in React?", a: "JSX" },
    { q: "How to give components memory?", a: "State" },
    { q: "What do we call an input element that is completely synchronous with state?", a: "State" },
    { q: "What is lazy loading?", a: "Lazy loading defers loading images or resources until they are needed, improving performance." },
    { q: "What is event delegation?", a: "A technique where a parent element handles events for its children using event bubbling." },
    { q: "How to pass data from parent to child components?", a: "Props" }
];

const QuestionCards = () => {
    const [cards, setCards] = useState(questions);
    const [activeCardIndex, setActiveCardIndex] = useState([]);
    const [addNewCard, setAddNewCard] = useState(false);

    // Toggle active card index to show/hide answer
    const handleClicks = useCallback((index) => {
        setActiveCardIndex((prev) => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
    }, []);

    // Add a new flashcard
    const addCard = useCallback((question, answer) => {
        setCards(prev => [...prev, { q: question, a: answer }]);
        setAddNewCard(false);
    }, []);

    // Delete a flashcard
    const deleteCard = useCallback((index) => {
        setCards(prev => prev.filter((_, i) => i !== index));
    }, []);

    // Edit a flashcard
    const editCard = useCallback((index) => {
        const updatedQuestion = prompt("Edit the question:", cards[index].q);
        const updatedAnswer = prompt("Edit the answer:", cards[index].a);
        if (updatedQuestion !== null && updatedAnswer !== null) {
            setCards(prev => prev.map((card, i) => i === index ? { q: updatedQuestion, a: updatedAnswer } : card));
        }
    }, [cards]);

    return (
        <div className="question-cards p-4" role="main">
            {!addNewCard && (
                <motion.button
                    type="button"
                    className="btn btn-primary mx-auto d-block p-3 py-2"
                    onClick={() => setAddNewCard(true)}
                    aria-label="Add new flashcard"
                    variants={AddFlashcardbuttonVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={"AddFlashcardbutton"}
                >
                    Add New FlashCard
                </motion.button>
            )}
            {addNewCard && <AddCardForm onAddCard={addCard} onClose={() => setAddNewCard(false)} />}
            <CardList cards={cards} activeCardIndex={activeCardIndex} onCardClick={handleClicks} onEdit={editCard} onDelete={deleteCard} />
        </div>
    );
};

export default QuestionCards;
