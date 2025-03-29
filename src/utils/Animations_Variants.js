// =========================== Card.jsx ===========================
export const cardVariants = {
	initial: { opacity: 0, y: 100, transition: { duration: 1 } },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 1, when: "beforeChildren" },
	},
	exit: { opacity: 0, y: -100, transition: { duration: 1 } },
};

export const cardContentVariants = {
	hidden: {
		opacity: 0,
		y: 50,
		transition: { duration: 0.8 },
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut", when: "beforeChildren" },
	},
};


// =========================== Question_Cards.jsx ===========================
export const AddFlashcardbuttonVariants = {
    initial: { opacity: 0, scale: 0.7, transition: { duration: 0.9 } }, animate: { opacity: 1, scale: 1, transition: { duration: 0.9, when: "beforeChildren" },}, exit: { opacity: 0, scale: 1.05 },
}

// =========================== Header.jsx ===========================
export const mainHeaderVariants = {
    initial: { opacity: 0, y: -100, transition: { duration: 0.7 } }, animate: { opacity: 1, y: 0, transition: { duration: 0.9, when: "beforeChildren" },}, exit: { opacity: 0, y: 100, transition: { duration: 0.7 } },
}