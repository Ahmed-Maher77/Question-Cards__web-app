// React hooks
import { memo } from "react";

// Dependencies
import { motion } from "framer-motion";

// Utils
import { mainHeaderVariants } from "../utils/Animations_Variants";

const Header = ({ shouldAnimate = true }) => {
	return (
		<header className="container" role="banner">
			<motion.h1
				className="display-6 fw-bold text-primary"
				variants={mainHeaderVariants}
				initial={shouldAnimate ? "initial" : false}
				animate={shouldAnimate ? "animate" : false}
				exit="exit"
				key={"mainHeader"}
			>
				Study with Fun
			</motion.h1>
			<motion.p
				className="text-muted sub-heading mt-2"
				variants={mainHeaderVariants}
				initial={shouldAnimate ? "initial" : false}
				animate={shouldAnimate ? "animate" : false}
				exit="exit"
				key={"subHeader"}
			>
				Click on the cards or use keyboard navigation to reveal answers
			</motion.p>
		</header>
	);
};

// Memoize the Header component to prevent unnecessary re-renders
export default memo(Header);
