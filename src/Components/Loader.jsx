// Dependencies
import { motion } from "framer-motion";

const Loader = ({ darkMode = false }) => {
	const loaderVariants = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: { duration: 0.5 },
		},
		exit: {
			opacity: 0,
			transition: { duration: 0.5 },
		},
	};

	const spinnerVariants = {
		animate: {
			rotate: 360,
			scale: [1, 1.1, 1],
			transition: {
				rotate: {
					duration: 1,
					repeat: Infinity,
					ease: "linear",
				},
				scale: {
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
				},
			},
		},
	};

	const textVariants = {
		initial: { opacity: 0, y: 20 },
		animate: {
			opacity: [0.7, 1, 0.7],
			y: 0,
			transition: {
				opacity: {
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
				},
				y: {
					duration: 0.8,
					delay: 0.3,
					ease: "easeOut",
				},
			},
		},
	};

	return (
		<motion.div
			className={`loader-container d-flex flex-column justify-content-center align-items-center ${
				darkMode ? "dark-mode" : ""
			}`}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				backgroundColor: darkMode
					? "rgba(18, 18, 18, 0.95)"
					: "rgb(255, 255, 255)",
				zIndex: 9999,
			}}
			variants={loaderVariants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<motion.div
				className="spinner-border text-primary mb-3"
				style={{ width: "3rem", height: "3rem" }}
				variants={spinnerVariants}
				animate="animate"
			/>
			<motion.h3
				className={`fw-bold ${
					darkMode ? "text-light" : "text-primary"
				}`}
				variants={textVariants}
				initial="initial"
				animate="animate"
			>
				Loading Question Cards...
			</motion.h3>
			<motion.p
				className={`mt-2 ${darkMode ? "text-light" : "text-muted"}`}
				variants={textVariants}
				initial="initial"
				animate="animate"
			>
				Preparing your study materials
			</motion.p>
		</motion.div>
	);
};

export default Loader;
