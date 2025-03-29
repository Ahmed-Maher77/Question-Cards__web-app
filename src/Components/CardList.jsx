import { cardVariants } from "../utils/Animations_Variants.js";
import Card from "./Card.jsx";
import { AnimatePresence, motion } from "framer-motion";

const CardList = ({ cards, activeCardIndex, onCardClick, onEdit, onDelete }) => {
    return (
        <div className="pt-4 text-center">
            <div className="row row-gap-3 justify-content-center">
                <AnimatePresence>
                    {cards.map((obj, index) => (
                        <motion.div key={obj.q || index} className="position-relative card-container col-12 col-md-6 col-lg-4" style={{ minHeight: "200px", maxWidth: "480px" }} 
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit">
                            <Card question={obj.q} answer={obj.a} isActive={activeCardIndex.includes(index)} onClick={() => onCardClick(index)} />
                            <div className="card-actions d-flex gap-1 mt-2 position-absolute top-0" style={{ right: "20px" }}>
                                <button className="btn p-0 btn-sm" onClick={() => onEdit(index)} aria-label={`Edit card ${index + 1}`}>
                                    ✏
                                </button>
                                <button className="btn p-0 btn-sm" onClick={() => onDelete(index)} aria-label={`Delete card ${index + 1}`}>
                                    ❌
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CardList;
