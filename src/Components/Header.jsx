import { motion } from "framer-motion";
import { mainHeaderVariants } from "../utils/Animations_Variants";

const Header = () => {
	return (
		<div className="container">
			<motion.h1
				className="display-6 fw-bold text-primary"
				variants={mainHeaderVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				key={"mainHeader"}
			>
				Study with Fun <br />
				<small className="text-muted sub-heading">
					Click on the Card to see the answer
				</small>
			</motion.h1>
		</div>
	);
};

export default Header;
