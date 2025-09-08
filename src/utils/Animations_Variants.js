/**
 * Animation variants for Framer Motion components
 * Organized by component for better maintainability
 */

// =========================== Card.jsx ===========================
export const cardVariants = {
	initial: {
		opacity: 0,
		y: 100,
		scale: 0.5,
		rotate: -10,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
	animate: {
		opacity: 1,
		y: 0,
		scale: 1,
		rotate: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
			when: "beforeChildren",
		},
	},
	exit: {
		opacity: 0,
		y: -30,
		scale: 0.9,
		transition: {
			duration: 0.4,
			ease: "easeIn",
		},
	},
};

// Performance-optimized card variants for reduced motion
export const cardVariantsReduced = {
	initial: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: "easeOut",
		},
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: "easeOut",
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: "easeIn",
		},
	},
};

// =========================== Question_Cards.jsx ===========================
export const AddFlashcardbuttonVariants = {
	initial: {
		opacity: 0,
		scale: 0.8,
		y: 20,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	animate: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
			when: "beforeChildren",
		},
	},
	exit: {
		opacity: 0,
		scale: 0.9,
		y: -10,
		transition: {
			duration: 0.3,
			ease: "easeIn",
		},
	},
};

// =========================== Header.jsx ===========================
export const mainHeaderVariants = {
	initial: {
		opacity: 0,
		y: -30,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
			when: "beforeChildren",
		},
	},
	exit: {
		opacity: 0,
		y: 30,
		transition: {
			duration: 0.4,
			ease: "easeIn",
		},
	},
};

// =========================== Container Animations ===========================
export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.5,
		},
	},
};

// =========================== Footer.jsx ===========================
export const footerVariants = {
	initial: {
		opacity: 0,
		y: 50,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
			when: "beforeChildren",
		},
	},
	exit: {
		opacity: 0,
		y: 30,
		transition: {
			duration: 0.4,
			ease: "easeIn",
		},
	},
};

export const socialLinksVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

export const socialLinkVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: 0.8,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export const copyrightVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
			delay: 0.4,
		},
	},
};
